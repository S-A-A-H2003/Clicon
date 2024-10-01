import styled from 'styled-components'
import { Color } from '../../Constant/Colors'

interface Props {
    width?: number;      
    height?: number;        
    color?: string;        
    backgroundcolor?: string; 
    border?: string;       
    borderradius?: string; 
}

export const ButtonStyle =styled.button<Props>`
    width:${({width})=>width?width:'156'}px;
    height:${({height})=>height?height +'':'48'}px;
    color:${({color})=>color?color:Color.Gary00};
    background-color:${({backgroundcolor})=>backgroundcolor?backgroundcolor:Color.Primary500};
    border:${({border})=>border?border:'none'};
    border-radius:${({borderradius})=>borderradius?borderradius :'none'};
`