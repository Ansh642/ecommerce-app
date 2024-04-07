import React, { useContext, useState,useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaArrowRight } from "react-icons/fa6";
import image from '../images/hero_image.png';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/Cart';


export default function Home() {

  const {cart,setcart}= useContext(CartContext);

  const navigate = useNavigate();  
  const [products, setproducts] = useState([]);
  
  const getAllProducts = async () => {
    try 
    {
      const { data } = await axios.get("/api/v1/product/get-products");
      setproducts(data.allProducts);
      
    }
     catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };


  useEffect(() => {
    getAllProducts();
  }, []);
  
  const shortenDescription = (description, maxWords) => {
    const words = description.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return description;
  };

  
  return (
    
    <div style={{minHeight:"70vh"}}>
    
    <div className='bg-gradient-to-b from-pink-25 via-pink-5 to-white shadow-md shadow-pink-5 max-h-[500px] overflow-hidden relative'>

      <div className='relative top-32 left-52'>
       <p className='text-2xl font-semibold font-inter'>New Arrivals Only</p>
       <p className='font-inter font-bold text-5xl w-[23%] mt-3 leading-[50px]'>new ✋ collections for everyone</p>
       <button className=' rounded-xl mt-4 bg-pink-100 hover:bg-pink-300 px-3 py-2 flex flex-row items-center gap-2 justify-center cursor-pointer'>Latest Collection <FaArrowRight /></button>
      </div>

      <div className='relative left-[1000px] bottom-56'>
      <img src={image} alt="" className='h-[460px]'/>
      </div>

    </div>

    <div className="container mx-auto py-8">
      <h2 className="text-4xl font-semibold mb-4 flex items-center justify-center">Featured Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-md overflow-hidden shadow-md h-96 hover:scale-105 hover:transition-all duration-150">
            <img src={product.photo} alt={product.name} className="w-full cursor-pointer h-48 object-contain" onClick={()=>navigate(`/product-overview/${product.name}`)}/>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-700 h-14">{shortenDescription(product.description, 8)}</p>
              <div className="mt-7 flex justify-between items-center">
                <span className="text-lg font-semibold">${product.price}</span>
                
                <button onClick={()=>{
                 setcart([...cart, product]);
                 localStorage.setItem('cart', JSON.stringify([...cart,product]));
                 toast.success("Product Added Successfully") }}
                 className="bg-blue-500 place-content-end text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
         
    </div>
  )
}


