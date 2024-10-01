import { useProductsContext } from "../../Context/Products"
import { useCountCart } from "../../Context/CountCart"
import { useCartContext } from "../../Context/Cart"

const useCart=()=>{
    const {Products} = useProductsContext()
    const {cart,setCart}=useCartContext()
    const {setCountCart}=useCountCart()
   
    const AddToCart =(id:number)=>{
        setCart([...cart,Products.find(((item:any)=>item.id===id))])
        setCountCart((pervValue:number)=>pervValue+1)
    }
    const RemoveFromCart =(id:number)=>{
        setCart([...cart.filter((item:any)=>item.id !==id)])
        setCountCart((pervValue:number)=>pervValue>=1?pervValue-1:pervValue)
        
    }
    return {AddToCart,RemoveFromCart}
}
export default useCart