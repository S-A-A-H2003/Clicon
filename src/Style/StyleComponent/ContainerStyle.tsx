import styled from 'styled-components'
import { Color } from '../../Constant/Colors'

interface Props {
  width?: number;      
  height?: number;              
  backgroundcolor?: string; 
  border?: string;       
  borderradius?: string; 
  padding?:string;
}

export const ContainerStyle = styled.div<Props>`
  ${({width})=>width?'width:'+width+'px':'min-width:100%'};
  min-height:${({height})=>height?height +'px':'100vh'};
  background-color:${({backgroundcolor})=>backgroundcolor?backgroundcolor:Color.Gary00};
  border:${({border})=>border?border:''};
  padding:${({padding})=>padding?padding+'px':''};
`