import {React} from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import { useState } from 'react';

export default function ForgotPass() {

    const [email, setEmail] = useState("");
    const [newpassword, setnewpassword] = useState("");
    const [question, setquestion] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const {response} = await axios.post("https://ecommerce-app-za0t.onrender.com/api/v1/auth/forgot-password", {
          email,
          newpassword,
          question
        });

        toast.success("Password has been updated");
      } 
      catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    };
    
  return (
    <div style={{minHeight:"70vh"}}>

      <div className="min-h-[70vh] flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md shadow-pure-greys-400 w-96">
        <h2 className="text-2xl font-bold mb-6">Verify</h2>
        <form onSubmit={handleSubmit}>

        <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-semibold mb-2">
              Secret Question
            </label>
            <input
              type="text"
              name="question"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Your Secret Question"
              value={question}
              onChange={(e)=>setquestion(e.target.value)}
              />
              
        </div>

        <div className="mb-4">
        <label htmlFor="email" className="block text-gray-600 font-semibold mb-2">
            Email
        </label>
        <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Your Email"
            value={email}
              onChange={(e)=>setEmail(e.target.value)}
        />
        </div>


        <div className="mb-4">
        <label htmlFor="password" className="block text-gray-600 font-semibold mb-2">
            New Password
        </label>
        <input
            type="password"
            id="password"
            name="password"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter Your New Password"
            value={newpassword}
            onChange={(e)=>setnewpassword(e.target.value)}
            
        />
        </div>


        <button type="submit" className="bg-richblack-700 mt-2 text-white py-2 px-4 rounded hover:bg-richblack-900 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
        Update Password
        </button>

        </form>
      </div>
    </div>

    </div>
  )
}


