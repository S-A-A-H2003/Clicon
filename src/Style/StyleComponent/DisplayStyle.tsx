import styled from 'styled-components'

interface Props {
    width?: number;      
    height?: number;        
    color?: string;        
    backgroundcolor?: string; 
    border?: string;       
    borderradius?: string; 
}

export const DisplayStyle =styled.div<Props>`
    width:${({width})=>width?width:''}px;
    height:${({height})=>height?height +'':''}px;
    color:${({color})=>color?color:''};
    background-color:${({backgroundcolor})=>backgroundcolor?backgroundcolor:''};
    border:${({border})=>border?border:''};
    border-radius:${({borderradius})=>borderradius?borderradius :''};
`