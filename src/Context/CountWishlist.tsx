import { createContext, useContext, useState } from "react";

export const CountWishlistContext =createContext<any>(null)

interface Props {
    children: React.ReactNode;
}

const CountWishlistProvider =({ children }: Props)=>{
    const [countWishlist,setCountWishlist]=useState<number>(0)
    return<CountWishlistContext.Provider  value={{countWishlist,setCountWishlist}}>
       {children}
    </CountWishlistContext.Provider>
}
export default CountWishlistProvider;

export const useCountWishlist=()=>{
    return useContext(CountWishlistContext)
}