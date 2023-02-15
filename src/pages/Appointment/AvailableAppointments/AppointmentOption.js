import React from 'react';

const AppointmentOption = ({ option, setTreatment }) => {
    const { name, slots, price } = option;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl font-bold text-secondary text-center mt-6">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try another Day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                <p>Price $ {price}</p>
                <div className='card-actions justify-center'>
                    <label
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(option)}
                        htmlFor="booking-modal" className="btn btn-primary text-white">Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;