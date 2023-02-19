import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../assets/images/chair.png'
import PrimaryButton from '../../../components/primary/PrimaryButton';
const Banner = () => {
    return (
        <div className="hero bg-[url('/src/assets/images/bg.png')] pb-40">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6 text-lg">Helping patients achieve good dental health & beautiful smile is a privilege & responsibility. For over 10 years, my team & I have proudly provided the best dental experience in Bangladesh. Our comfort-first approach is designed to meet the needs of you & your entire family.</p>
                    <PrimaryButton>Getting Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;