import './style.scss'

//Component
import ButtonGlobal from '../../Button/ButtonGlobal'

//Style
import { BodyTiny600 } from '../../../../Style/Font/Typograpy'

//Constant
import { Color } from '../../../../Constant/Colors'

interface Props {
  className?:string;
}

export default function Sale({className}:Props) {
  return (
    <>
      <ButtonGlobal
        className={className +' Sale'}
        width={52}
        height={26}
        backgroundcolor={Color.Success500}
        borderradius={'2px'}
      >
      <BodyTiny600>SALE</BodyTiny600>
      </ButtonGlobal>
    </>
  )
}
