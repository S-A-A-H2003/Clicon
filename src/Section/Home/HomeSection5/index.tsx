import { useState } from 'react'
import './style.scss'

//Component
import Container from '../../../Commponent/Global/Container'
import BRProducts from '../../../Commponent/Global/Button/ButtonRectangel/B_R_Products'
import BRBrowseAllProduct from '../../../Commponent/Global/Button/ButtonRectangel/B_R_BrowseAllProduct'
import CardProductStyle5 from '../../../Commponent/Global/Card/CardProductStyle5'
import CardProductStyle4 from '../../../Commponent/Global/Card/CardProductStyle4'

//Context
import { useProductsContext } from '../../../Context/Products'

//Style
import { Color } from '../../../Constant/Colors'

//Asset
import ArrowRight from '../../../Asset/Image/Pages/Home/HomeSection5/ArrowRight.png'
import { BodySmall400, H3 } from '../../../Style/Font/Typograpy'

export default function HomeSection5() {
  const{Products} = useProductsContext()

  const [valueFilter,setValueFilter]  = useState<string>()
  const DataCardStyle4 =Products?.filter((item:any)=>valueFilter?item.productNames===valueFilter:item.productNames).slice(0,8)
  const DataCardStyle5 =Products?.filter((item:any)=>valueFilter?item.productNames===valueFilter:item.productNames).slice(8,9)
  return (
    <> 
        <Container className={'HomeSection5'}>
          <div className="HomeSection5_Left">
            <div className="HomeSection5_Bottom_PartOne">
              {Array.isArray(DataCardStyle5)&&DataCardStyle5?.map((item)=>
                <CardProductStyle5 item={item}></CardProductStyle5>
              )}
            </div>
          </div>

          <div className="HomeSection5_Right">
            <div className="HomeSection5_Right_Top">
              <H3 color={Color.Gary900}>Featured Products</H3>
              <div className="HomeSection5_Right_Top_Continer">
                  <BodySmall400  onClick={()=>setValueFilter('')} >All Product</BodySmall400>
                  {Array.isArray(Products)&&Products?.map((item)=> 
                    <BRProducts item={item} onClick={()=>setValueFilter(item.productNames)} >{item.productNames}</BRProducts>
                  )} 
              </div> 
              <BRBrowseAllProduct color={Color.Primary500}><img src={ArrowRight} alt="" /></BRBrowseAllProduct>
            </div> 
            
            <div className="HomeSection5_Right_Bottom">
              {Array.isArray(DataCardStyle4)&&DataCardStyle4?.map((item)=> 
               <CardProductStyle4 item={item}></CardProductStyle4>
              )}
            </div> 
          </div>
        </Container>
    </>
  )
}
