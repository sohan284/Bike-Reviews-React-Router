import React from 'react';
import Line_Chart from '../Line_Chart/Line_Chart';
import { useState } from 'react';
import { useEffect } from 'react';
import Bar_Chart from './Bar_Chart/Bar_Chart';

const Dashboard = () => {
    const [chart,setChart] = useState([]);
    useEffect(() =>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=> setChart(data))
    },[])
    return (
            <div className='flex justify-center mt-10'>
            <Line_Chart></Line_Chart>
        <Bar_Chart></Bar_Chart> 
        </div>
    );
};

export default Dashboard;