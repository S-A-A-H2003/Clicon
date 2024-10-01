import { useProductsContext } from "../../Context/Products"
import { useCountWishlist } from "../../Context/CountWishlist"
import { useWishlistContext } from "../../Context/Wishlist"

const useWishlist=()=>{
    const {Products}=useProductsContext() 
    const {setCountWishlist}=useCountWishlist()
    const {wishlist,setWishlist}=useWishlistContext()
    
    const AddToWishlist =(id:number)=>{
        setWishlist([...wishlist,Products.find((item:any)=>item.id===id)])
        setCountWishlist((pervValue:number)=>pervValue+1)
    }
    const RemoveFromWishlist =(id:number)=>{
        setWishlist([wishlist.filter((item:any)=>item.id !==id)])
        setCountWishlist((pervValue:number)=>pervValue>=1?pervValue-1:pervValue)
    }

    return{AddToWishlist,RemoveFromWishlist}
}
export default useWishlist;