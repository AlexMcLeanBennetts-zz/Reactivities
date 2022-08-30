import { IActivity } from "app/models/activity";
import Button from "common/Button";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import ActivityListItemAttendee from "./ActivityListItemAttendee";

interface Props {
    activity: IActivity;
}

function ActivityListItem({ activity }: Props) {


    return (
        <li key={activity.id} className="pb-5 bg-white divide-y rounded-lg border-2 border-gray-300 mb-5 drop-shadow-md">
            {activity.isCancelled &&
                <div className="z-10 bg-red-500 text-white w-full text-center font-bold py-1 rounded-t-lg"><p>Cancelled</p></div>
            }
            <div className="flex gap-5 px-8 py-4">
                <div><img src="images/user.png" alt="User" className="rounded-full w-20" /></div>
                <div>
                    <Link to={`/activities/${activity.id}`}>
                        <h3 className="text-lg font-bold capitalize">{activity.title}</h3>
                    </Link>
                    <p className="font-semibold">Hosted by {activity.host?.displayName}</p>
                    {activity.isHost && (
                        <p className="mt-2 p-2 text-sm border-2 rounded-lg text-orange-400 border-orange-400">You are hosting this activity</p>
                    )}
                    {activity.isGoing && !activity.isHost && (
                        <p className="mt-2 p-2 text-sm border-2 rounded-lg text-green-500 border-green-500">You are going to this activity</p>
                    )}
                </div>
            </div>
            <div className="px-8 py-4">
                <span className="inline mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {format(activity.date!, 'dd MMM yyyy h:mm aa')}
                </span>
                <span className="inline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {activity.venue}
                </span>
            </div>
            <div className="py-4 px-8 bg-gray-200">
                <ActivityListItemAttendee attendees={activity.attendees!} />
            </div>
            <div className="flex justify-between px-8 py-4">
                <div>{activity.description}</div>
                <Link to={`/activities/${activity.id}`}>
                    <Button
                        className="bg-[#20a7ac] py-2 px-3 rounded-md"
                        type='button'
                    >
                        View
                    </Button>
                </Link>
            </div>
        </li>
    )
}

export default ActivityListItem;