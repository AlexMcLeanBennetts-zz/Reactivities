interface Props {
    openForm: () => void;
}
export default function NavBar({ openForm }: Props) {
    return (
        <header className="flex justify-between sticky pl-10 pr-24 py-4 bg-gradient-to-br from-[#182a73] to-[#20a7ac]">
            <div className="w-10">
                <img src="images/logo.png" alt="Reactivities" />
            </div>
            <ul className="flex text-amber-50 items-center">
                <li className="pr-8">Activities</li>
                <li>
                    <button
                        onClick={() => openForm()}
                        className="bg-green-600 px-3 py-2 rounded-md"
                    >Create Activity
                    </button>
                </li>
            </ul>
        </header>
    )
}