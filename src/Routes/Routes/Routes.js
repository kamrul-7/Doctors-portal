import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Appointment from "../../pages/Appointment/Appointment/Appointment";
import AllUsers from "../../pages/dashboard/Dashboard/AllUsers/AllUsers";
import DashBoard from "../../pages/dashboard/Dashboard/DashBoard";
import MyAppointment from "../../pages/dashboard/Myappointment/MyAppointment";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/login/Login";
import Signup from "../../pages/signup/Signup";
import PrivateRoute from "../privateRoute/PrivateRoute";
import AdminRoute from '../AdminRoute/AdminRoute'
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
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
        ]

    },

])
export default router;