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

export default function BestDeals({className}:Props) {
  return (
    <>
      <ButtonGlobal
        className={className+ ' BestDeals'}
        width={95}
        height={26}
        backgroundcolor={Color.Secondary500}
        borderradius={'2px'}
      >
      <BodyTiny600>BEST DEALS</BodyTiny600>
      </ButtonGlobal>
    </>
  )
}
