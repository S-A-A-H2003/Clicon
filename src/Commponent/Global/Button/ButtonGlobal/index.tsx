import './style.scss'

//Style
import { ButtonStyle } from '../../../../Style/StyleComponent/ButtonStyle'

interface Props {
  className?:string;
  width?:number;
  height?:number;
  color?:string;
  backgroundcolor?:string;
  border?:string;
  borderradius?:string;
  type?:"button" | "submit" | "reset" | undefined;
  children?:React.ReactNode;
  onClick?:React.MouseEventHandler<HTMLButtonElement>;
  onMouseEnter?:React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?:React.MouseEventHandler<HTMLButtonElement>;
}

export default function ButtonGlobal({className,width,height,color,backgroundcolor,border,borderradius,type,children,onClick,onMouseEnter,onMouseLeave}:Props) {
  return (
    <>
      <ButtonStyle
        className={'Button ' + className}
        width={width}
        height={height}
        color={color}
        backgroundcolor={backgroundcolor}
        border={border}
        borderradius={borderradius}
        type={type}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
       {children}
      </ButtonStyle>
    </>
  )
}
