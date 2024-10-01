import './style.scss'

//Component
import ButtonGlobal from '../../Button/ButtonGlobal'

//Style
import {BodyTiny600 } from '../../../../Style/Font/Typograpy'

//Constant
import { Color } from '../../../../Constant/Colors'

interface Props {
  className?:string;
}

export default function SoldOut({className}:Props) {
  return (
    <>
      <ButtonGlobal
        className={className +' SoldOut'}
        width={80}
        height={26}
        backgroundcolor={Color.Gary400}
        borderradius={'2px'}
      >
      <BodyTiny600>SOLD OUT</BodyTiny600>
      </ButtonGlobal>
    </>
  )
}
