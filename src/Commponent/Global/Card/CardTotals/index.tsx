import './style.scss'

//Component
import Display from '../../Display'

//Style
import { BodySmall400, BodySmall500 } from '../../../../Style/Font/Typograpy'

//Constant
import { Color } from '../../../../Constant/Colors'

//Context
import { useCardTotals } from '../../../../Context/CardTotals'

export default function CardTotals() {
  const {subTotal,total,discount,shipping,tax} = useCardTotals()

  return (
    <>  
      <Display className={'CardTotals'} width={376} height={200}>
              <Display className={'CardTotals_SubTotal'}>
                  <BodySmall400 color={Color.Gary600}>Sub-total</BodySmall400>
                  <BodySmall500 color={Color.Gary900}>{subTotal}</BodySmall500>
              </Display>

              <Display className={'CardTotals_Shipping'}>
                <BodySmall400 color={Color.Gary600}>Shipping</BodySmall400>
                <BodySmall500 color={Color.Gary900}>{shipping}</BodySmall500>
              </Display>

              <Display className={'CardTotals_Discount'}>
                <BodySmall400 color={Color.Gary600}>Discount</BodySmall400>
                <BodySmall500 color={Color.Gary900}>{discount}</BodySmall500>
              </Display>

              <Display className={'CardTotals_Tax'}>
                <BodySmall400 color={Color.Gary600}>Tax</BodySmall400>
                <BodySmall500 color={Color.Gary900}>{tax}</BodySmall500>
              </Display>

              <Display className="CardTotals_Break" width={376} border={`1px solid ${Color.Gary100}`}/>

              <Display className={'CardTotals_Total'}>
                <BodySmall400 color={Color.Gary900}>Total</BodySmall400>
                <BodySmall500 color={Color.Gary900}>{total.toFixed(0)}</BodySmall500>
              </Display>
      </Display>
    </>
  )
}
