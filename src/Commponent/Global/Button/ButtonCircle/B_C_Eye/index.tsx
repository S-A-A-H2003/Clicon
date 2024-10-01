import { useState } from 'react'
import './style.scss'

//Component
import ButtonGlobal from '../../ButtonGlobal'

//Style
import { Color } from '../../../../../Constant/Colors'

//Asset
import EyeBlack from '../../../../../Asset/Image/Component/Button/EyeBlack.png'
import EyeWhite from '../../../../../Asset/Image/Component/Button/EyeWhite.png'

interface Props {
  className?:string;
  onClick?:()=>void;
}

export default function BCEye({className,onClick}:Props) {
  const [initBCEye,setInitBCEye] =useState(false)
  return (
    <>
     <ButtonGlobal
      className={className+' BCEye'}
      width={48} 
      height={48}
      backgroundcolor={initBCEye?Color.Primary500:Color.Gary00}
      borderradius={'100%'}
      onClick={onClick}
      onMouseEnter={()=>setInitBCEye(true)}
      onMouseLeave={()=>setInitBCEye(false)}
     >
      <img src={initBCEye?EyeWhite:EyeBlack} alt="" />
     </ButtonGlobal>
    </>
  )
}
