import './style.scss'

//Style
import { Color } from '../../../../Constant/Colors'

//Component
import Display from '../../Display'
import { BodyLarge600 } from '../../../../Style/Font/Typograpy';


export default function OfferInShop() {
  return (
    <>
        <Display
          className='CardProductStyle5'
          width={312}
          height={716} 
          backgroundcolor={Color.Warning300}
        >
          <div className="">
          <BodyLarge600>I am not finished yet! 😊</BodyLarge600>
          <BodyLarge600>Saeed Alaa Abu Halima</BodyLarge600>
          </div>
        </Display>
    </>
  )
}
