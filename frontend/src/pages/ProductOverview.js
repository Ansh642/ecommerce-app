import axios from 'axios';
import {React,useState,useEffect,useContext} from 'react'
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/Cart';
import { toast } from 'react-toastify';
import { AppContext } from '../context/context';

export default function ProductOverview() {

  const [product, setproduct] = useState("");
  const {cart,setcart}= useContext(CartContext);
  const {auth,setauth}  = useContext(AppContext);

  const params = useParams();

  const fetchedProduct = async()=>{
    try{

      const {data} = await axios.get(`/api/v1/product/single-product/${params.name}`);
      setproduct(data.product);
    }
    catch(err){
      console.log(err.message);
    }
  }

  useEffect( ()=>{
    fetchedProduct();
  },[]);

  
  return (
  <div style={{minHeight:"70vh"}}>
    <div className="container mx-auto my-8 p-8">
    <div className="flex flex-row items-center">
      {/* Product Image */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src={product.photo}
          alt={product.name}
          className="w-[75%] h-96 rounded-lg shadow-md"
        />
      </div>

      {/* Product Details */}
      <div className="w-full md:w-1/2 md:pl-8 ">
        {/* Product Name */}
        <h2 className="text-4xl font-bold mb-4">{product.name}</h2>

        <p className="text-gray-700 mt-1 text-lg"> <span className='text-xl font-semibold'> Description : </span> {product.description}</p>
        {/* Price */}
        <div className="text-2xl mt-3 font-semibold mb-4"> <span className='text-2xl font-semibold'> Price : </span> ${product.price}</div>

        {/* Description */}
       

        <button
  onClick={() => {
        const auth = JSON.parse(localStorage.getItem('auth')); // Retrieve auth data from localStorage (or wherever you're storing auth data)
        
        if (auth) {
          // If user is logged in
          setcart([...cart, product]);
          localStorage.setItem('cart', JSON.stringify([...cart, product]));
          toast.success("Product Added Successfully");
        } else {
          // If user is not logged in
          toast.error("Please log in to add products to the cart");
          // Optionally, redirect to login page
          // window.location.href = "/login"; 
        }
      }}
      className="bg-blue-500 text-white py-2 px-4 mt-5 rounded-md hover:bg-blue-600 transition duration-300"
    >
      Add to Cart
    </button>

      </div>
    </div>
  </div>
  </div>
  )
}


