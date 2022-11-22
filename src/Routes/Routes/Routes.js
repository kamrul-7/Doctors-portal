import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Appointment from "../../pages/Appointment/Appointment/Appointment";
import AllUsers from "../../pages/dashboard/Dashboard/AllUsers/AllUsers";
import MyAppointment from "../../pages/dashboard/Myappointment/MyAppointment";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/login/Login";
import Signup from "../../pages/signup/Signup";
import PrivateRoute from "../privateRoute/PrivateRoute";
import AdminRoute from '../AdminRoute/AdminRoute'
import AddDoctor from "../../pages/dashboard/Dashboard/AddDoctor/AddDoctor";
import ManageDoctors from "../../pages/dashboard/Dashboard/ManageDoctors/ManageDoctors";
import Footer from "../../pages/shared/Footer/Footer";
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
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
        ]

    },

])
export default router;