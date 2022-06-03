import React from 'react';

const Reviews = (props) => {
    const {name,img,review,star} = props.review;
    return (
        <div className='border-2 m-2 p-2 rounded-md bg-gray-200'>
           <div className='flex mx-5'>
           <img className='w-10 h-10 border-2' src={img} alt="" />
            <h1 className='mx-3 font-semibold'>{name}</h1>
           </div>
           <p className='m-5 font-sans text-orange-400'>{star}</p>
           <p>{review}</p>
        </div>
    );
};

export default Reviews;