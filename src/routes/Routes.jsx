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
                element:<JobDetails></JobDetails>,
                loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
            },
            {
                path: "/update/:id",
                element:<UpdateJob></UpdateJob>,
                loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
            },
            {
                path: "/add-job",
                element:<AddJob></AddJob>
            },
            {
                path: "/my-jobs",
                element:<MyPostedJobs></MyPostedJobs>,
                
            },
            {
                path: "/my-bids",
                element:<MyBids></MyBids>
            },
            {
                path: "/bid-requests",
                element:<BidRequests></BidRequests>
            },
        ]
    },

])


export default routes;


