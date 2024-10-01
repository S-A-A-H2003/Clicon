import styled from 'styled-components';
import { Color } from '../../Constant/Colors'

interface Props {
   fontsize?: number;
   color?: string;
   backgroundcolor?: string;
   fontweight?: string;
 }

export const Display1=styled.p<Props>`
   font-size: ${({fontsize})=>fontsize?fontsize:'64'}px;
   color:${({color})=>color?color:Color.Gary00};
   background-color: ${({backgroundcolor})=>backgroundcolor?backgroundcolor:''};
`;
export const Display2=styled.p<Props>`
   font-size: ${({fontsize})=>fontsize?fontsize:'56'}px;
   color:${({color})=>color?color:Color.Gary00};
   background-color: ${({backgroundcolor})=>backgroundcolor?backgroundcolor:''};
`;
export const Display3=styled.p<Props>`
   font-size: ${({fontsize})=>fontsize?fontsize:'48'}px;
   color:${({color})=>color?color:Color.Gary00};
   background-color: ${({backgroundcolor})=>backgroundcolor?backgroundcolor:''};
`;
export const Display4=styled.p<Props>`
   font-size: ${({fontsize})=>fontsize?fontsize:'40'}px;
   color:${({color})=>color?color:Color.Gary00};
   background-color: ${({backgroundcolor})=>backgroundcolor?backgroundcolor:''};
`;
export const Display5=styled.p<Props>`
   font-size: ${({fontsize})=>fontsize?fontsize:'36'}px;
   color:${({color})=>color?color:Color.Gary00};
   background-color: ${({backgroundcolor})=>backgroundcolor?backgroundcolor:''};
`;
////////////////////////////////////////////////////////////////////
export const H1=styled.h1<Props>`
   font-size: ${({fontsize})=>fontsize?fontsize:'32'}px;
   color:${({color})=>color?color:Color.Gary00};
   background-color: ${({backgroundcolor})=>backgroundcolor?backgroundcolor:''};
`;
export const H2=styled.h2<Props>`
   font-size: ${({fontsize})=>fontsize?fontsize:'28'}px;
   color:${({color})=>color?color:Color.Gary00};
   background-color: ${({backgroundcolor})=>backgroundcolor?backgroundcolor:''};
`;
export const H3=styled.h3<Props>`
   font-size: ${({fontsize})=>fontsize?fontsize:'24'}px;
   color:${({color})=>color?color:Color.Gary00};
   background-color: ${({backgroundcolor})=>backgroundcolor?backgroundcolor:''};
`;
export const H4=styled.h4<Props>`
   font-size: ${({fontsize})=>fontsize?fontsize:'16'}px;
   color:${({color})=>color?color:Color.Gary00};
   background-color: ${({backgroundcolor})=>backgroundcolor?backgroundcolor:''};
   font-weight: ${({fontweight})=>fontweight?fontweight:'bold'};
`;
export const H5=styled.h5<Props>`
   font-size: ${({fontsize})=>fontsize?fontsize:'14'}px;
   color:${({color})=>color?color:Color.Gary00};
   background-color: ${({backgroundcolor})=>backgroundcolor?backgroundcolor:''};
   font-weight: ${({fontweight})=>fontweight?fontweight:'bold'};
`;
//////////////////////////////////////////////////////////////////////
export const Label1=styled.p<Props>`
   font-size: ${({fontsize})=>fontsize?fontsize:'18'}px;
   color:${({color})=>color?color:Color.Gary00};
   background-color: ${({backgroundcolor})=>backgroundcolor?backgroundcolor:''};
   font-weight: ${({fontweight})=>fontweight?fontweight:'medium'};
`;
export const Label2=styled.p<Props>`
   font-size: ${({fontsize})=>fontsize?fontsize:'16'}px;
   color:${({color})=>color?color:Color.Gary00};
   background-color: ${({backgroundcolor})=>backgroundcolor?backgroundcolor:''};
   font-weight: ${({fontweight})=>fontweight?fontweight:'medium'};
`;
export const Label3=styled.p<Props>`
   font-size: ${({fontsize})=>fontsize?fontsize:'14'}px;
   color:${({color})=>color?color:Color.Gary00};
   background-color: ${({backgroundcolor})=>backgroundcolor?backgroundcolor:''};
   font-weight: ${({fontweight})=>fontweight?fontweight:'medium'};
`;
export const Label4=styled.p<Props>`
   font-size: ${({fontsize})=>fontsize?fontsize:'12'}px;
   color:${({color})=>color?color:Color.Gary00};
   background-color: ${({backgroundcolor})=>backgroundcolor?backgroundcolor:''};
   font-weight: ${({fontweight})=>fontweight?fontweight:'medium'};
`;
export const Label5=styled.p<Props>`
   font-size: ${({fontsize})=>fontsize?fontsize:'11'}px;
   color:${({color})=>color?color:Color.Gary00};
   background-color: ${({backgroundcolor})=>backgroundcolor?backgroundcolor:''};
   font-weight: ${({fontweight})=>fontweight?fontweight:'medium'};
`;
//////////////////////////////////////////////////////////////////////
export const BodyXXL400=styled.p<Props>`
   font-size: ${({fontsize})=>fontsize?fontsize:'24'}px;
   color:${({color})=>color?color:Color.Gary00};
   background-color: ${({backgroundcolor})=>backgroundcolor?backgroundcolor:''};
   font-weight: ${({fontweight})=>fontweight?fontweight:'400'};
`;
export const BodyXL400=styled.p<Props>`
   font-size: ${({fontsize})=>fontsize?fontsize:'20'}px;
   color:${({color})=>color?color:Color.Gary00};
   background-color: ${({backgroundcolor})=>backgroundcolor?backgroundcolor:''};
   font-weight: ${({fontweight})=>fontweight?fontweight:'400'};
`;
export const BodyXL500=styled.p<Props>`
   font-size: ${({fontsize})=>fontsize?fontsize:'20'}px;
   color:${({color})=>color?color:Color.Gary00};
   background-color: ${({backgroundcolor})=>backgroundcolor?backgroundcolor:''};
   font-weight: ${({fontweight})=>fontweight?fontweight:'500'};
`;
export const BodyXL600=styled.p<Props>`
font-size: ${({fontsize})=>fontsize?fontsize:'20'}px;
color:${({color})=>color?color:Color.Gary00};
background-color: ${({backgroundcolor})=>backgroundcolor?backgroundcolor:''};
font-weight: ${({fontweight})=>fontweight?fontweight:'600'};
`
;
export const BodyLarge400=styled.p<Props>`
font-size: ${({fontsize})=>fontsize?fontsize:'18'}px;
color:${({color})=>color?color:Color.Gary00};
background-color: ${({backgroundcolor})=>backgroundcolor?backgroundcolor:''};
font-weight: ${({fontweight})=>fontweight?fontweight:'400'};
`;
;
export const BodyLarge500=styled.p<Props>`
font-size: ${({fontsize})=>fontsize?fontsize:'18'}px;
color:${({color})=>color?color:Color.Gary00};
background-color: ${({backgroundcolor})=>backgroundcolor?backgroundcolor:''};
font-weight: ${({fontweight})=>fontweight?fontweight:'500'};
`;
;
export const BodyLarge600=styled.p<Props>`
font-size: ${({fontsize})=>fontsize?fontsize:'18'}px;
color:${({color})=>color?color:Color.Gary00};
background-color: ${({backgroundcolor})=>backgroundcolor?backgroundcolor:''};
font-weight: ${({fontweight})=>fontweight?fontweight:'600'};
`;
export const BodyMedium400=styled.p<Props>`
font-size: ${({fontsize})=>fontsize?fontsize:'16'}px;
color:${({color})=>color?color:Color.Gary00};
background-color: ${({backgroundcolor})=>backgroundcolor?backgroundcolor:''};
font-weight: ${({fontweight})=>fontweight?fontweight:'400'};
`;
;
export const BodyMedium500=styled.p<Props>`
font-size: ${({fontsize})=>fontsize?fontsize:'16'}px;
color:${({color})=>color?color:Color.Gary00};
background-color: ${({backgroundcolor})=>backgroundcolor?backgroundcolor:''};
font-weight: ${({fontweight})=>fontweight?fontweight:'500'};
`;
;
export const BodyMedium600=styled.p<Props>`
font-size: ${({fontsize})=>fontsize?fontsize:'16'}px;
color:${({color})=>color?color:Color.Gary00};background-color: ${({backgroundcolor})=>backgroundcolor?backgroundcolor:''};
font-weight: ${({fontweight})=>fontweight?fontweight:'600'};
`;
export const BodySmall400=styled.p<Props>`
font-size: ${({fontsize})=>fontsize?fontsize:'14'}px;
color:${({color})=>color?color:Color.Gary00};
background-color: ${({backgroundcolor})=>backgroundcolor?backgroundcolor:''};
font-weight: ${({fontweight})=>fontweight?fontweight:'400'};
`;
;
export const BodySmall500=styled.p<Props>`
font-size: ${({fontsize})=>fontsize?fontsize:'14'}px;
color:${({color})=>color?color:Color.Gary00};
background-color: ${({backgroundcolor})=>backgroundcolor?backgroundcolor:''};
font-weight: ${({fontweight})=>fontweight?fontweight:'500'};
`;
;
export const BodySmall600=styled.p<Props>`
font-size: ${({fontsize})=>fontsize?fontsize:'14'}px;
color:${({color})=>color?color:Color.Gary00};
background-color: ${({backgroundcolor})=>backgroundcolor?backgroundcolor:''};
font-weight: ${({fontweight})=>fontweight?fontweight:'600'};
`;
export const BodyTiny400=styled.p<Props>`
font-size: ${({fontsize})=>fontsize?fontsize:'12'}px;
color:${({color})=>color?color:Color.Gary00};
background-color: ${({backgroundcolor})=>backgroundcolor?backgroundcolor:''};
font-weight: ${({fontweight})=>fontweight?fontweight:'400'};
`;
;
export const BodyTiny500=styled.p<Props>`
font-size: ${({fontsize})=>fontsize?fontsize:'12'}px;
color:${({color})=>color?color:Color.Gary00};
background-color: ${({backgroundcolor})=>backgroundcolor?backgroundcolor:''};
font-weight: ${({fontweight})=>fontweight?fontweight:'500'};
`;
;
export const BodyTiny600=styled.p<Props>`
font-size: ${({fontsize})=>fontsize?fontsize:'12'}px;
color:${({color})=>color?color:Color.Gary00};
background-color: ${({backgroundcolor})=>backgroundcolor?backgroundcolor:''};
font-weight: ${({fontweight})=>fontweight?fontweight:'600'};
`;
export const BodyXS400=styled.p<Props>`
font-size: ${({fontsize})=>fontsize?fontsize:'11'}px;
color:${({color})=>color?color:Color.Gary00};
background-color: ${({backgroundcolor})=>backgroundcolor?backgroundcolor:''};
font-weight: ${({fontweight})=>fontweight?fontweight:'400'};
`;
;
export const BodyXS500=styled.p<Props>`
font-size: ${({fontsize})=>fontsize?fontsize:'11'}px;
color:${({color})=>color?color:Color.Gary00};
background-color: ${({backgroundcolor})=>backgroundcolor?backgroundcolor:''};
font-weight: ${({fontweight})=>fontweight?fontweight:'500'};
`;
;
export const BodyXS600=styled.p<Props>`
font-size: ${({fontsize})=>fontsize?fontsize:'11'}px;
color:${({color})=>color?color:Color.Gary00};
background-color: ${({backgroundcolor})=>backgroundcolor?backgroundcolor:''};
font-weight: ${({fontweight})=>fontweight?fontweight:'600'};
`;

