import PageContainer from "app/layout/PageContainer";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <PageContainer>
            <h1 className="text-3xl font-bold">Home Page</h1>
            <p>Go to <Link to="/activities">Activities</Link></p>
        </PageContainer>
    )
}

export default HomePage;