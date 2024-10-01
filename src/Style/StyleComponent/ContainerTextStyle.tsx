import styled from 'styled-components'
import { Color } from '../../Constant/Colors'

interface Props {      
  color?: string;        
  backgroundcolor?: string; 
}

export const ContainerTextStyle = styled.div<Props>`
  color:${({color})=>color?color:Color.Gary00}
  background-color:${({backgroundcolor})=>backgroundcolor?backgroundcolor:Color.Gary00};
`