import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/AuthProvider';
const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { name: treatmentName, slots, price } = treatment;
    const date = format(selectedDate, 'PP');

    const { user } = useContext(AuthContext)

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const slot = form.slot.value;
        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            slot,
            email,
            phone,
            price
        }
        fetch('https://doctors-portal-server-kamrul-7.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null)
                    toast.success('Booking Confirmed');
                    refetch();
                }
                else {
                    toast.error(data.message)
                }
            })

    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input input-bordered input-secondary w-full" />
                        <select name='slot' className="select select-info w-full">

                            {
                                slots.map((slot, index) => <option
                                    value={slot}
                                    key={index}
                                >{slot}</option>)
                            }

                        </select>
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your name" className="input input-bordered input-secondary w-full" />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Your Email" className="input input-bordered input-secondary w-full" />
                        <input name='phone' type="text" placeholder="Phone number" className="input input-bordered input-secondary w-full" />
                        <input className='btn btn-accent w-full ' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;