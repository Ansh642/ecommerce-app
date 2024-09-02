import {React,useState} from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'

export default function Signup() {

  const navigate= useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [question, setquestion] = useState("");
  const [address, setAddress] = useState("");

  async function sumbitHandler(e)
  {
    e.preventDefault();
    try{
    const response=await axios.post('https://ecommerce-app-za0t.onrender.com/api/v1/auth/register',{name,
      email,
      password,
      phoneNo,
      address,
      question
    });

    if(response.data.success)    
    {
      toast.success(response.data.message);
      navigate('/login');
    }
    else
    {   
      console.log(response.data.message);
      toast.error(response.data.message);
    }
  }

  catch(err){
    console.log(err);
    toast.error('Something went wrong');
  }
}
  

  return (
    <div style={{minHeight:"70vh"}}>

      <div className="min-h-[70vh] flex items-center justify-center">
      <div className="bg-white p-7 rounded shadow-md shadow-pure-greys-400 w-96 mt-16">
        <h2 className="text-2xl font-bold mb-6">Registration</h2>
        <form onSubmit={sumbitHandler}>

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
              name="name"
              value={name}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Your Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-600 font-semibold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phoneNo"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Your Phone Number"
              onChange={(e) => setPhoneNo(e.target.value)}
              value={phoneNo}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-600 font-semibold mb-2">
              Secret Question
            </label>
            <input
              type="text"
              name="question"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Your Secret Question"
              onChange={(e) => setquestion(e.target.value)}
              value={question}
            />
          </div>


          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-600 font-semibold mb-2">
              Address
            </label>
            <textarea
              name="address"
              rows="3"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Your Address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            ></textarea>
          </div>

          <div className='flex flex-row justify-between items-center'>
          <button
            type="submit"
            className="bg-richblack-700 mt-2 text-white py-2 px-4 rounded hover:bg-richblack-900 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Register
          </button>

          <Link to='/login' className='text-lg text-blue-300 hover:text-blue-500'>Already a User?</Link>
          </div>

        </form>
      </div>
    </div>
    </div>
  )
}
