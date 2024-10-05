import './style.scss'

//Style
import { Color } from '../../../../Constant/Colors'

//Component
import Display from '../../Display'
import BRS1ShopNow from '../../Button/ButtonRectangel/B_R_S1_ShopNow';

interface Props {
  className?:string;
  onClick?:React.MouseEventHandler<HTMLButtonElement>;
  item:{
    id:number;
    productNames:string;
    description:string;
    price:number;
    priceBefor:number;
    offer:number;
    isSoldOut:boolean;
    isHot:boolean;
    isSale:boolean;
    isBestDeals:boolean;
    Rating:{
      rate:number;
      userFeedBack:number;
    }
    pictures:{
      mainPicture:string;
    }
  };
}

export default function CardProductStyle5({item}:Props) {
  return (
    <>
        <Display
          className='CardProductStyle5'
          width={312}
          height={716} 
          backgroundcolor={Color.Warning300}
        >
          <BRS1ShopNow ></BRS1ShopNow>
          <img src={item.pictures.mainPicture} alt="" className='CardProductStyle5_Img' />
        </Display>
    </>
  )
}
