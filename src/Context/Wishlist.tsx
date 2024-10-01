import { createContext, useContext, useState } from "react";
const WishlistContext = createContext<any>(null)

interface Props {
    children: React.ReactNode;
}

const WishlistProvider =({ children }: Props)=>{
    const [wishlist,setWishlist]=useState([])
    return <WishlistContext.Provider  value={{wishlist,setWishlist}}>
        {children}
    </WishlistContext.Provider>
}
export default WishlistProvider;

export const useWishlistContext=()=>{
    return useContext(WishlistContext)
}
