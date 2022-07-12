import { useStore } from "app/stores/store";
import { group } from "console";
import { observer } from "mobx-react-lite";
import { Fragment } from "react";

import ActivityListItem from "./ActivityListItem";

function ActivityList() {
    const { activityStore } = useStore();
    const { groupedActivities } = activityStore


    return (
        <>
            {
                groupedActivities.map(([group, activities]) => (
                    <Fragment key={group}>
                        <h2 className="text-sky-400 font-bold my-4">{group}</h2>

                        <ul className="">
                            {activities.map((activity) => (
                                <ActivityListItem key={activity.id} activity={activity} />
                            ))}
                        </ul>
                    </Fragment>
                ))
            }
        </>
    )
}

export default observer(ActivityList)