import './style.scss'

//Style
import { BodySmall600 } from '../../../../../Style/Font/Typograpy'

//Conatant
import { useState } from 'react';
import { Color } from '../../../../../Constant/Colors';
import ContainerText from '../../../ContainerText';

interface Props {
  onClick?:()=>void;
  children:React.ReactNode;
  item:{
    productNames:string;
  }
}



export default function BRProducts({onClick,item}:Props) {
  const [value,setValue]=useState<boolean>(false)
  const HandelButton =()=>{
    value?setValue(false):setValue(true)
 }
  return (
    <>
      <ContainerText
        className={'BRProducts'}
        onClick={onClick}
        backgroundcolor={Color.Gary00}
      >
        <BodySmall600 className={value?'Active':''} color={value?Color.Gary900:Color.Gary600}  onClick={()=>HandelButton()} >{item.productNames}</BodySmall600>
      </ContainerText>
    </>
  )
}
