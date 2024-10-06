import { BodySmall400 } from '../../../../Style/Font/Typograpy';
import Display from '../../Display';
import './style.scss'
import CheckBox from '../../../../Asset/Image/Component/Button/Check.png'

interface Props{
  width?:number;
  height?:number;
  border?:string;
  borderradius?:string;
  backgroundcolor?:string;
  onClick?:()=>void;
  color?:string;
  children?:React.ReactNode;
  Check?:boolean;
}

export default function ButtonFilter({width,height,border,borderradius,onClick,color,children,backgroundcolor,Check}:Props) {
  return (
     <div className='ButtonFilter'>
        <Display 
          width={width} 
          height={height} 
          border={border} 
          borderradius={borderradius} 
          backgroundcolor={backgroundcolor}
          onClick={onClick} 
        >{Check?<img src={CheckBox} alt="" />:''}</Display>
        <BodySmall400 color={color}> {children}</BodySmall400>
      </div>
  )
}
