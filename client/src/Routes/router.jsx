import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Profile from "../pages/Profile.jsx";
import App from "../App.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home/>,
                exact: true
            },
            {
                path: "/about",
                element: <About/>,
                exact: true
            },
            {
                path: "/profile",
                element: <Profile/>,
                exact: true
            }
                ]
    }
]);

export default router;