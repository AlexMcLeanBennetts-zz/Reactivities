
import { useStore } from "app/stores/store";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    const { userStore: { user, logout } } = useStore();

    return (
        <header className="flex justify-between sticky pl-10 pr-24 py-4 bg-gradient-to-br from-[#182a73] to-[#20a7ac]">
            <div>
                <ul className="flex text-amber-50 items-center">
                    <li className="pr-8">
                        <NavLink to='/'>
                            <img src="/images/logo.png" alt="Reactivities" className="w-10" />
                        </NavLink>

                    </li>
                    <li className="pr-8">
                        <NavLink to='/activities'>
                            Activities
                        </NavLink>
                    </li>
                    <li className="pr-8">
                        <NavLink to='/errors'>
                            Errors
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
            </div>
            <ul className="flex">
                <li>
                    <img src={user?.image || '/images/user.png'} className="w-10 rounded-full" alt="user icon" />
                </li>

                <div className="">

                    <div className="dropdown inline-block relative">
                        <button className="text-white font-semibold py-2 px-2 rounded inline-flex items-center">
                            <span className="mr-1">{user?.displayName}</span>
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                        </button>
                        <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 z-10 right-0.5">
                            <li className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-nowrap">
                                <NavLink to={`/profile/${user?.username}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                    My Profile
                                </NavLink>
                            </li>
                            <li className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-nowrap cursor-pointer" onClick={logout}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                                </svg>
                                Logout
                            </li>
                        </ul>
                    </div>

                </div>



            </ul>

        </header >
    )
}