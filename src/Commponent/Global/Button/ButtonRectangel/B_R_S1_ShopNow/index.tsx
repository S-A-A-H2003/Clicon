import './style.scss'

//Component
import ButtonGlobal from '../../ButtonGlobal'

//Style
import { H5 } from '../../../../../Style/Font/Typograpy'

//Conatant
import { Color } from '../../../../../Constant/Colors'

//Asset
import ArrowRight from '../../../../../Asset/Image/Component/Button/ArrowRight.png'

interface Props {
  onClick?:()=>void;
  width?:number;
  height?:number;
}

export default function BRS1ShopNow({onClick,width,height}:Props) {
  return (
    <>
      <ButtonGlobal
        className={'BRS1ShopNow'}
        width={width}
        height={height}
        color={Color.Primary500}
        onClick={onClick}
      >
        <H5>Shop now</H5>
        <img src={ArrowRight} alt=""/>
      </ButtonGlobal>
    </>
  )
}
