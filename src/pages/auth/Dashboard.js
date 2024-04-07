import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/context';

export default function Dashboard() {

  const {auth,setauth} = useContext(AppContext);

  return (

    <div style={{minHeight:"70vh"}} className='text-black'>

      <div className="flex h-screen bg-gray-100">
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

      <main className="flex-1 p-4 overflow-hidden">
        {/* Main content */}
        <h2 className="text-3xl font-bold ml-4">Welcome to the Dashboard</h2>
        <div className="container mx-auto mt-8 p-4">

      <h2 className="text-3xl font-bold mb-4">My Profile</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">

        <div className="mb-4">
          <label className="text-lg font-medium">Name:</label>
          <p className="text-gray-700 font-normal">{auth.user.name}</p>
        </div>

        <div className="mb-4">
          <label className="text-lg font-medium">Email:</label>
          <p className="text-gray-700 font-normal">{auth.user.email}</p>
        </div>

        {/* <div className="mb-4">
          <label className="text-lg font-medium">Age:</label>
          <p className="text-gray-700">{auth.user.age}</p>
        </div> */}

        <div className="mb-4">
          <label className="text-lg font-medium">Phone No:</label>
          <p className="text-gray-700 font-normal">{auth.user.phoneNo}</p>
        </div>

        <div className="mb-4">
          <label className="text-lg font-medium">Address:</label>
          <p className="text-gray-700 font-normal">{auth.user.address}</p>
        </div>

      </div>
    </div>
        {/* Add more components and content here */}
      </main>
    </div>
    </div>
  )
}








