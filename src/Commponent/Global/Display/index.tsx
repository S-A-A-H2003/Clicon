import './style.scss'

//Style
import { DisplayStyle } from '../../../Style/StyleComponent/DisplayStyle'

interface Props {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
  backgroundcolor?: string;
  border?: string;
  borderradius?: string;
  type?: "button" | "submit" | "reset" | undefined;
  children?: React.ReactNode;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
}

export default function Display({className,width,height,color,backgroundcolor,border,borderradius,children,onMouseEnter,onMouseLeave}:Props) {
  return (
    <>
      <DisplayStyle
       className={'Display ' + className}
       width={width}
       height={height}
       color={color}
       backgroundcolor={backgroundcolor}
       border={border}
       borderradius={borderradius}
       onMouseEnter={onMouseEnter}
       onMouseLeave={onMouseLeave}
      >
      {children}
      </DisplayStyle>
    </>
  )
}
