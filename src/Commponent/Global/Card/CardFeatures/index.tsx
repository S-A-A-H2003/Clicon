import './style.scss'

//Style
import { Color } from '../../../../Constant/Colors'
import { BodySmall400, Label3 } from '../../../../Style/Font/Typograpy'

//Component
import Display from '../../Display'

interface Props {
  src?:string;
  titel?:string;
  describetion?:string;
}

export default function CardFeatures({src,titel,describetion}:Props) {

  return (
    <>  
        <Display
          className='CardFeatures'
          width={280}
          height={76} 
        >
          <div className='CardFeatures_Left'>
              <img src={src} alt="" />
          </div>
          <div className='CardFeatures_Right'>
              <Label3 color={Color.Gary900}>{titel}</Label3>
              <BodySmall400 color={Color.Gary600}>{describetion}</BodySmall400>
          </div>
        </Display>
    </>
  )
}
