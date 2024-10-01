import './style.scss'

//Component
import ButtonGlobal from '../../Button/ButtonGlobal'

//Style
import { BodyTiny600 } from '../../../../Style/Font/Typograpy'

//Constant
import { Color } from '../../../../Constant/Colors'

export default function BestDeals() {
  return (
    <>
      <ButtonGlobal
        className={'BestDeals'}
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
