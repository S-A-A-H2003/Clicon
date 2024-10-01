import './style.scss'

//Component
import Container from '../../../Commponent/Global/Container'
import CardProductSwiperStyle1 from '../../../Commponent/Global/Card/CardProductSwiperStyle1'
import WidgetS1 from '../../../Commponent/Global/Offers/WidgetS1'
import WidgetS2 from '../../../Commponent/Global/Offers/WidgetS2'

//Context
import { useProductsContext } from '../../../Context/Products'

export default function HomeSection1() {
  const {Products}=useProductsContext()
  const ProductFilterSwiper=Products?.filter((item:any)=>item.offer).slice(0,3)
  const ProductFilterWidgetS1=Products?.filter((item:any)=>item.offer>20).slice(3,4)
  const ProductFilterWidgetS2=Products?.filter((item:any)=>item.offer).slice(4,5)
  return (
    <>
        <Container className={'HomeSection1'}>
          <div className="HomeSection1_Left">
             <CardProductSwiperStyle1 ProductFilter={ProductFilterSwiper}></CardProductSwiperStyle1>
          </div>
          
          <div className="HomeSection1_Right">
            {Array.isArray(ProductFilterWidgetS1)&&ProductFilterWidgetS1?.map((item)=>
              <WidgetS1 className="HomeSection1_Right_PartOne" item={item}></WidgetS1>
            )}

            {Array.isArray(ProductFilterWidgetS2)&&ProductFilterWidgetS2?.map((item)=>
              <WidgetS2 className="HomeSection1_Right_PartTow" item={item}></WidgetS2>
            )}
          </div> 
        </Container>
    </>
  )
}
