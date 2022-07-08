import { useStore } from "app/stores/store"
import Button from "features/components/Button";
import Spinner from "features/components/Spinner";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function ActivityDetails() {

    const { activityStore } = useStore();
    const { selectedActivity: activity, loadActivity, loadingInitial } = activityStore;
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (id) loadActivity(id)
    }, [id, loadActivity]);

    if (loadingInitial || !activity) return <Spinner />;

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
                    <Link to={`/manage/${activity.id}`}>
                        <Button
                            type="button"
                            className="w-24 border-2 border-r-0 rounded-l-md border-blue-400 text-blue-400 py-1"
                        >
                            Edit
                        </Button>
                    </Link>
                    <Link to="/activities">
                        <Button
                            type="button"
                            className="w-24 border-2 rounded-r-md border-slate-400 py-1"

                        >
                            Cancel
                        </Button>
                    </Link>

                </div>
            </div>

        </section>
    )
}

export default observer(ActivityDetails);