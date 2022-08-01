import { useStore } from "app/stores/store";
import Button from "common/Button";
import LoginForm from "features/users/LoginForm";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

function HomePage() {
    const { userStore, modalStore } = useStore();


    return (
        <div className="flex flex-col justify-center items-center align-middle w-screen h-screen bg-gradient-to-br from-[#182a73] to-[#20a7ac]">
            <div className="flex items-center">
                <img src='/images/logo.png' alt='' className="inline-block w-20" />
                <p className="inline text-5xl text-white font-bold leading-5">Reactivities</p>
            </div>
            {userStore.isLoggedIn ? (
                <>
                    <h1 className="text-3xl text-white mt-6 mb-4">Welcome to Reactivities</h1>
                    <Button type='button' className="bg-white rounded-lg py-2 px-6 font-bold">
                        <Link to="/activities">Go to Activities</Link>

                    </Button>

                </>
            ) : (
                <>
                    <Button
                        type='button'
                        className="bg-white rounded-lg py-2 w-32 font-bold"
                        onClick={() => modalStore.openModal(<LoginForm />)}
                    >
                        Login
                    </Button>
                    <Button
                        type='button'
                        className="bg-white rounded-lg py-2 w-32 font-bold mt-4"
                        onClick={() => modalStore.openModal(<LoginForm />)}
                    >
                        Register
                    </Button>
                </>
            )}
        </div>
    )
}

export default observer(HomePage);