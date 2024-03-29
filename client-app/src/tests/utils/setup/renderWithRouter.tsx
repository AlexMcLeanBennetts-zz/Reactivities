import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const renderWithRouter = (ui: any, { route = '/' } = {}) => {
    window.history.pushState({}, 'Test page', route)

    return {
        ...render(
            <BrowserRouter>
                {ui}
            </BrowserRouter>
        )
    }
}

export default renderWithRouter;