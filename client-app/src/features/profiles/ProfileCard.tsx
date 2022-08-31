import { Profile } from "app/models/profile";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

interface Props {
    profile: Profile;
}

function ProfileCard({ profile }: Props) {
    return (
        <div className="bg-white drop-shadow-lg rounded-lg overflow-hidden">
            <Link to={`/profiles/${profile.username}`}>
                <img src={profile.image || "/images/user.png"} alt={profile.displayName} className="w-52" />
                <div className="p-4 divide-y">
                    <div>
                        <h2 className="font-bold text-lg">{profile.displayName}</h2>
                        <p>Bio goes here</p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                        <p className="inline-block">20 followers</p>

                    </div>
                </div>
            </Link>

        </div>
    )
}

export default observer(ProfileCard)