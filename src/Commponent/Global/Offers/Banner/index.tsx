import './style.scss'
//Component
import BRS1ShopNow from '../../Button/ButtonRectangel/B_R_S1_ShopNow'
import Container from '../../Container'

//Constant
import { Color } from '../../../../Constant/Colors'

//Style
import {BodyMedium400, BodyMedium600, BodySmall400, H2} from '../../../../Style/Font/Typograpy'

//Librari
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface Props {
  className?:string;
  item:{
    id:number;
    description:string;
    price:number;
    offer:number;
    pictures:{
      mainPicture:string;
    }
  };
}

export default function WidgetS2({className,item}:Props) {
  const navigate =useNavigate()
  const {t}=useTranslation()
  return (
    <>
     <Container 
        className={className +' Banner'}
        backgroundcolor={Color.Warning200}
        width={312} 
        height={384}
        onClick={()=>navigate(`/ProductDetail/${item.id}`)}
      >
      <img src={item.pictures.mainPicture} alt="" />
      <H2 className="Offer" color={Color.Gary900}>{item.offer} % {t('Discount')}</H2>
      <BodyMedium400 className="description" color={Color.Gary700}>{item.description}</BodyMedium400>
      <div className="Price">
        <BodySmall400 color={Color.Gary700}>{t('Starting price')}:</BodySmall400>
        <BodyMedium600 className="Price_Change" color={Color.Gary900} backgroundcolor={Color.Gary00}>{item.price + (localStorage.getItem('Currency') ||'USD')}</BodyMedium600>
      </div>
        <BRS1ShopNow></BRS1ShopNow>
     </Container>
    </>
  )
}
