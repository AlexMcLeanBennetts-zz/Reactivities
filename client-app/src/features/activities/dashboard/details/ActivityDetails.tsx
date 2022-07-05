import { useStore } from "app/stores/store"
import Spinner from "features/components/Spinner";
import { observer } from "mobx-react-lite";

function ActivityDetails() {

    const { activityStore } = useStore();

    const { selectedActivity: activity, openForm, cancelSelectedActivity } = activityStore;

    if (!activity) return <Spinner />;

    return (
        <section className="bg-white rounded-md overflow-hidden">
            <img src={`/images/categoryImages/${activity.category}.jpg`} alt={activity.category} />
            <div className="p-5 divide-y">
                <div className="pb-3">
                    <h2 className="h2Title">{activity.title}</h2>
                    <p className="metaTag">{activity.date}</p>
                    <p>{activity.description}</p>
                </div>
                <div className="flex justify-items-stretch pt-4">
                    <button
                        className="w-1/2 border-2 border-r-0 rounded-l-md border-blue-400 text-blue-400 py-1"
                        onClick={() => openForm(activity.id)}
                    >
                        Edit
                    </button>
                    <button
                        className="w-1/2 border-2 rounded-r-md border-slate-400 py-1"
                        onClick={() => cancelSelectedActivity()}
                    >Cancel</button>

                </div>
            </div>

        </section>
    )
}

export default observer(ActivityDetails);