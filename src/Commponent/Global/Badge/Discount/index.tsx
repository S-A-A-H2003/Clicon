import './style.scss'

//Component
import ButtonGlobal from '../../Button/ButtonGlobal'

//Style
import { BodyTiny600 } from '../../../../Style/Font/Typograpy'

//Constant
import { Color } from '../../../../Constant/Colors'

interface Props {
  Discount?:number;
  className?:string;
}

export default function Discount({Discount=25,className}:Props) {
  return (
    <>
      <ButtonGlobal
        className={className +' Discount'}
        width={73}
        height={26}
        backgroundcolor={Color.Warning400}
        borderradius={'2px'}
      >
      <BodyTiny600 color={Color.Gary900}>{Discount} % OFF</BodyTiny600>
      </ButtonGlobal>
    </>
  )
}
