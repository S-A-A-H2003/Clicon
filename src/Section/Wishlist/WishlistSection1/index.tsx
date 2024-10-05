import './style.scss'

//Component
import Container from '../../../Commponent/Global/Container'
import Display from '../../../Commponent/Global/Display'
import { BodyLarge500,Label4 } from '../../../Style/Font/Typograpy'
import { Color } from '../../../Constant/Colors'
import Cardwishlist from '../../../Commponent/Global/Card/CardCart'
import CardCouponCode from '../../../Commponent/Global/Card/CardCouponCode'
import CardTotals from '../../../Commponent/Global/Card/CardTotals'
import BRReturntoShop from '../../../Commponent/Global/Button/ButtonRectangel/B_R_ReturntoShop'
import BRUpdatewishlist from '../../../Commponent/Global/Button/ButtonRectangel/B_R_UpdateCart'
import BRProceedToCheckout from '../../../Commponent/Global/Button/ButtonRectangel/B_R_ProceedToCheckout'
import { useWishlistContext } from '../../../Context/Wishlist'

export default function WishlistSection1() {

  const {wishlist}=useWishlistContext()
  return (
    <>
        <Container className={'wishlistSection1'}>
         <Display
          className="wishlistSection1_Left"
          width={872}
          height={406}
          border={`2px solid ${Color.Gary50}`}
         >
          <Display 
           className={'wishlistSection1_Left_Titel'}>
            <BodyLarge500 color={Color.Gary900}>Shopping Card</BodyLarge500>
          </Display>

          <Display className={'wishlistSection1_Left_SubTitel'} backgroundcolor={Color.Gary100}>
            <Label4 color={Color.Gary700}>PRODUCTS</Label4>
            <Label4 color={Color.Gary700}>PRICE</Label4>
            <Label4 color={Color.Gary700}>QUANTITY</Label4>
            <Label4 color={Color.Gary700}>SUB-TOTAL</Label4>
          </Display>

          <Display className={wishlist.length>0?'wishlistSection1_Left_wishlist':'wishlistSection1_Left_wishlist_Null'} height={208}>
            {wishlist.length>0
            ?
            Array.isArray(wishlist)&&wishlist?.map((item)=>(
              <Cardwishlist item={item}></Cardwishlist>
            ))
            :
            <BodyLarge500 color={Color.Gary300}>Not Found Product Yet...</BodyLarge500>}
          </Display>

          <Display className={'wishlistSection1_Left_Button'}>
            <BRReturntoShop></BRReturntoShop>
            <BRUpdatewishlist></BRUpdatewishlist>
          </Display>
         </Display >

         <Display className="wishlistSection1_Right">
            <Display className={'wishlistSection1_Right_Top'} width={424} height={344}  border={`1px solid ${Color.Gary100}`}>
              <Display className={'wishlistSection1_Right_Top_Titel'} height={64}>
                <BodyLarge500 color={Color.Gary900}>Card Totals</BodyLarge500>
              </Display>
              <CardTotals></CardTotals>
              <BRProceedToCheckout></BRProceedToCheckout>
            </Display>
      
            <Display className={'wishlistSection1_Right_Bottom'}>
              <CardCouponCode></CardCouponCode>
           </Display>
         </Display>
        </Container>
    </>
  )
}
