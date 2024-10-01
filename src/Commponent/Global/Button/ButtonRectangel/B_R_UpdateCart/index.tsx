import './style.scss'

//Component
import ButtonGlobal from '../../ButtonGlobal'

//Style
import { H5 } from '../../../../../Style/Font/Typograpy'

//Conatant
import { Color } from '../../../../../Constant/Colors'
import { useCartContext } from '../../../../../Context/Cart'
import { useCardTotals } from '../../../../../Context/CardTotals'
import { useCountCart } from '../../../../../Context/CountCart'


export default function BRUpdateCart() {
  const {setCart}=useCartContext()
  const {setCountCart}=useCountCart()
  const {setSubTotal,setTotal,setDiscount,setShipping,setTax}=useCardTotals()

 const UpdateCart =()=>{
    setCart([])
    setCountCart(0)
    setTotal(0)
    setSubTotal(0)
    setDiscount(0)
    setShipping(0)
    setTax(0)
 }
  return (
    <>
      <ButtonGlobal
        className={'BRUpdateCart'}
        width={147}
        height={48}
        backgroundcolor={Color.Gary00}
        border={`2px solid ${Color.Secondary500}`}
        onClick={()=>UpdateCart()}
      >
        <H5 color={Color.Secondary500}>UPDATE CART</H5>
      </ButtonGlobal>
    </>
  )
}
