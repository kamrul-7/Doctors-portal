import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns/esm';
import React, { useState } from 'react';
import BookingModal from '../Appointment/BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';
const AvailableAppointments = ({ selectedDate }) => {
    // const [appointOptions, setAppointOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const { data: appointOptions = [] } = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: () => fetch('http://localhost:5000/appointmentOptions')
            .then(res => res.json())
    })

    // useState(() => {
    //     fetch('http://localhost:5000/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppointOptions(data))
    // }, [])
    return (
        <div className='mt-16'>
            <p className='text-center text-primary text-xl font-bold my-6'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid grid-cols-col md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    appointOptions.map(option => <AppointmentOption
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointments;