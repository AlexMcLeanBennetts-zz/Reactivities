import Calendar from "react-calendar";

function ActivityFilters() {
    return (
        <div className="mt-14">
            <div className="bg-white divide-y mb-10 drop-shadow-md rounded-lg">
                <h2 className="text-[#20a7ac] font-bold p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 inline-block mr-4" viewBox="0 0 20 20" fill="#20a7ac">
                        <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                    </svg>
                    Filters
                </h2>
                <ul className="divide-y">
                    <li className="p-2">All Activities</li>
                    <li className="p-2">I'm Going</li>
                    <li className="p-2">I'm Hosting</li>
                </ul>

            </div>

            <Calendar />
        </div>
    )
}

export default ActivityFilters;