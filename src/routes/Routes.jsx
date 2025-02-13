import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Registration from "../pages/Authentication/Registration";
import Login from "../pages/Authentication/Login";
import JobDetails from "../pages/JobDetails ";


const routes = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        children:[

            {
                index:true,
                element:<Home></Home>, 
            },
            {
                path: "/login",
                element:<Login></Login>
            },
            {
                path: "/registration",
                element:<Registration></Registration>
            },
            {
                path: "/jobs/:id",
                element:<JobDetails></JobDetails>,
                loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/jobs/${params.id}`)
            },
        ]
    },

])


export default routes;


