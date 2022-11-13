import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import Cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import CardDetail from './CardDetail';
const CardDetails = () => {
    const details = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist. The process involves painting a varnish containing high levels of fluoride onto the surface of the tooth twice a year to prevent decay. It works by strengthening tooth enamel, making it more resistant to decay.',
            img: fluoride

        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Before filling cavities, your dentist will numb your teeth, gums and surrounding skin to avoid and lessen discomfort during the procedure. Next, he or she will',
            img: Cavity

        },
        {
            id: 3,
            name: 'Teeth Whitening Us',
            description: 'Teeth whitening involves bleaching your teeth to make them lighter. It cant make your teeth brilliant white, but it can lighten the existing color by several',
            img: whitening

        },
    ]
    return (
        <div className='mt-32'>
            <div className=' text-center my-8'>
                <h2 className='text-primary uppercase text-xl font-bold'>Our Services</h2>
                <h3 className='text-4xl'>Services We Provide</h3>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    details.map(detail => <CardDetail
                        key={detail.id}
                        detail={detail}

                    ></CardDetail>)
                }
            </div>
        </div>
    );
};

export default CardDetails;