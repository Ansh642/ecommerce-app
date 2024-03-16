import {React,useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import axios from 'axios' 

export default function Category() {

  const [categories, setcategories] = useState([]);
  const [name, setname] = useState("");

  const fetchCategories = async()=>{
    try{
      const {data} = await axios.get('/api/v1/category/categories');
      if(data.success)
      {
        setcategories(data.allCategories);
      }

    }
    catch(err){
      console.log(err);
      toast.error(err.message);
    }
  }

  useEffect(  ()=>{
    fetchCategories();
  },[]);

  async function handler(e){
    e.preventDefault();
    try{
      const {data} = await axios.post('/api/v1/category/create-category',{
        name,
      });

      if(data.success){
        toast.success("Category created successfully");
        fetchCategories();
        setname("");
      }
    }
    catch(err){
      console.log(err);
      toast.error(err.message);
    }
  }


  return (
    <div style={{minHeight:"70vh"}} className="flex h-screen bg-gray-100">
        <nav className="flex-shrink-0 w-64  p-4 bg-white border-r border-gray-200">
        
        <h1 className="text-2xl font-bold">E-Commerce Dashboard</h1>
        <ul className="mt-4">

          <li className="mb-2">
            <Link to="/dashboard/admin" className="text-blue-500 hover:text-blue-700">My Profile</Link>
          </li>

          <li className="mb-2">
            <Link to="/dashboard/admin/create-product" className="text-blue-500 hover:text-blue-700">Create Product</Link>
          </li>

          <li className="mb-2">
            <Link to="/dashboard/admin/users" className="text-blue-500 hover:text-blue-700">All Users</Link>
          </li>
          
        </ul>
      </nav>

      <div className='ml-10 flex flex-col'>
      <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4 underline">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map(category => (
          <div
            key={category.id}
            className="bg-richblack-50 py-1 rounded-md text-center cursor-pointer"
          >
            <h2 className="text-xl">{category.name}</h2>
            {/* Add more information about the category if needed */}
          </div>
        ))}
      </div>

      

    </div>

    <div>
      <div className="mb-3 mt-36 flex flex-row items-center justify-center gap-2">
            <label htmlFor="email" className="block text-gray-600  font-semibold text-xl mb-2">
                New Category : 
            </label>
            <input
              type="text"
              name="email"
              className="w-64 border border-gray-300 py-1 px-2 rounded"
              placeholder="Enter new category to be added"
              value={name}
              onChange={(e)=>setname(e.target.value)}
            />
          </div>
        <button className='bg-blue-200 text-white text-lg px-3 py-2 rounded-md' onClick={handler}>Sumbit</button>
    </div>

    </div>

    </div>
  )
}


