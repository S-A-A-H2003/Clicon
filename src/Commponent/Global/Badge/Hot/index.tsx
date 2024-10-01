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

export default function Hot({className}:Props) {
  return (
    <>
      <ButtonGlobal
        className={className +' Hot'}
        width={46}
        height={26}
        backgroundcolor={Color.Danger500}
        borderradius={'2px'}
      >
      <BodyTiny600>HOT</BodyTiny600>
      </ButtonGlobal>
    </>
  )
}
