import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../../assets/images/pngegg (1).png'

const Payment = () => {
    return (
        <div className='ml-10 flex justify-center my-20'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Welcome To Payment!" className='text-red-600' /></figure>
                <div className="card-body">
                    <h2 className="card-title text-center text-red-700">Pay Now</h2>
                    <p className='text-blue-600'>You have a Order. Please Complete Your Payment.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to='/checkout'>Process</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;