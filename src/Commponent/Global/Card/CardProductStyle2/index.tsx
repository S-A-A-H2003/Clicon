import './style.scss'
import { useEffect, useState } from 'react'

//Style
import { Color } from '../../../../Constant/Colors'
import { BodySmall400, BodySmall600 } from '../../../../Style/Font/Typograpy'

//Component
import Display from '../../Display'
import BCWish from '../../Button/ButtonCircle/B_C_Wish'
import BCAddToCart from '../../Button/ButtonCircle/B_C_AddToCart'
import BCEye from '../../Button/ButtonCircle/B_C_Eye'
import useCart from '../../../../Hook/Cart/Cart'
import useWishlist from '../../../../Hook/Wishlist/Wishlist'
import { useNavigate } from 'react-router-dom'
import Hot from '../../Badge/Hot'
import Discount from '../../Badge/Discount'
import Sale from '../../Badge/Sale'
import SoldOut from '../../Badge/SoldOut'
import { useCartContext } from '../../../../Context/Cart'
import { useWishlistContext } from '../../../../Context/Wishlist'
import { convertCurrency } from '../../../../Utils/Currency'

interface Props {
  className?:string;
  onClick?:React.MouseEventHandler<HTMLButtonElement>;
  item:{
    id:number;
    productNames:string;
    description:string;
    price:number;
    priceBefor:number;
    offer:number;
    isSoldOut:boolean;
    isHot:boolean;
    isSale:boolean;
    pictures:{
      mainPicture:string;
    }
  };
}

export default function CardProductStyle2({item}:Props) {

  const navigate =useNavigate()
  const [initHover,setInitHover]=useState<boolean>(false)
  const {cart}=useCartContext()
  const {wishlist}=useWishlistContext()

  const [initBCAddToCart,setInitBCAddToCart]=useState(false)
  const [initBCWish,setInitBCWish]=useState(false)
  const {AddToCart,RemoveFromCart}=useCart()
  const {AddToWishlist,RemoveFromWishlist}=useWishlist()
  

  const HandelChangeBCAddToCart =(item:any)=>{
    setInitBCAddToCart(initBCAddToCart?false:true)
    if(initBCAddToCart){
      if(item.isSoldOut){
        window.alert(item.productNames +" Sold Out")
      }else{
        RemoveFromCart(item.id)
      }
    }else{
      if(item.isSoldOut){
        window.alert(item.productNames +" Sold Out")
      }else{
        AddToCart(item.id)
      }
    } 
  }
  const HandelChangeBCWish =(item:any)=>{
    setInitBCWish(initBCWish?false:true)
    if(initBCWish){
      if(item.isSoldOut){
        window.alert(item.productNames +" Sold Out")
      }else{
        RemoveFromWishlist(item.id)
      }
    }else{
      if(item.isSoldOut){
        window.alert(item.productNames +" Sold Out")
      }else{
        AddToWishlist(item.id)
      }
    }
  } 
  const HandelHoverTrue =()=>{
    setInitHover(true)
  } 
  const HandelHoverFalse =()=>{
    setInitHover(false)
  }
  const Type:string =localStorage.getItem('Currency') || "USD"
  return (
    <>
        <Display
          className='CardProductStyle2'
          width={248}
          height={296} 
          border={`1px solid ${Color.Gary100}`} 
          onMouseEnter={()=>HandelHoverTrue()} 
          onMouseLeave={()=>HandelHoverFalse()}
        >
         {initHover?'':
          <div className="CardProductStyle2_Badge">
            {item.isSoldOut?<SoldOut className={'CardProductStyle2_Activ CardProductStyle2_SoldOut'}></SoldOut>:
              <>
                {item.offer?<Discount className={'CardProductStyle2_Activ CardProductStyle2_Discount'} Discount={item.offer}></Discount>:''}
                {item.isHot?<Hot className={'CardProductStyle2_Activ CardProductStyle2_Hot'}></Hot>:''}
                {item.isSale?<Sale className={'CardProductStyle2_Activ CardProductStyle2_Sale'}></Sale>:''}
              </>
            }
          </div>}
          <img src={item.pictures.mainPicture} alt="" className='CardProductStyle2_Img' />
          <div className='CardProductStyle2_Hover'>
            <BCWish onClick={()=>HandelChangeBCWish(item)} isActive={wishlist.some((i:any)=>i.id===item.id)}></BCWish>
            <BCAddToCart onClick={()=>HandelChangeBCAddToCart(item)} isActive={cart.some((i:any)=>i.id===item.id)}></BCAddToCart>
            <BCEye onClick={()=>navigate(`/ProductDetail/${item.id}`)}></BCEye>
          </div>

          <BodySmall400 color={Color.Gary900}>
            {item.description}
          </BodySmall400>

          <div className="Price">
            <BodySmall600 color={Color.Gary400}>
              <del>
              {localStorage.getItem('Currency')} {convertCurrency(item.priceBefor,Type)}
              </del>
            </BodySmall600>
            <BodySmall600 color={Color.Secondary500}>
              {localStorage.getItem('Currency')}  {convertCurrency(item.price,Type)}
            </BodySmall600>
          </div>
        </Display>
    </>
  )
}
