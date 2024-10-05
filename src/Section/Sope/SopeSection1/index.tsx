import { useEffect, useState } from 'react'
import Container from '../../../Commponent/Global/Container'
import { useProductsContext } from '../../../Context/Products'
import './style.scss'
import CardProductStyle4 from '../../../Commponent/Global/Card/CardProductStyle4'
import { BodySmall400, BodySmall600 } from '../../../Style/Font/Typograpy'
import { Color } from '../../../Constant/Colors'
import XBefrorHover from '../../../Asset/Image/Pages/Sope/SopeSection1/XBefrorHover.png'
import XAfterHover from '../../../Asset/Image/Pages/Sope/SopeSection1/XAfterHover.png'
import Display from '../../../Commponent/Global/Display'
import { useCategoryContext } from '../../../Context/Category'
export default function SopeSection1() {

  const {Products} = useProductsContext()
  const {Category} = useCategoryContext()

  const [activeFilterd,setActiveFilterd] = useState<{}>({Act1:false,Act2:false,Act3:false,Act4:false})
  const [valueHover,setValueHover] = useState<{} | any>({})
  const [value,setValue] = useState<number>(0)
  const [lendth,setLendth] = useState<number>()
  const [category,setCategory] = useState<string | null>(null)
  const [categoryHover,setCategoryHover] = useState<{} | any>({})
  const [priceRange,setPriceRange] = useState<{num1:number | null ,num2:number | null }>({num1:null ,num2:null})
  const [popularBrands,setPopularBrands] = useState<string | null>(null)
  const [starRating,setStarRating] = useState<number | null>(null)

  const FindeProduct = Products.filter((item:any)=>
    category?item.category===category:item.category && 
    priceRange.num1 && priceRange.num2?(item.price>=priceRange.num1 && item.price<=priceRange.num2):item.price && 
    popularBrands?item.brand===popularBrands :item.brand &&
    starRating?item.Rating.rate===starRating :item.Rating.rate
  )

  useEffect(()=>{
    setLendth(FindeProduct.length)
  },[FindeProduct])

  const FindeProductToUse = FindeProduct.slice(0+value,24+value)
  return (
    <>
        <Container className={'SopeSection1'}>
          <aside className='SopeSection1_Aside'>
            <div className="SopeSection1_Aside_Part1">
              {Array.isArray(Category) && Category?.map((item:any)=>
               <div className='SopeSection1_Aside_Part1_Category'>
                 <Display 
                    width={20} 
                    height={20} 
                    border={categoryHover[`${item.name}`]?`6px solid ${Color.Primary500}`:`1px solid ${Color.Gary100}`} 
                    borderradius='100%' 
                    key={item.id}
                    onClick={()=>{
                      setCategory(item.name)
                      setCategoryHover({[`${item.name}`]:true})
                      }
                    } 
                  />
                  <BodySmall400 color={Color.Gary700}>{item.name}</BodySmall400>
                </div>
              )}
            </div>
            <div className="SopeSection1_Aside_Part2"></div>
            <div className="SopeSection1_Aside_Part3"></div>
            <div className="SopeSection1_Aside_Part4"></div>
            <div className="SopeSection1_Aside_Part5"></div>
          </aside>

          <section className='SopeSection1_Content'>
            <div className="SopeSection1_Content_Part1"></div>
            <div className="SopeSection1_Content_Part2">
              <div className="SopeSection1_Aside_Part2_Left">
                <BodySmall400 color={Color.Gary600}>Active Filters:</BodySmall400>
                <div className="SopeSection1_Aside_Part1_Left_ActiveFilterd">
                  
                    {category?<BodySmall400 color={Color.Gary900}>
                      {category}
                      <img onMouseEnter={()=>{setActiveFilterd({Act1:true})}} onMouseLeave={()=>setActiveFilterd({Act1:false})} onClick={()=>{setCategory(null);setCategoryHover({})}} src={activeFilterd.Act1?XAfterHover:XBefrorHover} alt="" />
                    </BodySmall400>:''}

                    {priceRange.num1 && priceRange.num2?<BodySmall400 color={Color.Gary900}>
                      {localStorage.getItem('Currency')}{priceRange.num1} to {localStorage.getItem('Currency')}{priceRange.num1}
                      <img onMouseEnter={()=>{setActiveFilterd({Act2:true})}} onMouseLeave={()=>setActiveFilterd({Act2:false})} onClick={()=>setPriceRange({num1:null,num2:null})} src={activeFilterd.Act2?XAfterHover:XBefrorHover} alt="" />
                    </BodySmall400>:''}

                    {popularBrands?<BodySmall400 color={Color.Gary900}>
                      {popularBrands}
                      <img onMouseEnter={()=>{setActiveFilterd({Act3:true})}} onMouseLeave={()=>setActiveFilterd({Act3:false})} onClick={()=>setPopularBrands(null)} src={activeFilterd.Act3?XAfterHover:XBefrorHover} alt="" />
                    </BodySmall400>:''}

                    {starRating?<BodySmall400 color={Color.Gary900}>
                      {starRating}
                      <img onMouseEnter={()=>{setActiveFilterd({Act4:true})}} onMouseLeave={()=>setActiveFilterd({Act4:false})} onClick={()=>setStarRating(null)} src={activeFilterd.Act4?XAfterHover:XBefrorHover} alt="" />
                    </BodySmall400>:''}            
                </div>
              </div>
              <div className="SopeSection1_Aside_Part2_Right">
                <BodySmall600 color={Color.Gary900}>{lendth}</BodySmall600>
                <BodySmall400 color={Color.Gary600}>Results found.</BodySmall400>
              </div>
            </div>
            <div className="SopeSection1_Content_Part3">
              {Array.isArray(FindeProductToUse) && FindeProductToUse?.map((item:any)=>
                <CardProductStyle4 key={item.id} item={item}></CardProductStyle4>
              )}
            </div>
            <div className="SopeSection1_Content_Part4"> 
              {/* {for (let i = length/24; i < 0; i--) {
                <Display 
                className='SopeSection1_Content_Part4_Button'
                width={40} 
                height={40} 
                border={`1px solid ${Color.Gary100}`} 
                borderradius='100%' onClick={()=>{
                  setValue(10*24)
                  setValueHover({[`id${i}`]:true})
                  }
                } 
                backgroundcolor={valueHover[`id${i}`]?Color.Primary500:Color.Gary00}
              >
                <BodySmall400 color={valueHover[`id${i}`]?Color.Gary00:Color.Gary900}>
                  1
                </BodySmall400>
              </Display>
            }} */}


            </div>
          </section>
        </Container>
    </>
  )
}
