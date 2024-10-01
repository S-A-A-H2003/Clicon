import './style.scss'

//Component
import Container from '../../Container'
import BRS1ShopNow from '../../Button/ButtonRectangel/B_R_S1_ShopNow'

//Constant
import { Color } from '../../../../Constant/Colors'

//Style
import { BodyLarge600, H3 } from '../../../../Style/Font/Typograpy'

//Librari
import { useNavigate } from 'react-router-dom'


interface Props {
  className?:string;
 
  item:{
    id:number;
    productNames:string;
    price:number;
    pictures:{
      mainPicture:string;
    }
  }
}

export default function WidgetS2({className,item}:Props) {
  const navigate =useNavigate()
  return (
    <>
     <Container 
        className={className +' WidgetS2'}
        backgroundcolor={Color.Gary50}
        width={424} 
        height={248}
      >
        <div className="WidgetS2_Left">
          <img src={item.pictures.mainPicture} alt=""  className='WidgetS2_Left_Img'/>
        </div>

        <div className="WidgetS2_Right">
          <H3 className="WidgetS2_Right_ProductNames" color={Color.Gary900}>{item.productNames}</H3>
          <BodyLarge600 className="WidgetS2_Right_Price" color={Color.Secondary500}>{item.price +(localStorage.getItem('Currency')||'USD')}</BodyLarge600>
          <BRS1ShopNow 
            width={156} 
            height={48} 
            onClick={()=>navigate(`/ProductDetail/${item.id}`)}
          />
        </div>
     </Container>
    </>
  )
}
