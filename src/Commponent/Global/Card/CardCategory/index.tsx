import './style.scss'

//Style
import { Color } from '../../../../Constant/Colors'
import { BodyMedium500 } from '../../../../Style/Font/Typograpy'

//Component
import Display from '../../Display'

interface Props {
   item:{
    Picture:string;
    name: string;
   } 
}

export default function CardCategory({item}:Props) {

  return (
    <>  
        <Display
          className='CardStyleCategory'
          width={205}
          height={236} 
          border={`1px solid ${Color.Gary100}`} 
        >
         
          <img src={item.Picture} alt="" className='CardStyleCategory_Img' />
          <BodyMedium500 color={Color.Gary900}>
            {item.name}
          </BodyMedium500>
        </Display>
    </>
  )
}
