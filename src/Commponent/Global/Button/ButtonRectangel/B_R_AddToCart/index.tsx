import './style.scss'

//Component
import ButtonGlobal from '../../ButtonGlobal'

//Style
import { Color } from '../../../../../Constant/Colors'
import { H5 } from '../../../../../Style/Font/Typograpy'

//Asset
import ShoppingCartSimpleWihte from '../../../../../Asset/Image/Component/Button/ShoppingCartSimpleWhite.png'
import ShoppingCartSimpleBlack from '../../../../../Asset/Image/Component/Button/ShoppingCartSimpleBlack.png'

interface Props {
  className?:string;
  isActive?:boolean;
  onClick?:React.MouseEventHandler<HTMLButtonElement>;
}

export default function BRAddToCart({className,isActive,onClick}:Props) {
  return (
    <>
     <ButtonGlobal
      className={className+' BRAddToCart'}
      width={173} 
      height={48}
      backgroundcolor={isActive?Color.Primary500:Color.Primary100}
      borderradius={'2px'}
      onClick={onClick}
     >
      <img src={isActive?ShoppingCartSimpleWihte:ShoppingCartSimpleBlack} alt="" />
      <H5 color={isActive?Color.Gary00:Color.Gary900}>Add to card</H5>
     </ButtonGlobal>
    </>
  )
}
