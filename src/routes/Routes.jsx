import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Registration from "../pages/Authentication/Registration";
import Login from "../pages/Authentication/Login";


const routes = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        children:[

            {
                index:true,
                element:<Home></Home>,
                loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/jobs`)
            },
            {
                path: "/login",
                element:<Login></Login>
            },
            {
                path: "/registration",
                element:<Registration></Registration>
            }, {
                path: "/",
                element:<Home></Home>
            }
        ]
    },

])


export default routes;


