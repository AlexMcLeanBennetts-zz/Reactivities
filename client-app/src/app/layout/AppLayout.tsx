import { Outlet } from "react-router";
import NavBar from "./NavBar";
import PageContainer from "./PageContainer";

function AppLayout() {
    return (
        <>
            <NavBar />
            <PageContainer>
                <Outlet />

            </PageContainer>
        </>
    )
}

export default AppLayout