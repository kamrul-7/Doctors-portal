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
import DisplayError from "../../pages/shared/DisplayError/DisplayError";
import Payment from "../../pages/dashboard/Dashboard/Payment/Payment";
import CheckOutForm from "../../pages/dashboard/CheckOut/CheckOutForm";
import Contact from "../../pages/Home/contact/Contact";
import Testimonial from "../../pages/Home/testimonial/Testimonial";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
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
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'checkout',
                element: <CheckOutForm></CheckOutForm>
            },
            {
                path: 'aboutUs',
                element: <Contact></Contact>
            },
            {
                path: 'review',
                element: <Testimonial></Testimonial>
            },


        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
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