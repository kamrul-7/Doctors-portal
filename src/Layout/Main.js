import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../pages/navbar/NavBar';
import Footer from '../pages/shared/Footer/Footer';


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>

            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;