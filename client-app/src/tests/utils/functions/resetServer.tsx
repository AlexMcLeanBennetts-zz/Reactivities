import { server } from 'tests/mocks/server';
import { rest } from 'msw';
import { IActivity } from 'app/models/activity';

function resetServer(response: [] | IActivity[]): void {
    server.resetHandlers(
        rest.get('http://localhost:5000/api/activities', (req, res, ctx) => {
            return (res(ctx.json(response)))
        })
    )
}

export default resetServer;