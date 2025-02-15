import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Registration from "../pages/Authentication/Registration";
import Login from "../pages/Authentication/Login";
import JobDetails from "../pages/JobDetails ";
import AddJob from "../pages/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs";
import MyBids from "../pages/MyBids";
import BidRequests from "../pages/BidRequests";
import ErrorPage from "../pages/ErrorPage";
import UpdateJob from "../pages/UpdateJob";
import PrivateRoute from "./PrivateRoute";
import AllJobs from "../pages/AllJobs";


const routes = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
                element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
            },
            {
                path: "/update/:id",
                element:<PrivateRoute><UpdateJob></UpdateJob></PrivateRoute>,
                loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
            },
            {
                path: "/add-job",
                element:<PrivateRoute><UpdateJob></UpdateJob></PrivateRoute>
            },
            {
                path: "/all-jobs",
                element:<AllJobs></AllJobs>,
                
            },
            {
                path: "/my-jobs",
                element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>,
                
            },
            {
                path: "/my-bids",
                element:<PrivateRoute><MyBids></MyBids></PrivateRoute>
            },
            {
                path: "/bid-requests",
                element:<PrivateRoute><BidRequests></BidRequests></PrivateRoute>
            },
        ]
    },

])


export default routes;


