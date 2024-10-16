import './style.scss'

//Style
import { DisplayStyle } from '../../../Style/StyleComponent/DisplayStyle'

interface Props {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
  backgroundcolor?: string;
  padding?:number;
  border?: string;
  borderradius?: string;
  type?: "button" | "submit" | "reset" | undefined;
  children?: React.ReactNode;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  onClick?:()=>void;
}

export default function Display({className,width,height,color,backgroundcolor,border,borderradius,padding,children,onMouseEnter,onMouseLeave,onClick}:Props) {
  return (
    <>
      <DisplayStyle
       className={'Display ' + className}
       width={width}
       height={height}
       color={color}
       backgroundcolor={backgroundcolor}
       padding={padding}
       border={border}
       borderradius={borderradius}
       onMouseEnter={onMouseEnter}
       onMouseLeave={onMouseLeave}
       onClick={onClick}
      >
      {children}
      </DisplayStyle>
    </>
  )
}
