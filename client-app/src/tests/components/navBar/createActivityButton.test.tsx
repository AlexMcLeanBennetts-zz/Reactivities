import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from "app/layout/App"

function openFormOnNavBar(): void {
    const createActivityButton = screen.getByText('Create Activity');

    userEvent.click(createActivityButton);
}

describe('There should be a semantic button to create an activity', () => {
    it('has the role of a button', () => {
        render(<App />);
        const createActivityButton = screen.getByRole('button', { name: 'Create Activity' })
        expect(createActivityButton).toBeInTheDocument();
    })
})

describe('When clicking the create activity button on the navBar', () => {
    beforeEach(() => {
        render(<App />)
    })

    it('opens the Create activity form', async () => {
        const formBeforeClick = screen.queryByRole('textbox', { name: 'title' });
        expect(formBeforeClick).not.toBeInTheDocument();

        openFormOnNavBar()

        const formAfterClick = await screen.findByRole('textbox', { name: /title/i });
        expect(formAfterClick).toBeInTheDocument();
    })

    it('each form input should be blank', async () => {
        openFormOnNavBar();

        const title = await screen.findByRole('textbox', { name: /title/i });
        const descripton = screen.getByRole('textbox', { name: /description/i });
        const category = screen.getByRole('textbox', { name: /category/i });
        const date = screen.getByLabelText(/date/i)
        const city = screen.getByRole('textbox', { name: /city/i });
        const venue = screen.getByRole('textbox', { name: /venue/i });

        expect(title).toHaveValue('');
        expect(descripton).toHaveValue('');
        expect(category).toHaveValue('');
        expect(date).toHaveValue('');
        expect(city).toHaveValue('');
        expect(venue).toHaveValue('');

    })

    it('when we are viewing an activity it opens a blank form', async () => {
        //open the activty details component
        const allViewButtons = await screen.findAllByRole('button', { name: 'View' });
        const firstActivtyViewButton = allViewButtons[0]
        userEvent.click(firstActivtyViewButton);

        openFormOnNavBar();

        const formInput_Title = await screen.findByRole('textbox', { name: /title/i });
        expect(formInput_Title).toHaveValue('');
    })

})