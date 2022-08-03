
import { render, screen } from '@testing-library/react'
import App from 'app/layout/App'
import { IActivity } from 'app/models/activity';
import { format } from 'date-fns';
import testData from 'tests/mocks/data/testData';
import resetServer from 'tests/utils/functions/resetServer';

describe('When there is data', () => {
    beforeEach(() => {
        render(<App />)
    })
    it('renders the activity title to the screen', async () => {

        const activityTitle = await screen.findByRole('heading', { name: testData[0].title })
        expect(activityTitle).toBeInTheDocument();
    })
    it('renders the activity date to the screen', async () => {
        const activityDate = await screen.findByText(format(testData[0].date!, 'dd MMM yyyy'))
        expect(activityDate).toBeInTheDocument();
    })
    it('renders the activity description to the screen', async () => {
        const activityDescription = await screen.findByText(testData[0].description)
        expect(activityDescription).toBeInTheDocument();
    })
    it('renders the activity city and venue to the screen', async () => {
        const activityCity = await screen.findByText(`${testData[0].city}, ${testData[0].venue}`)
        expect(activityCity).toBeInTheDocument();
    })
    it('renders the activity category to the screen', async () => {
        const activityCategory = await screen.findByText(testData[0].category)
        expect(activityCategory).toBeInTheDocument();
    })

})
it('when there is multiple events it renders each one to the screen', async () => {
    let response: IActivity[] = testData;
    let eventData = {
        category: "culture",
        city: "London",
        date: new Date("2022-07-27T13:38:11.3218859"),
        description: "Activity 1 month in future",
        id: "00b8ef53-e630-4f27-bad3-734d4c9ee7d6",
        title: "Future Activity 1",
        venue: "Natural History Museum",
    }
    let newEvent = new IActivity(eventData);
    response.push(newEvent);
    resetServer(response);

    render(<App />)

    const firstEventTitle = await screen.findByRole('heading', { name: response[0].title })
    const secondEventTitle = await screen.findByRole('heading', { name: response[1].title })

    expect(firstEventTitle).toBeInTheDocument();
    expect(secondEventTitle).toBeInTheDocument();
})
