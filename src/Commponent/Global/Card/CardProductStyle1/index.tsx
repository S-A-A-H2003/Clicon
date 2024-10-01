import './style.scss'

//Style
import { Color } from '../../../../Constant/Colors'
import { BodySmall400, BodySmall600 } from '../../../../Style/Font/Typograpy'

//Component
import Container from '../../Container'

interface Props {
  className?:string;
  onClick?:React.MouseEventHandler<HTMLButtonElement>;
  item:{
    productNames:string;
    price:number;
    priceBefor:number;
    pictures:{
      mainPicture:string;
    }
  };
}

export default function CardProductStyle1({className,item,onClick}:Props) {
  return (
    <>
      <Container 
        className={className +' CardS1'}
        width={312}
        height={104}
        border={`1px solid ${Color.Gary100}`}
        onClick={onClick}
      >
        <img src={item.pictures.mainPicture} alt="" />
        <div className='RightSaid' >
          <BodySmall400 color={Color.Gary900}>
            {item.productNames}
          </BodySmall400>

          <div className="Price">
            <BodySmall600 color={Color.Secondary500}>
              ${item.price}
            </BodySmall600>

            <BodySmall600 color={Color.Gary400}>
              <del>
                ${item.priceBefor}
              </del>
            </BodySmall600>
          </div>
        </div>
      </Container>
    </>
  )
}
