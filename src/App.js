import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Reviews from './Components/Reviews/Reviews';
import Review from './Components/Review/Review';
import Dashboard from './Components/Dashboard/Dashboard';
import Blogs from './Components/Blogs/Blogs';
function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/reviews' element={<Review></Review>}></Route>
       <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='*' element={<div className='App' ><img src='https://media.istockphoto.com/vectors/funny-404-design-template-with-a-cyclist-falling-from-a-bicycle-of-vector-id1287429074?b=1&k=20&m=1287429074&s=170667a&w=0&h=oY6dgf2Ivp_UbBC-S0s4AolmcDfjcTCQiCRsJPRVivY=' alt=''></img></div>}></Route>
     </Routes>
    </div>
  );
}

export default App;
