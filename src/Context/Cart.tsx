import React, { createContext, useContext, useState } from "react";

interface Props {
    children: React.ReactNode;
}

export const CartContext =createContext<any>(null)

const CartProvider =({children}:Props)=>{
    const [cart,setCart]=useState<[]>([])
    return<CartContext.Provider value={{cart,setCart}}>
       {children}
    </CartContext.Provider>
}
export default CartProvider;

export const useCartContext=()=>{
    return useContext(CartContext)
}