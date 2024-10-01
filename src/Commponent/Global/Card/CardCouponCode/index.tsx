import { useEffect, useState } from 'react'
import './style.scss'

//Component
import Display from '../../Display'
import BRApplyCoupon from '../../Button/ButtonRectangel/B_R_ApplyCoupon'

//Style
import { Color } from '../../../../Constant/Colors'
import { BodyLarge500 } from '../../../../Style/Font/Typograpy'

//Context
import { useCardTotals } from '../../../../Context/CardTotals'

//Hook
import { usePost } from '../../../../Hook/Api/Post'

export default function CardCouponCode() {
  const [value,setValue] = useState<string>()
  const [body,setBody] = useState<string>()
  const {setCouponCode} =useCardTotals()

  const {response}=usePost('https://Clicon.com/CardCouponCode',body)
  useEffect(() => {
    setCouponCode(response)
  }, [body]);
  
  const HandelValue =(e:React.ChangeEvent<HTMLInputElement>)=>{
   setValue(e.target.value)
  }
  const HandelSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
   e.preventDefault();
   setBody(value)
  }
  return (
    <>  
      <Display className={'CardCouponCode'} width={424} height={220}  border={`1px solid ${Color.Gary100}`}>
        <Display className={'CardCouponCode_Titel'} height={64}>
          <BodyLarge500 color={Color.Gary900}>Coupon Code</BodyLarge500>
        </Display>
          <form onSubmit={(e)=>HandelSubmit(e)} className='CardCouponCode_Form'>
            <input type='email' id='Email' placeholder='Email address' value={value} onChange={(e)=>HandelValue(e)}></input>
            <BRApplyCoupon></BRApplyCoupon>
          </form>
        
      </Display>
    </>
  )
}
