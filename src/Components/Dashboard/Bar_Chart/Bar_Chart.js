import React from 'react';
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { useState } from 'react';
import { useEffect } from 'react';
import useChart from './../../../Hooks/useChart';

const Bar_Chart = () => {
    const [value,setValue] = useChart([]);
    return (
       <div>
           <h1 className='text-center font-bold text-3xl text-blue-900'>Investment VS Revenue</h1>
            <BarChart className='pt-2 bg-blue-100 m-5' width={500} height={300} data={value}>
            <XAxis dataKey="month" />
            <YAxis dataKey="investment"/>
            <Tooltip></Tooltip>
            <Legend></Legend>
        <Bar dataKey="investment" fill="darkblue" />
          <Bar dataKey="revenue" fill="darkgreen" />
      </BarChart>
       </div>
    );
};

export default Bar_Chart;