import { IActivity } from "app/models/activity"

interface Props {
    activity: IActivity
}

function ActivityDetailsInfo({ activity }: Props) {
    return (
        <div className="bg-white divide-y mt-5 rounded-lg">
            <div className="flex align-center py-3 px-4">
                <span className="inline-block pr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="#20a7ac">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                    </svg>
                </span>
                <p className="inline">{activity.description}</p>
            </div>
            <div className="flex align-center py-3 px-4">
                <span className="inline-block pr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="#20a7ac">
                        <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                    </svg>
                </span>
                <p className="inline">{activity.date}</p>
            </div>
            <div className="flex align-center py-3 px-4">
                <span className="inline-block pr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="#20a7ac">
                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                    </svg>
                </span>
                <p className="inline">{activity.city}, {activity.venue}</p>
            </div>
        </div>
    )
}

export default ActivityDetailsInfo