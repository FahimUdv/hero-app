import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import AllApps from "../Pages/AllApps";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import InstalledApps from "../Pages/InstalledApps";
import AppDetails from "../Pages/AppDetails";

const router = createBrowserRouter([
    {
        path : "/",
        Component : MainLayout,
        errorElement : <ErrorPage />,
        hydrateFallbackElement : <p>Loading...</p>,
        children : [
            {
                index : true,
                Component : Home,
                // loader : () => fetch('./allAppData.json'),
            },
            {
                path : "/allapps",
                Component : AllApps,
            },
            {
                path : "/installedapps",
                Component : InstalledApps,
            },
            {
                path : "/app/:id",
                Component : AppDetails,
            },
        ]
    },
]); 

export default router