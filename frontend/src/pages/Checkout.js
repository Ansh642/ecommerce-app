// CheckoutPage.js
import React, { useState } from 'react';
import Payment from'./Payment';
import AddressForm from './Address';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";

const Checkout = () => {
  const [selectedPaymentOption, setSelectedPaymentOption] = useState(null);
  const [address, setAddress] = useState({
    name: '',
    street: '',
    city: '',
    zip: '',
  });

  //const {order,setorder} = useContext(CartContext);

  const navigate = useNavigate();

  const handlePaymentOptionChange = (option) => {
    setSelectedPaymentOption(option);
  };

  const handleAddressChange = (field, value) => {
    setAddress({
      ...address,
      [field]: value,
    });
  };

  const handleCheckout = () => {
    navigate('/order-confirm');

  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full md:w-2/3 lg:w-1/2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Payment Options</h2>
            <Payment
              selectedOption={selectedPaymentOption}
              onOptionChange={handlePaymentOptionChange}
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Address</h2>
            <AddressForm address={address} onAddressChange={handleAddressChange} />
          </div>
        </div>

        <div className="mt-8 flex flex-row bg-blue-400 cursor-pointer text-white hover:scale-105 transition-all duration-200 px-4 py-2 rounded-md w-full items-center justify-center gap-2 hover:bg-blue-500">
          <button
            
            onClick={handleCheckout}
          >
            Place Order
          </button>

          <FaArrowRight/>
        </div>

      </div>

      <div className="mt-8 flex flex-row bg-blue-300 cursor-pointer text-white hover:scale-105 transition-all duration-200 px-4 py-2 rounded-md w-[15%] items-center justify-center gap-2 hover:bg-blue-400">
       <FaArrowLeftLong />
       
       <button onClick={()=>navigate('/cart')}>
            Go Back
          </button>

        </div>

    </div>
    
  );
};

export default Checkout;
