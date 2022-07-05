import { useStore } from "app/stores/store";
import { observer } from "mobx-react-lite";
import ActivityList from "./activities/dashboard/ActivityList";
import ActivityDetails from "./activities/dashboard/details/ActivityDetails";
import AcitvityForm from "./activities/dashboard/form/ActivityForm";

function ActivityDashboard() {

    const { activityStore } = useStore();
    const { activitiesByDate } = activityStore;

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
                {activityStore.selectedActivity && !activityStore.editMode &&
                    <ActivityDetails />
                }
                {activityStore.editMode &&
                    <AcitvityForm />
                }
            </div>
        </div>
    )
}

export default observer(ActivityDashboard)