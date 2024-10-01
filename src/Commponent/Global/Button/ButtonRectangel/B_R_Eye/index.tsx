import './style.scss'
import { useState } from 'react'

//Component
import ButtonGlobal from '../../ButtonGlobal'

//Style
import { Color } from '../../../../../Constant/Colors'

//Asset
import EyeBlack from '../../../../../Asset/Image/Component/Button/EyeBlack.png'
import EyeWhite from '../../../../../Asset/Image/Component/Button/EyeWhite.png'

interface Props {
  className?:string;
  onClick?:React.ReactEventHandler
}

export default function BREye({className,onClick}:Props) {
  const [initBCEye,setInitBCEye] =useState(false)
  return (
    <>
     <ButtonGlobal
      className={className+' BREye'}
      width={48} 
      height={48}
      backgroundcolor={initBCEye?Color.Primary500:Color.Primary100}
      borderradius={'2px'}
      onClick={onClick}
      onMouseEnter={()=>setInitBCEye(true)}
      onMouseLeave={()=>setInitBCEye(false)}
     >
      <img src={initBCEye?EyeWhite:EyeBlack} alt="" />
     </ButtonGlobal>
    </>
  )
}
