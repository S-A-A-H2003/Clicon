import './style.scss'

//Component
import ButtonGlobal from '../../ButtonGlobal'

//Style
import { Color } from '../../../../../Constant/Colors'

//Asset
import HeartWhite from '../../../../../Asset/Image/Component/Button/HeartWhite.png'
import HeartBlack from '../../../../../Asset/Image/Component/Button/HeartBlack.png'

interface Props {
  className?:string;
  isActive:boolean;
  onClick?:React.MouseEventHandler<HTMLButtonElement>;
}
export default function BRWish({className,isActive,onClick}:Props) {
  return (
    <>
     <ButtonGlobal
      className={className+' BRWish'}
      width={48} 
      height={48}
      backgroundcolor={isActive?Color.Primary500:Color.Primary100}
      borderradius={'2px'}
      onClick={onClick}
     >
      <img src={isActive?HeartWhite:HeartBlack} alt="" />
     </ButtonGlobal>
    </>
  )
}
