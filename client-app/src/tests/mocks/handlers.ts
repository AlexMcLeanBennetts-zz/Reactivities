import { rest } from 'msw';
import testData from './data/testData';

export const handlers = [
    rest.get('http://localhost:5000/api/activities', (req, res, ctx) => {
        return res(
            ctx.json(testData),
        )
    }),
]