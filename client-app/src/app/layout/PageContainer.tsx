import { useStore } from "app/stores/store";
import Spinner from "features/components/Spinner";
import React from "react";

interface Props {
    children: React.ReactNode
}

export default function PageContainer({ children }: Props) {

    const { activityStore } = useStore();

    if (activityStore.loadingInitial === true) return (
        <div className='flex flex-col w-screen h-screen justify-center align-middle items-center'>
            <Spinner />
            <p>Loading Activities...</p>
        </div>
    )

    return (
        <section className="w-9/12 mx-auto mt-10">
            {children}
        </section>
    )
}