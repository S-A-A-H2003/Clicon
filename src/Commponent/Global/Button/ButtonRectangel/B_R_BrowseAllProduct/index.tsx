import './style.scss'

//Component
import ButtonGlobal from '../../ButtonGlobal'

//Conatant
import { Color } from '../../../../../Constant/Colors'


import ArrowRight from '../../../../../Asset/Image/Pages/Home/HomeSection/ArrowRight.png'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../../../../Constant/Route'
import { BodySmall600 } from '../../../../../Style/Font/Typograpy'

interface Props {
  color?:string;
  children?:React.ReactNode;
}

export default function BRBrowseAllProduct({color,children}:Props) {
  const navigate =useNavigate()
  return (
    <>
      <ButtonGlobal
        className={'BRBrowseAllProduct'}
        backgroundcolor={Color.Gary00}
        onClick={()=>navigate(PATH.SHOP)}
        width={188}
      >
          <BodySmall600 color={color?color:Color.Secondary500}>Browse All Product</BodySmall600>
          {children?children:<img src={ArrowRight} alt="" />}
      </ButtonGlobal>
    </>
  )
}
