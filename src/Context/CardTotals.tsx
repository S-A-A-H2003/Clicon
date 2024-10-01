import { createContext, useContext, useState } from "react";
export const CardTotalsContext =createContext<any>(null)

interface Props {
    children: React.ReactNode;
}

const CardTotalsProvider =({ children }: Props)=>{
    const [subTotal,setSubTotal]=useState(0)
    const [total,setTotal]=useState(0)
    const [discount,setDiscount]=useState(0)
    const [shipping,setShipping]=useState(0)
    const [tax,setTax]=useState(0)
    const [couponCode,setCouponCode]=useState(0)
    return<CardTotalsContext.Provider value={{subTotal,setSubTotal,total,setTotal,discount,setDiscount,shipping,setShipping,tax,setTax,couponCode,setCouponCode}}>
            {children}
       </CardTotalsContext.Provider>
}
export default CardTotalsProvider;

export const useCardTotals=()=>{
    return useContext(CardTotalsContext)
}
