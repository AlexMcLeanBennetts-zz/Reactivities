import Button from "features/components/Button";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="flex flex-col justify-center align-middle items-center bg-white py-16">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <h1 className="text-lg font-bold pb-3">
                Opps We've looked everywhere and could not find this.
            </h1>
            <Button type="button" className="bg-[#20a7ac] py-2 px-3 rounded-md">
                <Link to="/activities">
                    Return to activities page
                </Link>
            </Button>
        </div>
    )
}

export default NotFound;