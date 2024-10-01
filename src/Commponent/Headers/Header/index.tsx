import './style.scss'
import  { useEffect, useState } from 'react'

//Component
import ContainerText from '../../Global/ContainerText'
import Container from '../../Global/Container'
import SocialMediaIcon from '../SocialMediaIcon'
import ButtonLanguage from '../../Global/Button/ButtonLanguage'
import ButtonCurrency from '../../Global/Button/ButtonCurrency'
import CartIcon from '../CartIcon'
import WishListIcon from '../WishListIcon'
import UserIcon from '../UserIcon'
import Search from '../Search'
import Category from '../Category'

//Style
import { Color } from '../../../Constant/Colors'
import {BodyLarge400, BodySmall400} from '../../../Style/Font/Typograpy'

//Asset
import Logo from '../../../Asset/Image/Global/Logo/Logo.png'
import Phone from '../../../Asset/Image/Component/Header/PhoneCall.png'
import Location from '../../../Asset/Image/Component/Header/MapPinLine.png'
import Info from '../../../Asset/Image/Component/Header/Info.png'
import HeadPhone from '../../../Asset/Image/Component/Header/Headphones.png'
import Arrows from '../../../Asset/Image/Component/Header/ArrowsCounterClockwise.png'
import ListIcon from '../../../Asset/Image/Component/Header/List.png'
import CanselIcon from '../../../Asset/Image/Component/Header/X.png'

//Constant
import { PATH } from '../../../Constant/Route'


//Librari
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Header() {
  const {t}=useTranslation()
  const [changeClassList, setChangeClassList] = useState(false);
  const [isScrolled,setIsScrolled]=useState(false)
  useEffect(() => {
     const handelScroll =()=>{ setIsScrolled(window.scrollY>140)}
     window.addEventListener('scroll',handelScroll)
     return()=>{window.removeEventListener('scroll',handelScroll)}
    }
  , []);
  
  return (
    <>
      <Container backgroundcolor={Color.Secondary700} height={140} className={isScrolled?'Scrolled Header':'Header'}>

        <div className="Part_One">

          <div className="Part_One_Right_Side">
             <ContainerText color={Color.Gary00}>
                <BodySmall400>{t('Welcome to Clicon online eCommerce store.')}</BodySmall400>
             </ContainerText>
          </div>

          <div className="Part_One_Left_Side">
            <div className="Part_One_Left_Side_Part_1"> 
              <ContainerText className="Part_One_Left_Side_Part_1_1"><BodySmall400>{t('Follow us:')}</BodySmall400></ContainerText>
              <SocialMediaIcon className="Part_One_Left_Side_Part_1_2"></SocialMediaIcon>
            </div>

            <div className="breack"></div>

            <div className="Part_One_Left_Side_Part_2"> 
              <ButtonLanguage className={"Part_One_Left_Side_Part_2_3"}></ButtonLanguage>
              <ButtonCurrency className={"Part_One_Left_Side_Part_2_4"}></ButtonCurrency>
            </div>
          </div>
        </div>

        <div className="Part_Tow">
          <div className="Part_Tow_Logo">
           <NavLink to={PATH.HOME}><img src={Logo} alt="Clicon" /></NavLink> 
          </div>
          <div className="Part_Tow_Search">
            <Search></Search>
          </div>
          <div className="Part_Tow_Data">
            <CartIcon></CartIcon>
            <WishListIcon></WishListIcon>
            <UserIcon></UserIcon>
          </div>
        </div>

        <Container height={80} className="Part_Three">
          <img src={ListIcon} alt="List" onClick={()=>setChangeClassList(changeClassList?false:true)} className='List' />
          <div className={changeClassList?"Part_Three_List_Responsiv Part_Three_List":"Part_Three_List"}>
              <Category className={'Part_Three_List_Category'}></Category>
              <NavLink to={PATH.TRACKORDER}>
                <img src={Location} alt="" />
                <BodySmall400 color={Color.Gary600}>{t('Track Order')}</BodySmall400>
              </NavLink>
              <NavLink to={PATH.COMPARE}>
                <img src={Arrows} alt="" />
                <BodySmall400 color={Color.Gary600}>{t('Compare')}</BodySmall400>
              </NavLink>
              <NavLink to={PATH.CUSTOMERSUPPORT}>
                <img src={HeadPhone} alt="" />
                <BodySmall400 color={Color.Gary600}>{t('Customer Support')}</BodySmall400> 
              </NavLink>
              <NavLink to={PATH.ABOUTUS}>
                <img src={Info} alt="" />
                <BodySmall400 color={Color.Gary600}>{t('Need Help')}</BodySmall400>
              </NavLink>
              <img src={CanselIcon} alt="Cansel" onClick={()=>setChangeClassList(false)} className='CanselIcon' />
          </div>
          <div className="Part_Three_Phone">
            <img src={Phone} alt="Phone" />
            <BodyLarge400 color={Color.Gary900}>+1-202-555-0104</BodyLarge400>
          </div>
        </Container>
      </Container>
    </>
  )
}
