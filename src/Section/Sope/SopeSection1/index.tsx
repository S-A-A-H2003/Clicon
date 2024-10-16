import { useEffect, useState } from 'react'
import Container from '../../../Commponent/Global/Container'
import { useProductsContext } from '../../../Context/Products'
import './style.scss'
import CardProductStyle4 from '../../../Commponent/Global/Card/CardProductStyle4'
import { BodyMedium500, BodySmall400, BodySmall600, Label2 } from '../../../Style/Font/Typograpy'
import { Color } from '../../../Constant/Colors'
import XBefrorHover from '../../../Asset/Image/Pages/Sope/SopeSection1/XBefrorHover.png'
import XAfterHover from '../../../Asset/Image/Pages/Sope/SopeSection1/XAfterHover.png'
import Display from '../../../Commponent/Global/Display'
import { useCategoryContext } from '../../../Context/Category'
import ButtonFilter from '../../../Commponent/Global/Button/ButtonFilter'
import Search from '../../../Commponent/Headers/Search'
import { useResultSearchSopeContext } from '../../../Context/ResultSearchSope'
export default function SopeSection1() {

  const {Products} = useProductsContext()
  const {Category} = useCategoryContext()
  const {resultSearchSope,setResultSearchSope} = useResultSearchSopeContext()

  const [activeFilterd,setActiveFilterd] = useState<any>({Act1:false,Act2:false,Act3:false,Act4:false})
  const [valueHover,setValueHover] = useState<{} | any>({})
  const [value,setValue] = useState<number | null>()
  const [conter,setConter] = useState<number>(0)
  const [length,setLength] = useState<number>(1)
  const [category,setCategory] = useState<string | null>(null)
  const [categoryHover,setCategoryHover] = useState<{} | any>({})
  const [priceRange,setPriceRange] = useState<{num1:number | null ,num2:number | null }>({num1:null ,num2:null})
  const [priceRangeHover,setPriceRangeHover] = useState<any>({item1:false,item2:false,item3:false,item4:false,item5:false,item6:false})
  const [popularBrands,setPopularBrands] = useState<string | null>(null)
  const [popularBrandsHover,setPopularBrandsHover] = useState<any>({})
  const [tag,setTag] = useState<string | null>(null)
  const [tagHover,setTagHover] = useState<any>({})

  const FindeProduct = resultSearchSope?resultSearchSope:Products.filter((item:any)=>(
    (category?item.category===category:item.category) && 
    (priceRange.num1 && priceRange.num2?(item.price>=priceRange.num1 && item.price<=priceRange.num2):item.price) && 
    (popularBrands?item.brand===popularBrands :item.brand) &&
    (tag?item.productNames===tag :item.productNames)
  ))

  useEffect(()=>{
    setLength(FindeProduct.length)
  },[FindeProduct])

  const FindeProductToUse = FindeProduct.slice(value ? value : 0, value ? 24 + value : 24)
  const uniqueBrands = [...new Set(Products.map((item:any) => item.brand))]
  const uniqueTagFilter =Products.filter((item:any) =>( (item.isHot===true) && (item.isBestDeals===true) && (item.isTop===true) && (item.isSale===false) && (item.isSoldOut===false) && (item.Rating.rate>4)))
  const uniqueTag =[...new Set(uniqueTagFilter.map((item:any) => item.productNames))]
  console.log(uniqueTagFilter);
  console.log(uniqueTag);
  
  const Increment =()=>{
    conter===Math.ceil(length /24)?'':setConter(conter + 1)
    conter===Math.ceil(length /24)?'':setValue(conter * 24)
    conter===Math.ceil(length /24)?'':setValueHover({ [`id${conter}`]: true })
    
  }
  
  const Decrement =()=>{
     conter===0?'':setConter(conter - 1)
     conter===0?'':setValue(conter-2 * 24)
     conter===0?'':setValueHover({ [`id${conter-2}`]: true })
   
 }
  return (
    <>
        <Container className={'SopeSection1'}>
          <aside className='SopeSection1_Aside'>
            <div className="SopeSection1_Aside_Part1">
              <Label2 color={Color.Gary900}>CATEGORY</Label2>
              {Array.isArray(Category) && Category?.map((item:any)=>
                <ButtonFilter
                   width={20} 
                   height={20} 
                   border={categoryHover[`${item.name}`]?`6px solid ${Color.Primary500}`:`1px solid ${Color.Gary100}`} 
                   borderradius='100%' 
                   key={item.id}
                   onClick={()=>{
                     setCategory(categoryHover[`${item.name}`]?null:item.name)
                     setCategoryHover(categoryHover[`${item.name}`]?{[`${item.name}`]:false}:{[`${item.name}`]:true})
                     setValue(0)
                     setValueHover({})
                     setResultSearchSope(null)
                     }
                   } 
                   color={Color.Gary700}
                >{item.name}</ButtonFilter>
              )}
              <div className="SopeSection1_Break"></div>
            </div>
            <div className="SopeSection1_Aside_Part2">
              <Label2 color={Color.Gary900}>PRICE RANGE</Label2>
              <ButtonFilter 
                width={20} 
                height={20} 
                border={priceRangeHover.item1?`3px solid ${Color.Primary500}`:`1px solid ${Color.Gary100}`} 
                borderradius='100%' 
                onClick={()=>{
                 setPriceRange(priceRangeHover.item1?{num1:null,num2:null}:{num1:null,num2:null})
                 setPriceRangeHover(priceRangeHover.item1?{item1:false}:{item1:true})
                 setValue(0)
                 setValueHover({})
                 setResultSearchSope(null)
                }
                } 
                color={Color.Gary700}

              >All Price</ButtonFilter>
              <ButtonFilter 
                width={20} 
                height={20} 
                border={priceRangeHover.item2?`3px solid ${Color.Primary500}`:`1px solid ${Color.Gary100}`} 
                borderradius='100%' 
                onClick={()=>{
                  setPriceRange(priceRangeHover.item2?{num1:null,num2:null}:{num1:25,num2:100})
                  setPriceRangeHover(priceRangeHover.item2?{item2:false}:{item2:true})
                  setValue(0)
                  setValueHover({})
                  setResultSearchSope(null)
                 }
                } 
                color={Color.Gary700}
                
              >{localStorage.getItem('Currency')} 25 to {localStorage.getItem('Currency')} 100</ButtonFilter>
              <ButtonFilter 
                width={20} 
                height={20} 
                border={priceRangeHover.item3?`3px solid ${Color.Primary500}`:`1px solid ${Color.Gary100}`} 
                borderradius='100%' 
                onClick={()=>{
                  setPriceRange(priceRangeHover.item3?{num1:null,num2:null}:{num1:100,num2:300})
                  setPriceRangeHover(priceRangeHover.item3?{item3:false}:{item3:true})
                  setValue(0)
                  setValueHover({})
                  setResultSearchSope(null)
                 }
                } 
                color={Color.Gary700}
                
              >{localStorage.getItem('Currency')} 100 to {localStorage.getItem('Currency')} 300</ButtonFilter>
              <ButtonFilter 
                width={20} 
                height={20} 
                border={priceRangeHover.item4?`3px solid ${Color.Primary500}`:`1px solid ${Color.Gary100}`} 
                borderradius='100%' 
                onClick={()=>{
                  setPriceRange(priceRangeHover.item4?{num1:null,num2:null}:{num1:300,num2:500})
                  setPriceRangeHover(priceRangeHover.item4?{item4:false}:{item4:true})
                  setValue(0)
                  setValueHover({})
                  setResultSearchSope(null)
                 }
                } 
                color={Color.Gary700}
                
              >{localStorage.getItem('Currency')} 300 to {localStorage.getItem('Currency')} 500</ButtonFilter>
              <ButtonFilter 
                width={20} 
                height={20} 
                border={priceRangeHover.item5?`3px solid ${Color.Primary500}`:`1px solid ${Color.Gary100}`} 
                borderradius='100%' 
                onClick={()=>{
                  setPriceRange(priceRangeHover.item5?{num1:null,num2:null}:{num1:500,num2:1000})
                  setPriceRangeHover(priceRangeHover.item5?{item5:false}:{item5:true})
                  setValue(0)
                  setValueHover({})
                  setResultSearchSope(null)
                 }
                } 
                color={Color.Gary700}
                
              >{localStorage.getItem('Currency')} 500 to {localStorage.getItem('Currency')} 1000</ButtonFilter>
              <ButtonFilter 
                width={20} 
                height={20} 
                border={priceRangeHover.item6?`3px solid ${Color.Primary500}`:`1px solid ${Color.Gary100}`} 
                borderradius='100%' 
                onClick={()=>{
                  setPriceRange(priceRangeHover.item6?{num1:null,num2:null}:{num1:1000,num2:100000})
                  setPriceRangeHover(priceRangeHover.item6?{item6:false}:{item6:true})
                  setValue(0)
                  setValueHover({})
                  setResultSearchSope(null)
                 }
                } 
                color={Color.Gary700}
                
              >More {localStorage.getItem('Currency')} 1000</ButtonFilter>

              <div className="SopeSection1_Break"></div>
            </div>
            <div className="SopeSection1_Aside_Part3">
              <Label2 color={Color.Gary900}>POPULAR BRANDS</Label2>
              <div className="SopeSection1_Aside_Part3_POPULARBRANDS">
                {Array.isArray(uniqueBrands) && uniqueBrands?.map((item:any,index)=>
                  <ButtonFilter 
                    key={index}
                    width={20} 
                    height={20} 
                    border={`1px solid ${Color.Gary100}`}
                    backgroundcolor={popularBrandsHover[`${item}`]?`${Color.Primary500}`:`${Color.Gary00}`} 
                    onClick={()=>{
                      setPopularBrands(popularBrandsHover[`${item}`]?null:item)
                      setPopularBrandsHover(popularBrandsHover[`${item}`]?{[`${item}`]:false}:{[`${item}`]:true})
                      setValue(0)
                      setValueHover({})
                      setResultSearchSope(null)
                    }
                    } 
                    color={Color.Gary700}
                    Check
                  >{item}</ButtonFilter>
                )}
              </div>
              <div className="SopeSection1_Break"></div>
            </div>
            <div className="SopeSection1_Aside_Part4">
              <Label2 color={Color.Gary900} className="SopeSection1_Aside_Part4_Titel">POPULAR TAG</Label2>
              <div className="SopeSection1_Aside_Part4_Tag">
                {Array.isArray(uniqueTag) && uniqueTag?.map((item:any,index)=>
                  <ButtonFilter 
                    key={index}
                    border={`1px solid ${Color.Gary100}`}
                    backgroundcolor={tagHover[`${item}`]?`${Color.Primary500}`:`${Color.Gary00}`} 
                    onClick={()=>{
                      setTag(tagHover[`${item}`]?null:item)
                      setTagHover(tagHover[`${item}`]?{[`${item}`]:false}:{[`${item}`]:true})
                      setValue(0)
                      setValueHover({})
                      setResultSearchSope(null)
                    }
                    } 
                    title={<BodySmall400 color={tagHover[`${item}`]?Color.Gary00:Color.Gary700}>{item}</BodySmall400>}
                  ></ButtonFilter>
                )}
              </div>
            </div>
            <div className="SopeSection1_Aside_Part5">
            </div>
          </aside>

          <section className='SopeSection1_Content'>
            <div className="SopeSection1_Content_Part1">
              <Search sope></Search>
              <div className="SopeSection1_Content_Part1_Sort">
                Sort
              </div>
            </div>
            <div className="SopeSection1_Content_Part2">
              <div className="SopeSection1_Content_Part2_Left">
                <BodySmall400 color={Color.Gary600}>Active Filters:</BodySmall400>
                <div className="SopeSection1_Content_Part1_Left_ActiveFilterd">
                  
                    {category?<BodySmall400 color={Color.Gary900}>
                      {category}
                      <img onMouseEnter={()=>{setActiveFilterd({Act1:true})}} onMouseLeave={()=>setActiveFilterd({Act1:false})} onClick={()=>{setCategory(null);setCategoryHover({})}} src={activeFilterd.Act1?XAfterHover:XBefrorHover} alt="" />
                    </BodySmall400>:''}

                    {priceRange.num1 && priceRange.num2?<BodySmall400 color={Color.Gary900}>
                      {localStorage.getItem('Currency')}{priceRange.num1} to {localStorage.getItem('Currency')}{priceRange.num2}
                      <img onMouseEnter={()=>{setActiveFilterd({Act2:true})}} onMouseLeave={()=>setActiveFilterd({Act2:false})} onClick={()=>{setPriceRange({num1:null,num2:null});setPriceRangeHover({})}} src={activeFilterd.Act2?XAfterHover:XBefrorHover} alt="" />
                    </BodySmall400>:''}

                    {popularBrands?<BodySmall400 color={Color.Gary900}>
                      {popularBrands}
                      <img onMouseEnter={()=>{setActiveFilterd({Act3:true})}} onMouseLeave={()=>setActiveFilterd({Act3:false})} onClick={()=>{setPopularBrands(null);setPopularBrandsHover({})}} src={activeFilterd.Act3?XAfterHover:XBefrorHover} alt="" />
                    </BodySmall400>:''}

                    {tag?<BodySmall400 color={Color.Gary900}>
                      {tag}
                      <img onMouseEnter={()=>{setActiveFilterd({Act4:true})}} onMouseLeave={()=>setActiveFilterd({Act4:false})} onClick={()=>{setTag(null);setTagHover({})}} src={activeFilterd.Act4?XAfterHover:XBefrorHover} alt="" />
                    </BodySmall400>:''}            
                </div>
              </div>
              <div className="SopeSection1_Aside_Part2_Right">
                <BodySmall600 color={Color.Gary900}>{length}</BodySmall600>
                <BodySmall400 color={Color.Gary600}>Results found.</BodySmall400>
              </div>
            </div>
            <div className="SopeSection1_Content_Part3">
              {FindeProductToUse.length>0?Array.isArray(FindeProductToUse) && FindeProductToUse?.map((item:any)=>
                <CardProductStyle4 key={item.id} item={item}></CardProductStyle4>
              ):<div className="SopeSection1_Content_Part3_NotProduct"><BodyMedium500 color={Color.Gary600}> Not Fond Product...</BodyMedium500></div>}
            </div>
            
          <div className="SopeSection1_Content_Part4" > 
            <img src={XBefrorHover} alt="" onClick={()=>Decrement()}/>
              <div className="SopeSection1_Content_Part4_Swiper" > 
                {(length /24)>1?Array(Math.ceil(length /24)).fill(null).map((_,i) => //_ its value from the element ,i its value the index
                  <Display 
                    key={i} 
                    className='SopeSection1_Content_Part4_Button' 
                    padding={15}
                    border={`1px solid ${Color.Gary100}`} 
                    borderradius='100%' 
                    onClick={() => {
                      setValue(i * 24);
                      setValueHover({ [`id${i}`]: true });
                    }} 
                    backgroundcolor={valueHover[`id${i}`] ? Color.Primary500 : Color.Gary00}
                    >
                    <BodySmall400 color={valueHover[`id${i}`] ? Color.Gary00 : Color.Gary900}>
                      {i + 1}
                    </BodySmall400>
                  </Display>
                ):''}
              </div> 
            <img src={XAfterHover} alt="" onClick={()=>Increment()} />
           </div>
          </section>
        </Container>
    </>
  )
}
