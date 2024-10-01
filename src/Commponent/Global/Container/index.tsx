import './style.scss'

//Style
import { ContainerStyle } from '../../../Style/StyleComponent/ContainerStyle';


interface Props {
  className?:string;
  width?:number;
  height?:number;
  backgroundcolor?:string;
  children?:React.ReactNode;
  border?:string;
  padding?:string;
  onClick?:React.MouseEventHandler<HTMLDivElement>;
  onMouseEnter?:React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?:React.MouseEventHandler<HTMLDivElement>;
}

export default function Container({className,width,height,backgroundcolor,children,border,padding,onClick,onMouseEnter,onMouseLeave}:Props) {
  return (
    <>
      <ContainerStyle
        className={'Containar ' + className}
        width={width}
        height={height}
        backgroundcolor={backgroundcolor}
        border={border}
        padding={padding}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
       {children}
      </ContainerStyle>
    </>
  )
}
