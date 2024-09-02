import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function AllUsers() {

  const [users, setusers] = useState([]);

  async function fetchUsers()
  {
    try{
      const {data} = await axios.get('https://ecommerce-app-za0t.onrender.com/api/v1/auth/all-users');

    
      if(data.success)
      {
        setusers(data.allUsers);
      }
    }
    catch(err)
    {
      console.log(err.message);
    }
  }

  useEffect( ()=>{
    fetchUsers();
  },[])


  
  return (
    <div style={{minHeight:"70vh"}} className="flex h-screen bg-gray-100">
        <nav className="flex-shrink-0 w-64  p-4 bg-white border-r border-gray-200">
        
        <h1 className="text-2xl font-bold">E-Commerce Dashboard</h1>
        <ul className="mt-4">

          <li className="mb-2">
            <Link to="/dashboard/admin" className="text-blue-500 hover:text-blue-700 text-lg">My Profile</Link>
          </li>

          <li className="mb-2">
            <Link to="/dashboard/admin/create-product" className="text-blue-500 hover:text-blue-700 text-lg">Create Product</Link>
          </li>

          <li className="mb-2">
            <Link to="/dashboard/admin/users" className="text-blue-500 hover:text-blue-700 text-lg">All Users</Link>
          </li>
          
        </ul>
      </nav>

      <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4 ml-8">Users List</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-8">
        {users.map((user) => (
          <div key={user.id} className="bg-white p-4 rounded shadow-md cursor-pointer">
            <h2 className="text-xl font-black mb-2 ">{user.name}</h2>

            <div className='flex gap-2'>
              <span className='font-semibold'>Email:</span>
              <p className="text-gray-600">{user.email}</p>
            </div>


            <div className='flex gap-2'>
              <span className='font-semibold'>Phone No:</span>
              <p className="text-gray-600">{user.phoneNo}</p>
            </div>

            <div className='flex gap-2'>
              <span className='font-semibold'>Address:</span>
              <p className="text-gray-600">{user.address}</p>
            </div>

          </div>
        ))}
      </div>
    </div>

    </div>
  )
}






