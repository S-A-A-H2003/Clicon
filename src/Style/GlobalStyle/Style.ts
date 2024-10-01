import { createGlobalStyle } from "styled-components";

interface Props {
    dir: 'ltr' | 'rtl';
}

 export const GlobalStyle = createGlobalStyle<Props>`
@import url('https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap');
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: "Public Sans", sans-serif;
    scrollbar-width: none;
}

html{
    direction:${(props)=>props.dir} ;
}
.Search_Submit{
        position: absolute;
        top: 13px;
        ${(props)=>props.dir==='rtl'?'left:13px;':'right:13px;'} 
}
.Category_Display_Tow{

    position: absolute;
    top: 65px;
    ${(props)=>props.dir==='rtl'?'right:270px;':'left:270px;'} 

}
@media screen and (max-width:900px) {
    .Category .Category_Button{
        position: absolute;
        ${(props)=>props.dir==='ltr'?'right:500px;':'left:500px;'} 
       
    }  
    .Category_Display_One{
        height: 350px;
        ${(props)=>props.dir==='ltr'?'right:400px;':'left:400px;'} 
    }



}

`