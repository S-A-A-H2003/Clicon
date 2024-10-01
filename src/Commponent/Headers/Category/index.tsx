import './style.scss'
import { useState } from 'react'

//Component
import ButtonGlobal from '../../Global/Button/ButtonGlobal'
import Container from '../../Global/Container'
import CardProductStyle1 from '../../Global/Card/CardProductStyle1'
import Banner from '../../Global/Offers/Banner'

//Asset
import ArrowDown from '../../../Asset/Image/Component/Category/ArrowDown.png'
import ArrowUp from '../../../Asset/Image/Component/Category/ArrowUp.png'
import CaretLeft from '../../../Asset/Image/Component/Category/CaretLeft.png'
import Check from '../../../Asset/Image/Component/Category/Check.png'
import CaretRight from '../../../Asset/Image/Component/Category/CaretRight.png'

//Style
import { BodyMedium600, BodySmall400, BodySmall500 } from '../../../Style/Font/Typograpy'

//Constant
import { Color } from '../../../Constant/Colors'

//Context
import { useProductsContext } from '../../../Context/Products'

//Librari
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useCategoryContext } from '../../../Context/Category'

interface Props {
  className?:string;
}

export default function Category({className}:Props) {
////////////////Fetch Data
const {Category}=useCategoryContext()
const {Products}=useProductsContext()
///////////////Proccess On Data
const [categoryName,setCategoryName] =useState<any>()
const [itemName,setItemName] =useState<any>()
const NewProductsBasedonCategory=Products?.filter((item:any)=>item.category===categoryName)
const NewProductsBasedonItems=Products?.filter((item:any)=>item.items===itemName)
const BestDiscont=NewProductsBasedonItems?.filter((item:any)=>item.offer).slice(0,1)

///////////////
const [isActiveButton,setIsActiveButton] =useState<any>(false)
const [isActiveButtonCategory,setIsActiveButtonCategory] =useState<any>({})
const [initValueButtonCategory,setInitValueButtonCategory] =useState<any>(false)//init to isActiveButtonCategory 
/////////////////
const [isActiveButtonProducts,setIsActiveButtonProducts] =useState<any>({})
const [initValueButtonProducts,setInitValueButtonProducts] =useState<any>(false)//init to isActiveButtonProducts
////////////////
const navigate =useNavigate()
const {i18n,t}=useTranslation()
  return (
    <>
      <div className={className +" Category"}>
          <ButtonGlobal
            className={'Category_Button'}
            width={155}
            height={48}
            backgroundcolor={isActiveButton?Color.Primary500:Color.Gary50}
            onClick={()=>setIsActiveButton(isActiveButton?false:true)}
          >
            <BodySmall500 color={isActiveButton?Color.Gary00:Color.Gary900}>{t('All Category')}</BodySmall500>
            <img src={isActiveButton?ArrowUp:ArrowDown} alt="" />
          </ButtonGlobal>

          {isActiveButton?/////////////////////////////////Display One
            <Container
             className="Category_Display_One" 
             height={400}
             border={`1px solid ${Color.Gary100}`}
            >
              {Array.isArray(Category)&&Category?.map((item)=> 
              <BodySmall400 
               className={isActiveButtonCategory[`Category${item.id}`]?'Category ActivCategoryTrue':'Category ActivCategoryFalse'}
               color={isActiveButtonCategory[`Category${item.id}`]?Color.Primary500:Color.Gary600}
               onClick={()=>{
                setIsActiveButtonCategory(initValueButtonCategory?{[`Category${item.id}`]:false}:{[`Category${item.id}`]:true})
                setInitValueButtonCategory(initValueButtonCategory?false:true)
                setCategoryName(item.name)
               }}
              >
                {item.name}
                {isActiveButtonCategory[`Category${item.id}`]?<img src={Check} alt="" />:''}
                {i18n.language==='ar'?<img src={CaretLeft} alt="" className='CaretRightCategory'/>:<img src={CaretRight} alt="" className='CaretRightCategory'/>}
              </BodySmall400>
              )}
            </Container>:''}

          {initValueButtonCategory&&isActiveButton?//////////////////////////////Display Tow
            <Container
              className="Category_Display_Tow"
              width={900}
              height={400}
              border={`1px solid ${Color.Gary100}`}
             
            >
              <div className="Category_Display_Tow_Part1">
                <BodySmall400 color={Color.Gary600} className='MainHeader'>{t('All')}</BodySmall400>
                {Array.isArray(NewProductsBasedonCategory)&&NewProductsBasedonCategory?.map((item)=>
                  <BodySmall400
                    className={isActiveButtonProducts[`Products${item.id}`]?'Products ActivProductsTrue':'Products ActivProductsFalse'}
                    color={isActiveButtonProducts[`Products${item.id}`]?Color.Primary500:Color.Gary600}
                    onClick={()=>{
                    setIsActiveButtonProducts(initValueButtonProducts?{[`Products${item.id}`]:false}:{[`Products${item.id}`]:true})
                    setInitValueButtonProducts(initValueButtonProducts?false:true)
                    setItemName(item.items)
                    }}
                  >
                  {item.items}
                  {isActiveButtonProducts[`Products${item.id}`]?<img src={Check} alt="" />:''}
                  {i18n.language==='ar'?<img src={CaretLeft} alt="" className='CaretRightProducts'/>:<img src={CaretRight} alt="" className='CaretRightProducts'/>}
                  </BodySmall400>
                )}
              </div>
              <div className="Category_Display_Tow_Part2">
                <BodyMedium600 color={Color.Gary900}>{t('FEATURED PRODUCTS')}</BodyMedium600>
                  {Array.isArray(NewProductsBasedonItems)&&NewProductsBasedonItems?.map((item)=>
                      <CardProductStyle1 
                        className={'Category_Display_Tow_Part2_Card'}
                        item={item}
                        onClick={()=>navigate(`/ProductDetail/${item.id}`)}
                      ></CardProductStyle1>
                    )}
              </div>
              <div className="Category_Display_Tow_Part3">
              {Array.isArray(BestDiscont)&&BestDiscont?.map((item)=>
                      <Banner 
                        className={'Category_Display_Tow_Part3_Banner'}
                        item={item}
                      ></Banner>
                    )}
              </div>
            </Container>:''}
      </div>   
    </>
  )
}
