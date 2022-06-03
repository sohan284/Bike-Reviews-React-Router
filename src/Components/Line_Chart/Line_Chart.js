import { data } from 'autoprefixer';
import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from './../../Hooks/useChart';

const Line_Chart = () => {
    const [value,setValue] = useChart([]);
    
    return (
        <div>
            <h1 className='text-center font-bold text-3xl text-blue-900'>Month Wise Sell</h1>
            <LineChart className='pt-3 bg-blue-100 m-5'
        width={500}
        height={300}
        data={value}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sell" stroke="darkblue" activeDot={{ r: 8 }} />
      </LineChart>
        </div>
    );
};

export default Line_Chart;