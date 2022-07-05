import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import { server } from 'tests/mocks/server';
import { rest } from 'msw';

import App from "app/layout/App"
import resetServer from "tests/utils/functions/resetServer";

it('When the server sends no data it displays "there are no events to display"', async () => {
    let response: [] = [];
    resetServer(response);

    render(<App />)

    const noDataMessage = await screen.findByText('There are no events to display')
    expect(noDataMessage).toBeInTheDocument();
})

it('when the server sends an error message it displays "There are no events to display', async () => {
    server.resetHandlers(
        rest.get('http://localhost:3030/dashboard', (req, res, ctx) => {
            return (res(ctx.status(503)))
        })
    )

    render(<App />)

    const noDataMessage = await screen.findByText('There are no events to display')
    expect(noDataMessage).toBeInTheDocument();
})