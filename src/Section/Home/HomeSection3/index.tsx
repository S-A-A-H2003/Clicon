import './style.scss'

//Component
import Container from '../../../Commponent/Global/Container'

//Context
import { useProductsContext } from '../../../Context/Products'
import CardProductStyle2 from '../../../Commponent/Global/Card/CardProductStyle2'
import CardProductStyle3 from '../../../Commponent/Global/Card/CardProductStyle3'
import { BodySmall400, BodySmall600, H3 } from '../../../Style/Font/Typograpy'
import { Color } from '../../../Constant/Colors'
import ArrowRight from '../../../Asset/Image/Pages/Home/HomeSection/ArrowRight.png'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../../Constant/Route'

export default function HomeSection3() {
  const{Products} = useProductsContext()
  const DataCardStyle2 =Products?.filter((item:any)=>item.isBestDeals).slice(0,8)
  const DataCardStyle3 =Products?.filter((item:any)=>item.isBestDeals && (item.Rating.rate>5 || item.Rating.rate>4)).slice(1,2)
  const navigate =useNavigate()
  
  return (
    <>
        <Container className={'HomeSection3'}>
          <div className="HomeSection1_Top">
            <div className="HomeSection1_Top_PartOne">
              <H3 color={Color.Gary900}>Best Deals</H3>
              <div className="Timer">
                <BodySmall400 color={Color.Gary900}>Deals ends in</BodySmall400>
              </div> 
            </div>

            <div className="HomeSection1_Top_PartTow" onClick={()=>navigate(PATH.SHOP)}>
              <BodySmall600 color={Color.Secondary500}>Browse All Product</BodySmall600>
              <img src={ArrowRight} alt="" />
            </div>
          </div>

          <div className="HomeSection1_Bottom">
            <div className="HomeSection1_Bottom_PartOne">
              {Array.isArray(DataCardStyle3)&&DataCardStyle3?.map((item)=>
                <CardProductStyle3 item={item}></CardProductStyle3>
              )}
            </div> 
            <div className="HomeSection1_Bottom_PartTow">
              {Array.isArray(DataCardStyle2)&&DataCardStyle2?.map((item)=> 
               <CardProductStyle2 item={item}></CardProductStyle2>
               
              )}
            </div> 
          </div>
        </Container>
    </>
  )
}
