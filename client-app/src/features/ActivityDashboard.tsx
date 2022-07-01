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
    deleteActivity
}: Props) {
    return (
        <div className="flex gap-6">
            <div className="w-7/12">

                <ActivityList activities={activities} selectActivity={selectActivity} deleteActivity={deleteActivity} />
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
                    <AcitvityForm closeForm={closeForm} activity={selectedActivity} createOrEdit={createOrEdit} />
                }
            </div>
        </div>
    )
}

export default ActivityDashboard