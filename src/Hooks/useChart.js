import { useState, useEffect } from 'react';
const useChart = () => {
    const [value,setValue] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=> setValue(data));
    },[])
    return [value,setValue];
}

export default useChart;