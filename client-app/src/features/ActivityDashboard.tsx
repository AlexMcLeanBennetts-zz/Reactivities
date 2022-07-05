import { IActivity } from "app/models/activity";
import ActivityList from "./activities/dashboard/ActivityList";
import ActivityDetails from "./activities/dashboard/details/ActivityDetails";
import AcitvityForm from "./activities/dashboard/form/ActivityForm";

interface Props {
    activities: IActivity[];
    selectedActivity: IActivity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (activity: IActivity) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean
}

function ActivityDashboard({
    activities,
    selectedActivity,
    selectActivity,
    cancelSelectActivity,
    editMode,
    openForm,
    closeForm,
    createOrEdit,
    deleteActivity,
    submitting
}: Props) {
    function thereAreActivities(): boolean {
        return activities.length > 0 ? true : false
    }
    return (
        <div className="flex gap-6">
            <div className="w-7/12">
                {thereAreActivities() ?
                    <ActivityList activities={activities} selectActivity={selectActivity} deleteActivity={deleteActivity} submitting={submitting} />
                    :
                    <p>There are no events to display</p>
                }
            </div>
            <div className="w-5/12">
                {selectedActivity && !editMode &&
                    <>
                        <ActivityDetails
                            activity={selectedActivity}
                            cancelSelectActivity={cancelSelectActivity}
                            openForm={openForm}
                        />
                    </>
                }
                {editMode &&
                    <AcitvityForm closeForm={closeForm} activity={selectedActivity} createOrEdit={createOrEdit} submitting={submitting} />
                }
            </div>
        </div>
    )
}

export default ActivityDashboard