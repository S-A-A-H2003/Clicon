import './style.scss'

//Style
import { ContainerTextStyle } from '../../../Style/StyleComponent/ContainerTextStyle'

interface Props {
  className?:string;
  color?:string;
  backgroundcolor?:string;
  children?:React.ReactNode;
  onClick?:()=>void;
}

export default function ContainerText({className,color,backgroundcolor,children,onClick}:Props) {
  return (
    <>
      <ContainerTextStyle
        className={'ContainarText ' + className}
        backgroundcolor={backgroundcolor}
        color={color}
        onClick={onClick}
      >
       {children}
      </ContainerTextStyle>
    </>
  )
}
