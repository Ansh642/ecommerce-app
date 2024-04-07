import { useState, createContext, useEffect } from "react";

export const CartContext = createContext();
    
export function CartProvider({children}){

    const [cart, setcart] = useState([]);
    const [order, setorder] = useState([]);

    const fetchProduct =()=>{
        let existingProduct = localStorage.getItem('cart');
        setcart(JSON.parse(existingProduct));
    }

    const fetchOrders =()=>{
        let existingProduct = localStorage.getItem('order');
        setorder(JSON.parse(existingProduct));
    }

    useEffect( ()=>{
        fetchOrders();
        fetchProduct();
    },[]);

    const value={
        cart,setcart,order,setorder
    }
    
    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>

}



