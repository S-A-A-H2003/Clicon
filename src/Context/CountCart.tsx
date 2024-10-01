import { createContext, useContext, useState } from "react";
export const CountCartContext =createContext<any>(null)

interface Props {
    children: React.ReactNode;
}

const CountCartProvider =({ children }: Props)=>{
    const [countCart,setCountCart]=useState(0)
    return<CountCartContext.Provider value={{countCart,setCountCart}}>
       {children}
    </CountCartContext.Provider>
}
export default CountCartProvider;

export const useCountCart=()=>{
    return useContext(CountCartContext)
}
