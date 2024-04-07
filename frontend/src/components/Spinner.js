import React, { useState, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom'; 

const SpinnerComponent = () => {
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirect(true);
    }, 2000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (redirect) {
      navigate('/'); // Redirect to the home page
    }
  }, [redirect, navigate]);

  return (
    <div>
      <div className="flex justify-center items-center flex-col gap-6" style={{minHeight: "70vh"}}>
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid">
        
      </div>
      <p className='text-3xl font-medium'>Redirecting you in ... </p>
    </div>
      
    </div>
  );
};

export default SpinnerComponent;


