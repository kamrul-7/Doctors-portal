import React, { useContext } from 'react';
import { Navigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext);
    const error = useRouteError();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Navigate('/login')
            })
            .catch(err => console.log(err));
    }
    return (

        <div>
            <p className='text-red-500'>Something Went Wrong</p>
            <p className='text-red-400'>{error.statusText || error.message}</p>
            <h4 className='text-4xl'>Please<button onClick={handleLogOut} >SignOut</button>And Log back in.</h4>
        </div>
    );
};

export default DisplayError;