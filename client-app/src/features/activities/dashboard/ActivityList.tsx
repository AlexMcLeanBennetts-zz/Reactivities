import { IActivity } from "app/models/activity";

interface Props {
    activities: IActivity[];
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
}

export default function ActivityList({ activities, selectActivity, deleteActivity }: Props) {
    return (
        <ul className="bg-white divide-y px-8 rounded-md">
            {activities.map((activity) => (
                <li key={activity.id} className="py-5">
                    <h2 className="h2Title">{activity.title}</h2>
                    <p className="metaTag">{activity.date}</p>
                    <p>{activity.description}</p>
                    <p>{activity.city}, {activity.venue}</p>
                    <div className="flex justify-between items-center mt-2">
                        <p className="border-2 p-1 rounded-md">{activity.category}</p>
                        <div>
                            <button
                                className="bg-red-500 py-2 px-3 rounded-md mr-2 text-white"
                                onClick={() => deleteActivity(activity.id)}
                            >
                                Delete
                            </button>
                            <button
                                className="bg-[#20a7ac] py-2 px-3 rounded-md"
                                onClick={() => selectActivity(activity.id)}
                            >
                                View
                            </button>

                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}