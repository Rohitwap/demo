import React from 'react'
import { useNavigate } from "react-router-dom";


const NotFound = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/');
  };


  return (
    <div><h1 className='text-3xl'>NotFound</h1>
    <p className='text-lg'>The page you are looking for does not exist.</p>
    <button onClick={() => navigate('/')} className='bg-indigo-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300'>
    Go Back Home
  </button>
    </div>
  )
}

export default NotFound