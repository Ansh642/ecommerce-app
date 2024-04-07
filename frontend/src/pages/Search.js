import React, { useContext } from 'react'
// import { toast } from 'react-toastify';
// import axios from 'axios';
import { SearchContext } from '../context/SearchContext';

export default function Search() {
  
    const {search} = useContext(SearchContext);

    // const handleSubmit = async (e) => {
    // e.preventDefault();

    // try {
    //     const { data } = await axios.get(`/api/v1/product/search/${search.keywords}`);
    //     setsearch({ ...search, result: data.similarProducts });
        
    // } 
    // catch (error) {
    //     toast.error(error.message);
    //     console.log(error);
    // }
    // };

    const shortenDescription = (description, maxWords) => {
    const words = description.split(' ');
    if (words.length > maxWords) {
        return words.slice(0, maxWords).join(' ') + '...';
    }
    return description;
    };
    

  return (
    <div style={{minHeight:"70vh"}}>

        <div className="container mx-auto py-8">
      <h2 className="text-4xl font-semibold mb-4 flex items-center justify-center">{search.result.length} Search Results</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        {search.result.map((product) => (
          <div key={product.id} className="bg-white rounded-md overflow-hidden shadow-md h-96 hover:scale-105 hover:transition-all duration-150">
            <img src={product.photo} alt={product.name} className="w-full cursor-pointer h-48 object-contain"/>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-700 h-14">{shortenDescription(product.description, 8)}</p>
              <div className="mt-7 flex justify-between items-center">
                <span className="text-lg font-semibold">${product.price}</span>
                
                <button
                  className="bg-blue-500 place-content-end text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
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
