import {React,useContext,useState} from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../../App.css'
import { AppContext } from '../../context/context';

export default function Login() {

  // use data from context Api
  const {auth,setauth}= useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();
  
  async function SubmitHandler(e)
  {
    e.preventDefault();
    try{
      const response = await axios.post("/api/v1/auth/login",{
        email,
        password
      });

      if(response.data.success)
      {
        toast.success(`Welcome back`)
        navigate("/");

        setauth({
          ...auth,
          user: response.data.user,
          token: response.data.token,
        });
        // local storage only supports data in string format
        localStorage.setItem("auth", JSON.stringify(response.data));
      }

      else{
        toast.error(response.data.message);
      }
    }
    catch(err)
    {
      console.log(err.message);
      toast.error(err.message);
    }
  }

  return (
    <div style={{minHeight:"70vh"}}>

      <div className="min-h-[70vh] flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md shadow-pure-greys-400 w-96">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={SubmitHandler}>
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
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className='flex flex-row justify-between items-center'>

          <button
            type="submit"
            className="bg-richblack-700 mt-2 text-white py-2 px-4 rounded hover:bg-richblack-900 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Login
          </button>

          <Link to='/forgot-password' className='text-base text-blue-300 cursor-pointer hover:text-blue-500'>
              Forgot Password ? 
            </Link>
          </div>

        </form>
      </div>
    </div>

    </div>
  )
}

