import React from 'react';

const Review = ({ view }) => {

    const { name, img, location, review } = view;
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <p>{review}</p>
                <div className="flex items-center mt-6">
                    <div className="avatar m-6">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h2 className='text-lg'>{name}</h2>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;