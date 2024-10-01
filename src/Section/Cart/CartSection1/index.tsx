import './style.scss'

//Component
import Container from '../../../Commponent/Global/Container'
import Display from '../../../Commponent/Global/Display'
import { BodyLarge500,Label4 } from '../../../Style/Font/Typograpy'
import { Color } from '../../../Constant/Colors'
import { useCartContext } from '../../../Context/Cart'
import CardCart from '../../../Commponent/Global/Card/CardCart'
import CardCouponCode from '../../../Commponent/Global/Card/CardCouponCode'
import CardTotals from '../../../Commponent/Global/Card/CardTotals'
import BRReturntoShop from '../../../Commponent/Global/Button/ButtonRectangel/B_R_ReturntoShop'
import BRUpdateCart from '../../../Commponent/Global/Button/ButtonRectangel/B_R_UpdateCart'
import BRProceedToCheckout from '../../../Commponent/Global/Button/ButtonRectangel/B_R_ProceedToCheckout'

export default function CartSection1() {

  const {cart}=useCartContext()
  return (
    <>
        <Container className={'CartSection1'}>
         <Display
          className="CartSection1_Left"
          width={872}
          height={406}
          border={`2px solid ${Color.Gary50}`}
         >
          <Display 
           className={'CartSection1_Left_Titel'}>
            <BodyLarge500 color={Color.Gary900}>Shopping Card</BodyLarge500>
          </Display>

          <Display className={'CartSection1_Left_SubTitel'} backgroundcolor={Color.Gary100}>
            <Label4 color={Color.Gary700}>PRODUCTS</Label4>
            <Label4 color={Color.Gary700}>PRICE</Label4>
            <Label4 color={Color.Gary700}>QUANTITY</Label4>
            <Label4 color={Color.Gary700}>SUB-TOTAL</Label4>
          </Display>

          <Display className={cart.length>0?'CartSection1_Left_Cart':'CartSection1_Left_Cart_Null'} height={208}>
            {cart.length>0
            ?
            Array.isArray(cart)&&cart?.map((item)=>(
              <CardCart item={item}></CardCart>
            ))
            :
            <BodyLarge500 color={Color.Gary300}>Not Found Product Yet...</BodyLarge500>}
          </Display>

          <Display className={'CartSection1_Left_Button'}>
            <BRReturntoShop></BRReturntoShop>
            <BRUpdateCart></BRUpdateCart>
          </Display>
         </Display >

         <Display className="CartSection1_Right">
            <Display className={'CartSection1_Right_Top'} width={424} height={344}  border={`1px solid ${Color.Gary100}`}>
              <Display className={'CartSection1_Right_Top_Titel'} height={64}>
                <BodyLarge500 color={Color.Gary900}>Card Totals</BodyLarge500>
              </Display>
              <CardTotals></CardTotals>
              <BRProceedToCheckout></BRProceedToCheckout>
            </Display>
      
            <Display className={'CartSection1_Right_Bottom'}>
              <CardCouponCode></CardCouponCode>
           </Display>
         </Display>
        </Container>
    </>
  )
}
