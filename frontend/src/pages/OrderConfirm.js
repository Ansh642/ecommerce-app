
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { FaArrowRight } from "react-icons/fa";
import { CartContext } from '../context/Cart';

const OrderConfirmationPage = () => {
  
  const messageSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });

  

  // Animation for the checkmark
  const checkmarkSpring = useSpring({
    from: { opacity: 0, transform: 'scale(0.5)' },
    to: { opacity: 1, transform: 'scale(1)' },
    delay: 500,
  });

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-100">
      <animated.div style={messageSpring} className="bg-white p-7 rounded-md shadow-md mt-7">
        <h2 className="text-2xl font-bold mb-4">Order Confirmed!</h2>
        <p className="text-gray-600 mb-4">Thank you for your purchase.</p>

        <animated.div style={checkmarkSpring} className="text-green-500 text-4xl mb-4">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="checkmark"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </animated.div>

        <p className="text-gray-600">Your order will be processed shortly.</p>
      </animated.div>

    

    <div className='mt-10 flex flex-row gap-3 bg-blue-300 hover:bg-blue-400 hover:scale-105 transition-all duration-200  px-2 py-2 rounded-lg items-center'>
        <Link to='/' className=''> Continue Shopping </Link> 
        <FaArrowRight />
    </div>

    </div>
  );
};

export default OrderConfirmationPage;
