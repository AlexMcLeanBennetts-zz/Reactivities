import { useStore } from "app/stores/store";
import Button from "features/components/Button";
import { observer } from "mobx-react-lite";
import { SyntheticEvent, useState } from "react";

function ActivityList() {
    const { activityStore } = useStore();
    const { activities, loading, deleteActivity, selectActivity } = activityStore
    const [target, setTarget] = useState('')

    const handleActivityDelete = (e: SyntheticEvent<HTMLButtonElement>, id: string) => {
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }

    return (
        <ul className="bg-white divide-y px-8 rounded-md">
            {activities.map((activity) => (
                <li key={activity.id} className="py-5">
                    <h2 className="h2Title">{activity.title}</h2>
                    <p className="metaTag">{activity.date}</p>
                    <p>{activity.description}</p>
                    <p>{activity.city}, {activity.venue}</p>
                    <div className="flex justify-between items-center mt-2">
                        <p className="border-2 p-1 rounded-md">{activity.category}</p>
                        <div>
                            <Button
                                type="button"
                                className="bg-red-500 py-2 px-3 rounded-md mr-2 text-white"
                                onClick={(e) => handleActivityDelete(e, activity.id)}
                                name={activity.id}
                                isLoading={loading && target === activity.id}
                            >
                                Delete
                            </Button>
                            <Button
                                className="bg-[#20a7ac] py-2 px-3 rounded-md"
                                onClick={() => selectActivity(activity.id)}
                                type='button'
                            >
                                View
                            </Button>

                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default observer(ActivityList)