import './style.scss'
import { useEffect, useState } from 'react'

//Style
import { Color } from '../../../../Constant/Colors'
import { BodySmall400 } from '../../../../Style/Font/Typograpy'

//Component
import Display from '../../Display'

//Asset
import MinusBefor from '../../../../Asset/Image/Component/Card/CardCart/MinusBefor.png'
import MinusAfter from '../../../../Asset/Image/Component/Card/CardCart/MinusAfter.png'
import PlusBefor from '../../../../Asset/Image/Component/Card/CardCart/PlusBefor.png'
import PlusAfter from '../../../../Asset/Image/Component/Card/CardCart/PlusAfter.png'
import XCircleBefor from '../../../../Asset/Image/Component/Card/CardCart/XCircleBefor.png'
import XCircleAfter from '../../../../Asset/Image/Component/Card/CardCart/XCircleAfter.png'
import useCart from '../../../../Hook/Cart/Cart'
import { useCardTotals } from '../../../../Context/CardTotals'

interface Props {
  item:{
    id:number;
    price:number;
    offer:number;
    Shipping:number;
    Tax:number;
    productNames:string;
    priceBefor:number;
    pictures:{
    mainPicture:string;
  }
  }
}

export default function CardCart({item}:Props) {
  //Local
  const {RemoveFromCart} = useCart()
  const [quantity, setQuantity] = useState<number>(0);
  const [subTotalLocal, setSubTotalLocal] = useState<number>(0);
  const [isHover, setIsHover] = useState<boolean>(false);
  
  //Global
  const {subTotal,setSubTotal,setTotal,discount,setDiscount,shipping,setShipping,tax,setTax} = useCardTotals()
  
  const Incriment=()=>{
    setQuantity((quantity)=>quantity+1)
    setSubTotal(subTotal+item.price)
    setDiscount(discount+item.offer)
    setShipping(shipping+item.Shipping)
    setTax(tax+item.Tax)
  }
  const Decriment=()=>{
    setQuantity((quantity)=>quantity>=1?quantity-1:quantity)
    setSubTotal(quantity>=1?subTotal-item.price:subTotal)
    setDiscount(quantity>=1?discount-item.offer:discount)
    setShipping(quantity>=1?shipping-item.Shipping:shipping)
    setTax(quantity>=1?tax-item.Tax:tax)
  } 
  const RemoveSomeProductCart=()=>{
     setSubTotal(subTotal-(quantity*item.price))
     setDiscount(discount-(quantity*item.offer))
     setShipping(shipping-(quantity*item.Shipping))
     setTax(tax-(quantity*item.Tax))
  } 
  useEffect(()=>{
    setSubTotalLocal(item.price * quantity)
    setTotal((subTotal+shipping+tax)-(((subTotal+shipping+tax)*discount)/100))
  },[quantity])
  return (
    <>  
        <Display
          className='CardCart'
          width={824}
          height={72}  
        >
         <div className="CardCart_Products" onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>
          <img 
           className='CardCart_Products_ImgOne'
           src={isHover?XCircleAfter:XCircleBefor} 
           onClick={()=>{
            RemoveFromCart(item.id)
            RemoveSomeProductCart()
           }} 
            alt=""  />
          <img src={item.pictures.mainPicture} alt="" className='CardCart_Products_ImgTow' />
          <BodySmall400 color={Color.Gary900}>
            {item.productNames}
          </BodySmall400>
         </div>
         <div className="CardCart_Price">
            <BodySmall400 color={Color.Gary400}>
              <del>
                ${item.priceBefor}
              </del>
            </BodySmall400>
            <BodySmall400 color={Color.Gary700}>
              ${item.price}
            </BodySmall400>
          </div>
          <Display className="CardCart_Counter" width={148} height={48} color={Color.Gary100} border={`1px solid ${Color.Gary100}`}>
            <img  className="CardCart_Counter_Incriment" src={quantity===0?PlusBefor:PlusAfter} alt="" onClick={()=>Incriment()}/>
            <Display className="CardCart_Counter_Total" color={Color.Gary700}>{quantity}</Display>
            <img className="CardCart_Counter_Decriment" src={quantity===0?MinusBefor:MinusAfter} alt=""  onClick={()=>Decriment()}/>
          </Display>
            <div className="CardCart_Total">
              <BodySmall400 color={Color.Gary700}>
                ${subTotalLocal}
              </BodySmall400>
            </div>
        </Display>
    </>
  )
}
