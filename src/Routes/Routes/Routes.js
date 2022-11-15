import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Appointment from "../../pages/Appointment/Appointment/Appointment";
import DashBoard from "../../pages/Dashbord/Dashbord/DashBoard";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/login/Login";
import Signup from "../../pages/signup/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>

            },

        ]
    },
    {
        path: '/dashboard',
        element: <DashBoard></DashBoard>

    }
])
export default router;