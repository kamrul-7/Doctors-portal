import React from 'react';
import PrimaryButton from '../../../components/primary/PrimaryButton';
const Contact = () => {
    return (
        <div className="bg-[url('/src/assets/images/appointment.png')] py-12 text-center text-white ">
            <div className=''>
                <h4 className='text-xl font-bold text-primary my-6'>Contact Us</h4>
                <h2 className='font-20 text-3xl'>Stay connected with us</h2>
            </div>
            <div className='grid grid-rows-3 place-items-center mt-10'>
                <input name='email' type="text" placeholder="Email Address" required className="input input-bordered lg:w-1/2" />
                <input name='subject' type="text" placeholder="Subject" className="input input-bordered lg:w-1/2" />
                <textarea name='message' className="textarea textarea-secondary lg:w-1/2" placeholder="Your Message"></textarea>
            </div>
            <div className='card-actions justify-center mt-6'>
                <PrimaryButton>Submit Here</PrimaryButton>
            </div>
        </div>
    );
};

export default Contact;