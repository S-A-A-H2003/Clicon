import  { useState } from 'react'
import './style.scss'

//Style
import { Color } from '../../../../Constant/Colors'
import { BodySmall400, BodySmall600 } from '../../../../Style/Font/Typograpy'

//Component
import BRWish from '../../Button/ButtonRectangel/B_R_Wish'
import BRAddToCart from '../../Button/ButtonRectangel/B_R_AddToCart'
import BREye from '../../Button/ButtonRectangel/B_R_Eye'
import Display from '../../Display'
import SoldOut from '../../Badge/SoldOut'
import Discount from '../../Badge/Discount'
import Hot from '../../Badge/Hot'
import Sale from '../../Badge/Sale'
import Rating from '../../Rating'

//Hook
import useCart from '../../../../Hook/Cart/Cart'
import useWishlist from '../../../../Hook/Wishlist/Wishlist'

//Librari
import { useNavigate } from 'react-router-dom'

//Context
import { useCartContext } from '../../../../Context/Cart'
import { useWishlistContext } from '../../../../Context/Wishlist'


export default function CardProductStyle3({item}:any) {

  const navigate =useNavigate()
  const {cart}=useCartContext()
  const {wishlist}=useWishlistContext()

  const [initBRAddToCart,setInitBRAddToCart]=useState(false)
  const [initBRWish,setInitBRWish]=useState(false)
  const {AddToCart,RemoveFromCart}=useCart()
  const {AddToWishlist,RemoveFromWishlist}=useWishlist()

  const HandelChangeBRAddToCart =(item:any)=>{
    setInitBRAddToCart(initBRAddToCart?false:true)
    initBRAddToCart?RemoveFromCart(item.id):AddToCart(item.id) 
  }
  const HandelChangeBRWish =(item:any)=>{
    setInitBRWish(initBRWish?false:true)
    initBRWish?RemoveFromWishlist(item.id):AddToWishlist(item.id) 

  } 
  return (
    <>  
        <Display 
          className='CardProductStyle3'
          width={328}
          height={592} 
          border={`1px solid ${Color.Gary100}`} 
        >
          
          <div className="CardProductStyle3_Badge">
            {item.isSoldOut?<SoldOut className={'CardProductStyle3_SoldOut'}></SoldOut>:
              <>
                {item.offer?<Discount className={'CardProductStyle3_Discount'} Discount={item.offer}></Discount>:''}
                {item.isHot?<Hot className={'CardProductStyle3_Hot'}></Hot>:''}
                {item.isSale?<Sale className={'CardProductStyle3_Sale'}></Sale>:''}
              </>
            }
          </div>
          <img src={item.pictures.mainPicture} alt="" className='CardProductStyle3_Img' />
          <div className="CardProductStyle3_Rating">
            <Rating Rate={item.Rating.rate}></Rating>
            <BodySmall400 color={Color.Gary500}>
              ({item.Rating.userFeedBack})
            </BodySmall400>
          </div>
          <div className="CardProductStyle3_productNames">
            <BodySmall400 color={Color.Gary900}>
              {item.productNames}
            </BodySmall400>
          </div>
          <div className="CardProductStyle3_Price">
            <BodySmall600 color={Color.Gary400}>
              <del>
                ${item.priceBefor}
              </del>
            </BodySmall600>
            <BodySmall600 color={Color.Secondary500}>
              ${item.price}
            </BodySmall600>
          </div>
          <div className="CardProductStyle3_description">
            <BodySmall400 color={Color.Gary900}>
            {item.description}
            </BodySmall400>
          </div>
         <div className="CardProductStyle3_Component">
            <BRWish onClick={()=>HandelChangeBRWish(item)} isActive={wishlist.some((i:any)=>i.id===item.id)}></BRWish>
            <BRAddToCart onClick={()=>HandelChangeBRAddToCart(item)} isActive={cart.some((i:any)=>i.id===item.id)}></BRAddToCart>
            <BREye onClick={()=>navigate(`/ProductDetail/${item.id}`)}></BREye>
         </div>
        </Display>
    </>
  )
}
