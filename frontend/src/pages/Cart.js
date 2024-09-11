import React, { useContext, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/Cart';

const ShoppingCart = () => {
  const navigate = useNavigate();
  const { cart, setcart } = useContext(CartContext);
  const { setorder } = useContext(CartContext);
  const [quantity] = useState(1);
  const [loading, setLoading] = useState(false); // State for the loading spinner

  const removeFromCart = (itemId) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === itemId);
      myCart.splice(index, 1);
      setcart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  const Handler = () => {
    let total = 0;
    cart?.forEach(item => {
      total = total + quantity * item.price;
    });
    return total;
  };

  return (
    <div style={{ minHeight: "70vh" }}>
      <div className={`container flex mx-auto mt-8 ${loading ? 'blurred' : ''}`}>

        <div className='flex flex-col gap-3'>
          <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
          {cart?.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            <div>
              {cart?.map((item) => (
                <div key={item._id} className="flex items-center border-b py-4">
                  <img src={item.photo} alt={item.name} className="w-24 h-24 object-contain mr-4" />
                  <div className="flex-1 flex-col ">
                    <h2 className="text-lg font-bold underline">{item.name}</h2>
                    <p className="text-gray-600 mb-1 font-semibold"> Description: {item.description}</p>
                    <p className="text-gray-800 font-semibold mb-1">Price: {item.price}</p>
                    <p className="text-gray-800 flex gap-2 font-semibold mb-2 items-center">Quantity: 1</p>

                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="bg-blue-200 px-3 py-1 rounded-xl hover:bg-blue-300 transition-all duration-200"
                    >
                      Remove from Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div>
            {cart?.length > 0 ? (
              <div className="flex flex-col items-center justify-center">
                {loading ? (
                  <div className="loading-overlay">
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setLoading(true); // Show spinner
                      setorder((prevOrder) =>
                        Array.isArray(prevOrder) ? [...prevOrder, ...cart] : [...cart]
                      );
                      const existingOrder = JSON.parse(localStorage.getItem('order')) || [];
                      localStorage.setItem('order', JSON.stringify([...existingOrder, ...cart]));

                      setTimeout(() => {
                        navigate('/order-confirm'); // Navigate after 3 seconds
                      }, 3000);
                    }}
                    className="flex flex-row gap-2 items-center mt-7 hover:scale-105 transition-all duration-150 bg-blue-300 cursor-pointer rounded-xl px-8 py-2"
                  >
                    Proceed to Checkout <FaArrowRight />
                  </button>
                )}

                <p>or</p>

                <Link to="/" className="text-blue-200 text-base cursor-pointer hover:text-blue-400">
                  Continue Shopping?
                </Link>
              </div>
            ) : (
              <p></p>
            )}
          </div>

        </div>

        <div className='ml-80'>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h2 className="font-semibold mb-4 text-3xl underline">Cart Summary</h2>

            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600 font-semibold text-xl">Total Items:</span>
              <span className="text-black font-semibold">{cart?.length}</span>
            </div>

            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600 font-semibold text-xl">Total Price:</span>
              <span className="text-green-600 font-semibold">${Handler()}</span>
            </div>

          </div>
        </div>

      </div>

      {/* Loading Overlay */}
      {loading && (
        <div className="loading-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-white h-12 w-12 mb-4"></div>
          <p className="text-white text-lg">Processing...</p>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;

// CSS for the loading spinner and blurred background
const css = `
.loader {
  border-top-color: #3498db;
  animation: spinner 0.6s linear infinite;
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Blurred background */
.blurred {
  filter: blur(5px);
  pointer-events: none;
}

/* Loading overlay */
.loading-overlay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}
`;

// Inject the CSS styles
const styleTag = document.createElement('style');
styleTag.innerHTML = css;
document.head.appendChild(styleTag);
