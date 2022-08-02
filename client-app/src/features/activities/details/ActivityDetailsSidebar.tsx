import { IActivity } from "app/models/activity";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

interface Props {
    activity: IActivity;
}

function ActivityDetailsSidebar({ activity: { attendees, host } }: Props) {
    return (
        <div className="">
            <h2 className="text-center py-3 bg-[#20a7ac] text-white font-bold rounded-t-lg">{attendees?.length} {attendees?.length === 1 ? 'person' : 'People'} Going</h2>
            <div className="bg-white divide-y rounded-b-lg">

                {attendees?.map(attendee => (
                    <div className="flex p-4 relative" key={attendee.username}>
                        {host?.username === attendee.username && (
                            <div className="ribbon-2">Host</div>
                        )}
                        <img src={attendee.image || "/images/user.png"} alt={attendee.displayName} className="rounded-lg w-20 h-20 mr-4" />
                        <div>
                            <Link to={`/profiles/${attendee.username}`}>
                                <h3 className="font-bold inline mr-2 text-[#20a7ac]">{attendee.displayName}</h3>
                            </Link>
                            <p className="text-orange-400 text-sm font-bold">Following</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default observer(ActivityDetailsSidebar)