import React from 'react';
import treatment from '../../../assets/images/treatment.png'
const Terms = () => {
    return (
        <div className='grid lg:grid-cols-2 mt-32'>
            <div className='lg:w-96 md:ml-36 mb-6'>
                <img src={treatment} alt="" />
            </div>
            <div>
                <h2 className='font-bold text-5xl'>Exceptional Dental <br /> Care, on Your Terms</h2>
                <h3 className='text-base font-normal mt-6 lg:mr-36'>It is a long established fact that a reader will be distracted by the  readable content of a page when looking at its layout. The point  of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content  here', making it look like readable English. Many desktop  publishing packages and web page</h3>
                <button className="btn text-white mt-11 bg-gradient-to-r from-secondary to-primary">Get Started</button>
            </div>
        </div>
    );
};

export default Terms;