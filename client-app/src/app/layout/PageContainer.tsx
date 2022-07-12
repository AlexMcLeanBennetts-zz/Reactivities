import React from "react";

interface Props {
    children: React.ReactNode
}

export default function PageContainer({ children }: Props) {

    return (
        <section className="w-9/12 mx-auto mt-10">
            {children}
        </section>
    )
}