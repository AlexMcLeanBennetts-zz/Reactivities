import { Profile } from "app/models/profile";
import { observer } from "mobx-react-lite"
import { Link } from "react-router-dom";

interface Props {
    attendees: Profile[];
}

function ActivityListItemAttendee({ attendees }: Props) {
    return (
        <ul className="flex">
            {attendees.map(attendee => (
                <li key={attendee.displayName}>
                    <Link to={`/profiles/${attendee.username}`}>
                        <img src={attendee.image || "/images/user.png"} className="w-10 h-10 mr-4 rounded-full" alt={attendee.username} />
                    </Link>
                </li>

            ))}
        </ul>
    )
}

export default observer(ActivityListItemAttendee);