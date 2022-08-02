import { IActivity } from "app/models/activity"
import { useStore } from "app/stores/store";
import Button from "common/Button";
import { format } from "date-fns";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

interface Props {
    activity: IActivity;
}

function ActivityDetailsHeader({ activity }: Props) {
    const { activityStore: { updateAttendance, loading } } = useStore();
    return (
        <div className="rounded-lg overflow-hidden">
            <div className="relative">
                <img src={`/images/categoryImages/${activity.category}.jpg`} alt={activity.category} className="brightness-[30%]" />
                <div className="absolute bottom-[5%] left-[5%] w-full h-auto text-white">
                    <h1 className="text-3xl font-bold capitalize">{activity.title}</h1>
                    <p className="text-sm mb-2">{format(activity.date!, 'dd MMM yyyy')}</p>
                    <p>Hosted by <Link to={`/profiles/${activity.host?.username}`}>{activity.host?.displayName}</Link></p>
                </div>
            </div>
            <div className="flex justify-between bg-white p-5">

                {activity.isHost ? (
                    <Button type="button" className="bg-orange-600 py-2 px-3 rounded-md text-white text-sm font-bold" ><Link to={`/manage/${activity.id}`}>Manage Event</Link></Button>
                ) : activity.isGoing ? (
                    <Button type="button" className="bg-gray-300 py-2 px-3 rounded-md text-sm font-bold" onClick={updateAttendance} isLoading={loading}>Cancel Attenance</Button>
                ) :
                    <Button type="button" className="bg-[#20a7ac] py-2 px-3 rounded-md text-white mr-2 text-sm font-bold" onClick={updateAttendance} isLoading={loading}>Join Activity</Button>
                }


            </div>

        </div>
    )
}

export default observer(ActivityDetailsHeader);