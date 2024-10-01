import './style.scss'

//Component
import ButtonGlobal from '../../ButtonGlobal'

//Style
import { H5 } from '../../../../../Style/Font/Typograpy'

//Asset
import ArrowRight from '../../../../../Asset/Image/Component/Button/ArrowRight.png'

//Librari
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../../../../Constant/Route'

export default function BRProceedToCheckout() {
  const navigate = useNavigate()
  return (
    <>
      <ButtonGlobal
        className={'BRProceedToCheckout'}
        width={376}
        height={56}
        onClick={()=>navigate(PATH.CHECKOUT)}
      >
        <H5>PROCCED TO CHECKOUT</H5>
        <img src={ArrowRight} alt=""/>
      </ButtonGlobal>
    </>
  )
}
