import { useStore } from "app/stores/store"
import Spinner from "common/Spinner";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ActivityDetailsChat from "./ActivityDetailsChat";
import ActivityDetailsHeader from "./ActivityDetailsHeader";
import ActivityDetailsInfo from "./ActivityDetailsInfo";
import ActivityDetailsSidebar from "./ActivityDetailsSidebar";

function ActivityDetails() {

    const { activityStore } = useStore();
    const { selectedActivity: activity, loadActivity } = activityStore;
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (id) loadActivity(id)
    }, [id, loadActivity]);

    if (activityStore.loadingInitial === true || !activity) return (
        <div className='flex flex-col w-screen h-screen justify-center align-middle items-center'>
            <Spinner />
            <p>Loading Activities...</p>
        </div>
    )
    return (
        <section className="flex justify-between">
            <div className="w-7/12">
                <ActivityDetailsHeader activity={activity} />
                <ActivityDetailsInfo activity={activity} />
                <ActivityDetailsChat />
            </div>
            <div className="w-4/12">
                <ActivityDetailsSidebar />
            </div>

        </section>
    )
}

export default observer(ActivityDetails);