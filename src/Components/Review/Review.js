import React from 'react';
import Reviews from '../Reviews/Reviews';
import useReview from './../../Hooks/useReview';

const Review = () => {
    const [reviews,setReviews] = useReview([]);
    return (
        <div>
            <h1 className='text-4xl text-center my-5 text-blue-800 font-bold '>Customers All Reviews</h1>
         <div className='grid grid-cols-3 gap-2'>
                {
                    reviews.map(review=> <Reviews review={review} key={review.id}></Reviews>)
                }

            </div>
        </div>
    );
};

export default Review;