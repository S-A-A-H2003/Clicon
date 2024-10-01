import './style.scss'

//Component
import Discount from '../../Badge/Discount'
import BRS1ShopNow from '../../Button/ButtonRectangel/B_R_S1_ShopNow'
import Container from '../../Container'

//Style
import { H3, Label3} from '../../../../Style/Font/Typograpy'

//Constant
import { Color } from '../../../../Constant/Colors'

//Library
import { useNavigate } from 'react-router-dom'

interface Props {
  className?:string;
 
  item:{
    id:number;
    productNames:string;
    price:number;
    offer:number;
    brand:string;
    pictures:{
      mainPicture:string;
    }
  }
}

export default function WidgetS1({className,item}:Props) {
  const navigate =useNavigate()
  return (
    <>
     <Container 
        className={className +' WidgetS1 '}
        backgroundcolor={Color.Gary900}
        width={424} 
        height={248}
      >
        <div className="WidgetS1_Left">
          <Label3 className="WidgetS1_Left_brand" color={Color.Warning500}>{item.brand}</Label3>
          <H3 className="WidgetS1_Left_ProductNames" color={Color.Gary00}>{item.productNames}</H3>
          <BRS1ShopNow 
            width={156} 
            height={48}
            onClick={()=>navigate(`/ProductDetail/${item.id}`)}
          />
        </div>

        <div className="WidgetS1_Right">
          <img src={item.pictures.mainPicture} alt=""  className='WidgetS1_Right_Img'/>
          <Discount Discount={item.offer} className='WidgetS1_Right_Discount'></Discount>
        </div>
     </Container>
    </>
  )
}
