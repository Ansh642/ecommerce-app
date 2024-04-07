// PaymentOptions.js
import React from 'react';

const Payment = ({ selectedOption, onOptionChange }) => {
  const paymentOptions = ['Credit Card', 'UPI', 'Cash On Delivery'];

  return (
    <div className="flex flex-col">
      {paymentOptions.map((option) => (
        <label
          key={option}
          className={`flex items-center mb-4 p-4 rounded-md cursor-pointer border ${
            selectedOption === option ? 'bg-blue-100 border-blue-500' : ''
          }`}
        >
          <input
            type="radio"
            value={option}
            checked={selectedOption === option}
            onChange={() => onOptionChange(option)}
            className="mr-2 cursor-pointer"
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default Payment;
