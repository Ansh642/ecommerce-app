import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/Cart'
 
export default function Order() {

  const {order}= useContext(CartContext);

  return (
    <div className='flex h-fit bg-gray-100'>

      <nav className="flex-shrink-0 w-64 p-4 bg-white border-r border-gray-200">
        {/* Sidebar content */}
        <h1 className="text-2xl font-bold">E-Commerce Dashboard</h1>
        <ul className="mt-4">

        <li className="mb-2">

          <Link to="/dashboard/user" className="text-blue-500 hover:text-blue-700 text-lg">My Profile</Link>
        </li>

        <li className="mb-2">
          <Link to="/dashboard/user/orders" className="text-blue-500 hover:text-blue-700 text-lg">My Orders</Link>
        </li>
        
        </ul>
      </nav>


    <div className='flex flex-col gap-3 ml-11 mt-4'>
      <h1 className="text-3xl font-bold mb-4">Your Orders</h1>

      {order?.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          {order[0]?.map((item) => (
            <div key={item._id} className="flex items-center border-b py-4">
              <img src={item.photo} alt={item.name} className="w-24 h-24 object-contain mr-4" />
              <div className="flex-1 flex-col ">
                <h2 className="text-lg font-bold underline">{item.name}</h2>
                <p className="text-gray-600 mb-1 font-semibold"> Description: {item.description}</p>
                <p className="text-gray-800 font-semibold mb-1">Price: {item.price}</p>
              </div>

            </div>
          ))}

        </div>
      )}

      <p className='text-blue-200  text-3xl mt-4 w-[75%]'>
        Item will be delivered in next 5-6 days.
      </p>

    </div>

    </div>
  )
}


