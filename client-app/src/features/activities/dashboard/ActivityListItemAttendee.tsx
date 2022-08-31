import { Profile } from "app/models/profile";
import Controller from "common/poppup/PopUpController";
import Select from "common/poppup/PopUpSelect";
import ProfileCard from "features/profiles/ProfileCard";
import { observer } from "mobx-react-lite";

interface Props {
    attendees: Profile[];
}

function ActivityListItemAttendee({ attendees }: Props) {
    return (
        <ul className="flex">
            {attendees.map(attendee => (
                <div key={attendee.displayName}>
                    <Controller>
                        <Select>
                            <li className="cursor-pointer">
                                <img src={attendee.image || "/images/user.png"} className="w-10 h-10 mr-4 rounded-full" alt={attendee.username} />
                            </li>

                        </Select>
                        <ProfileCard profile={attendee} />
                    </Controller>
                </div>

            ))}
        </ul>
    )
}

export default observer(ActivityListItemAttendee);