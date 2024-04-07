import axios from 'axios';
import {React,useState,useEffect,useContext} from 'react'
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/Cart';
import { toast } from 'react-toastify';

export default function ProductOverview() {

  const [size, setsize] = useState("small")
  const [product, setproduct] = useState("");
  const {cart,setcart}= useContext(CartContext);

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
          className="w-[75%] h-[50%] object-contain rounded-lg shadow-md"
        />
      </div>

      {/* Product Details */}
      <div className="w-full md:w-1/2 md:pl-8 ">
        {/* Product Name */}
        <h2 className="text-4xl font-bold mb-4">{product.name}</h2>

        
        {/* Price */}
        <div className="text-2xl font-semibold mb-4"> <span className='text-2xl font-semibold'> Price : </span> ${product.price}</div>

        <h2 className='mt-3 text-2xl font-semibold'>Sizes : </h2>

        {/* Sizes */}
        <div className="flex space-x-4 mt-2 mr-28">
          <p className='text-lg bg-blue-400  rounded-lg px-2 py-1 cursor-pointer hover:bg-blue-500'>Small</p>
          <p className='text-lg bg-blue-400  rounded-lg px-2 py-1 cursor-pointer hover:bg-blue-500'>Medium</p>
          <p className='text-lg bg-blue-400 rounded-lg px-2 py-1 cursor-pointer hover:bg-blue-500'>Large</p>
        </div>

        {/* Description */}
        <p className="text-gray-700 mt-4 text-lg"> <span className='text-xl font-semibold'> Description : </span> {product.description}</p>

        <button onClick={()=>{
                 setcart([...cart, product]);
                 localStorage.setItem('cart', JSON.stringify([...cart,product]));
                 toast.success("Product Added Successfully") }}
          className="bg-blue-500 text-white py-2 px-4 mt-5 rounded-md hover:bg-blue-600 transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
  </div>
  )
}


