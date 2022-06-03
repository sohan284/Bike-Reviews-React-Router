import React, { useEffect, useState } from 'react';
import Reviews from '../Reviews/Reviews';
import './Home.css'
import useReview from './../../Hooks/useReview';
import { useNavigate } from 'react-router-dom';
import Dashboard from './../Dashboard/Dashboard';

const Home = () => {
    const [reviews,setReviews] = useReview([]);
    const navigate = useNavigate();

  
    return (
       <div>
            <div className='flex justify-between m m-5 mt-10'>
            <div className='  mt-10 mx-5 details'>
                <h1 className='font-serif text-center text-5xl font-bold'>My Next Bike</h1>
                <h1 className='font-bold text-center text-5xl text-blue-800 font-serif'>R15M</h1>
                <p className='mt-4'>My next bike will Yamaha R15M.That most popular motorcycles sold in Bangladesh.It looks is just awesome. A very potent 150cc engine, a phenomenal delta box frame and a very sporty styling.This is best bike for long ride.</p>
                <button className=' text-white font-semibold bg-blue-800 p-3 m-5 rounded-xl'>Live demo</button>
            </div>
            <div className="div">
                <img src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/103795/yzf-r15-front-fairing.jpeg?isig=0&q=80" alt="" />
            </div>
        </div>
        <div>
            <h1 className='font-bold text-4xl mt-20 text-center mb-10'>Customer Reviews</h1>
            <div className='grid grid-cols-3 gap-2'>
                {
                    reviews.slice(0,3).map(review=> <Reviews review={review} key={review.id}></Reviews>)
                }

            </div>
            <div className='btn'>
            <button onClick={()=>navigate('/reviews')} className='bg-blue-800 px-12 rounded-md text-white py-2 my-4 font-semibold'>See All Reviews</button>
            </div>
        </div>
       </div>
    );
};

export default Home;