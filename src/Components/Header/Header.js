import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='flex justify-center p-5 font-semibold bg-gray-300 '>
            <Link to="/home">HOME</Link>
            <Link to="/reviews">REVIEWS</Link>
            <Link to="/dashboard">DASHBOARD</Link>
            <Link to="/blogs">BLOGS</Link>
        </div>
    );
};

export default Header;