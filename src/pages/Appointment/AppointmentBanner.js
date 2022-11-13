import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <div>
            <header className="hero bg-[url('/src/assets/images/bg.png')] my-6">
                <div className="hero my-6">
                    <div className="hero-content flex-col gap-12 lg:gap-40 lg:flex-row-reverse">
                        <img src={chair} alt='dentist chair' className="max-w-sm rounded-lg shadow-2xl" />
                        <div className=''>
                            <DayPicker mode="single"
                                selected={selectedDate}
                                onSelect={setSelectedDate} />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default AppointmentBanner;