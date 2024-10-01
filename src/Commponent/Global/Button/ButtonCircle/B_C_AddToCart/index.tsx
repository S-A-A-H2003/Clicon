import './style.scss'

//Component
import ButtonGlobal from '../../ButtonGlobal'

//Style
import { Color } from '../../../../../Constant/Colors'

//Asset
import ShoppingCartSimpleWihte from '../../../../../Asset/Image/Component/Button/ShoppingCartSimpleWhite.png'
import ShoppingCartSimpleBlack from '../../../../../Asset/Image/Component/Button/ShoppingCartSimpleBlack.png'

interface Props {
  className?:string;
  isActive?:boolean;
  onClick?:()=>void;
}

export default function BCAddToCart({className,isActive,onClick}:Props) {
  return (
    <>
     <ButtonGlobal
      className={className+' BCAddToCart'}
      width={48} 
      height={48}
      backgroundcolor={isActive?Color.Primary500:Color.Gary00}
      borderradius={'100%'}
      onClick={onClick}
     >
      <img src={isActive?ShoppingCartSimpleWihte:ShoppingCartSimpleBlack} alt="" />
     </ButtonGlobal>
    </>
  )
}
