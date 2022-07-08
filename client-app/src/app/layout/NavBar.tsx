
import { NavLink } from "react-router-dom";

export default function NavBar() {

    return (
        <header className="flex justify-between sticky pl-10 pr-24 py-4 bg-gradient-to-br from-[#182a73] to-[#20a7ac]">
            <div className="w-10">
                <NavLink to='/'>
                    <img src="images/logo.png" alt="Reactivities" />
                </NavLink>
            </div>
            <ul className="flex text-amber-50 items-center">
                <li className="pr-8">
                    <NavLink to='/activities'>
                        Activities
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/createActivity'>
                        <button
                            className="bg-green-600 px-3 py-2 rounded-md"
                        >
                            Create Activity
                        </button>
                    </NavLink>
                </li>
            </ul>
        </header>
    )
}