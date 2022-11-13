import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../contact/Contact';
import CardDetails from '../details/CardDetails';
import InfoCards from '../infoCards/InfoCards';
import MakeAppointment from '../makeAppointment/MakeAppointment';
import Terms from '../terms/Terms';
import Testimonial from '../testimonial/Testimonial';
const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <CardDetails></CardDetails>
            <Terms></Terms>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;