import './style.scss'

//Component
import ButtonGlobal from '../../ButtonGlobal'

//Style
import { H5 } from '../../../../../Style/Font/Typograpy'

//Conatant
import { Color } from '../../../../../Constant/Colors'

interface Props {
  onClick?:React.MouseEventHandler<HTMLButtonElement>;
}

export default function BRApplyCoupon({onClick}:Props) {
  return (
    <>
      <ButtonGlobal
        className={'BRApplyCoupon'}
        width={159}
        height={48}
        backgroundcolor={Color.Secondary500}
        onClick={onClick}
      >
        <H5>APPLY COUPON</H5>
      </ButtonGlobal>
    </>
  )
}
