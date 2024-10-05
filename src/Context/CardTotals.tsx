import { createContext, useContext, useState } from "react";
export const CardTotalsContext =createContext<any>(null)

interface Props {
    children: React.ReactNode;
}

const CardTotalsProvider =({ children }: Props)=>{
    const [subTotal,setSubTotal]=useState<number>(0)
    const [total,setTotal]=useState<number>(0)
    const [discount,setDiscount]=useState<number>(0)
    const [shipping,setShipping]=useState<number>(0)
    const [tax,setTax]=useState<number>(0)
    const [couponCode,setCouponCode]=useState<number>(0)
    return<CardTotalsContext.Provider value={{subTotal,setSubTotal,total,setTotal,discount,setDiscount,shipping,setShipping,tax,setTax,couponCode,setCouponCode}}>
            {children}
       </CardTotalsContext.Provider>
}
export default CardTotalsProvider;

export const useCardTotals=()=>{
    return useContext(CardTotalsContext)
}
