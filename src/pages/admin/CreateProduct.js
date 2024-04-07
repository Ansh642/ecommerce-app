import {React,useState,useEffect} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import axios from 'axios'

export default function CreateProduct() {

  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [quantity, setquantity] = useState();
  const [price, setprice] = useState();
  const [category, setcategory] = useState("");
  const [photo, setphoto] = useState("");

  const navigate = useNavigate();

  const [categories, setcategories] = useState([]);

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


  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("quantity", quantity);
      productData.append("price", price);
      productData.append("category", category);
      productData.append("photo", photo);
  
      const response = await axios.post("/api/v1/product/create-product",{
        name,
        description,
        category,
        price,
        photo,
        quantity,
      },{
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });
  
      if (response.data.success) {
        toast.success("Product created successfully");
        navigate("/");
        
      }
    } catch (err) {
      toast.error("Error creating a new product");
      console.log(err.message);
    }
  };



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

      <div className="max-w-2xl mx-auto mt-8 p-4 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Create a New Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-600">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={ (e)=>setname(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-sm font-semibold text-gray-600">
            Quantity
          </label>
          
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={ (e)=>setquantity(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-semibold text-gray-600">
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={price}
            onChange={ (e)=>setprice(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-semibold text-gray-600">
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            name="photo"
          
            onChange={ (e)=>setphoto(e.target.files[0])}
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
      <label htmlFor="category" className="block text-sm font-semibold text-gray-600">
        Category
      </label>
      <select
        id="category"
        name="category"
        onChange={(e)=>setcategory(e.target.value)}
        className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
        required
      >
        <option value="" disabled>
          Select a category
        </option>
        {categories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-semibold text-gray-600">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={ (e)=>setdescription(e.target.value)}
            rows="4"
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Create Product
        </button>
      </form>
    </div>


    </div>
  )
}



