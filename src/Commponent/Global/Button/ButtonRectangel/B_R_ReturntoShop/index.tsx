import './style.scss'

//Component
import ButtonGlobal from '../../ButtonGlobal'

//Style
import { H5 } from '../../../../../Style/Font/Typograpy'

//Conatant
import { Color } from '../../../../../Constant/Colors'
import { PATH } from '../../../../../Constant/Route'

//Asset
import ArrowLeftBlue from '../../../../../Asset/Image/Component/Button/ArrowLeftBlue.png'

//Librari
import { useNavigate } from 'react-router-dom'

export default function BRReturntoShop() {
 const navigate = useNavigate()
  return (
    <>
      <ButtonGlobal
        className={'BRReturntoShop'}
        width={203}
        height={48}
        backgroundcolor={Color.Gary00}
        border={`2px solid ${Color.Secondary500}`}
        onClick={()=>navigate(PATH.SHOP)}
      >
        <img src={ArrowLeftBlue} alt=""/>
        <H5 color={Color.Secondary500}>RETURN TO SHOP</H5>
      </ButtonGlobal>
    </>
  )
}
