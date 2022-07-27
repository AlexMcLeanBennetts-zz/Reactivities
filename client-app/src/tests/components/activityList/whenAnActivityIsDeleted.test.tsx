import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "app/layout/App"
import { IActivity } from "app/models/activity";
import testData from "tests/mocks/data/testData";
import resetServer from "tests/utils/functions/resetServer";
import renderWithRouter from "tests/utils/setup/renderWithRouter";

describe('An Activity is able to be deleted', () => {
    beforeEach(() => {
        renderWithRouter(<App />)
    })
    it('There is a delete button on each activity', async () => {
        const deleteButton = await screen.findByRole('button', { name: /delete/i })
        expect(deleteButton).toBeInTheDocument();
    })
    it('when you click on the delete button the activity is deleted', async () => {
        const event = await screen.findByText(/future activity 2/i);
        const deleteButton = screen.getByRole('button', { name: /delete/i })

        expect(event).toBeInTheDocument();
        userEvent.click(deleteButton);

        const eventAfterClick = screen.queryByText(/future activity 2/i);
        expect(eventAfterClick).not.toBeInTheDocument();
    })
})
describe('when there are multiple events', () => {
    it('Deleting one event does not delete them all', async () => {
        let response: IActivity[] = testData;
        let newEvent: IActivity = {
            category: "culture",
            city: "London",
            date: new Date("2022-07-27T13:38:11.3218859"),
            description: "Activity 1 month in future",
            id: "00b8ef53-e630-4f27-bad3-734d4c9ee7d6",
            title: "Future Activity 1",
            venue: "Natural History Museum",
        }
        response.push(newEvent);
        resetServer(response);

        render(<App />);

        const event = await screen.findByText(/future activity 2/i);
        const event2 = await screen.findByText(/future activity 1/i);
        const deleteButtons = screen.getAllByRole('button', { name: /delete/i });
        const eventDeleteButton = deleteButtons[0];

        expect(event).toBeInTheDocument();
        expect(event2).toBeInTheDocument();
        userEvent.click(eventDeleteButton);

        const eventAfterClick = screen.queryByText(/future activity 2/i);
        expect(eventAfterClick).not.toBeInTheDocument();
        expect(event2).toBeInTheDocument();
    })
})