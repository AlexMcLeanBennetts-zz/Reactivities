import { useStore } from "app/stores/store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import ActivityFilters from "./ActivityFilters";
import ActivityList from "./ActivityList";

function ActivityDashboard() {

    const { activityStore } = useStore();
    const { activitiesByDate, loadActivities, activityRegistry } = activityStore;


    useEffect(() => {
        if (activityRegistry.size <= 1) loadActivities();
    }, [activityRegistry, loadActivities])



    function thereAreActivities(): boolean {
        return activitiesByDate.length > 0 ? true : false
    }
    return (
        <div className="flex gap-6">
            <div className="w-7/12">
                {thereAreActivities() ?
                    <ActivityList />
                    :
                    <p>There are no events to display</p>
                }
            </div>
            <div className="w-5/12">
                <ActivityFilters />
            </div>
        </div>
    )
}

export default observer(ActivityDashboard)