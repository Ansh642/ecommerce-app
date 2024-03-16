import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/context'
import { toast } from 'react-toastify';
import { FiShoppingBag } from "react-icons/fi";
import { SearchContext } from '../context/SearchContext';
import axios from 'axios';
import { CartContext } from '../context/Cart';

export default function Navbar() {

  const {cart,setcart}= useContext(CartContext);
  const {auth,setauth} = useContext(AppContext);
  const {search,setsearch} = useContext(SearchContext);

  const navigate = useNavigate();
 

  function logoutHandler(e)
  {
    e.preventDefault();

    localStorage.removeItem("auth");
    setauth({
      ...auth,
      user:null,
      token:"",
    });
    toast.success("Logged out successfully");
    navigate("/");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.get(`/api/v1/product/search/${search.keywords}`);
      setsearch({ ...search, result: data.similarProducts });
      navigate("/search");
    } 
    catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };
 
  return (

  <div className='flex flex-row justify-between bg-white h-[55px] items-center uppercase shadow-md shadow-pure-greys-300 border-b-[0.5px] border-pure-greys-200'>

      <div className='ml-12 text-lg text-richblack-800'>
          <Link to='/'>
          🛒 E-commerce
          </Link>
      </div>

      <div className='flex flex-row  gap-5 text-xl opacity-80 text-richblack-800'>
      <div className='group'>
        <Link to='/' className='group-hover:border-b-2 border-black'>
          Shop
        </Link>
        </div>

        <div className='group'>
        <Link to='/mens' className='group-hover:border-b-2 border-black'>
          Men
        </Link>
        </div>

        <div className='group'>
        <Link to='/women' className='group-hover:border-b-2 border-black'>
          Women
        </Link>
        </div>

        <div className='group'>
        <Link to='/kids' className='group-hover:border-b-2 border-black'>
          Kids
        </Link>
        </div>

      </div>

      <div className="flex items-center ">
      <input
        type="text"
        placeholder="Search..."
        onChange={ (e)=>{
          setsearch({...search,keywords:e.target.value});
        }}
        className="border rounded-md border-gray-300 p-2 mr-2"
      />
      <button
        className="bg-pink-200 text-white p-2 rounded-md hover:bg-pink-300"
        onClick={handleSubmit}
      >
        Search
      </button>
    </div>


      <div className=' flex flex-row mr-9 gap-5 text-xl opacity-80 text-richblack-800'>

        <div>
          {
          !auth.user ? (<div className='flex gap-5'>
          <div className='group'>
        <Link to='/register' className='group-hover:border-b-2 border-black'>
          Register
        </Link>
        </div>
        
        <div className='group'>
        <Link to='/login' className='group-hover:border-b-2 border-black'>
          Login
        </Link>
        </div>
        </div>) : 
        (
        <div className='flex gap-5'>
        
        <div className='group'>
        <Link to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`} className='group-hover:border-b-2 border-black'>
        Dashboard
        </Link>
        </div>

        <div className='group'>
        <Link to='/' className='group-hover:border-b-2 border-black' onClick={logoutHandler}>
          Logout
        </Link>
        </div>

        </div>
        )
        }
        </div>
          
        <div>
        {
          auth.user?.role === 0 ? (<div className="relative cursor-pointer">
          {/* Cart Icon */}
          <FiShoppingBag onClick={()=>navigate('/cart')} className='mt-1'/>
          
          {/* Counter */}
          <span className="bg-pink-700  rounded-full w-5 h-5 flex items-center justify-center absolute -top-2 -right-3 text-white">
            {cart?.length}
          </span>
          
        </div>) : (<p></p>) 
        }
        </div>
          
      </div>


  </div>
  )
}


