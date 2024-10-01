import './style.scss'

//Component
import Container from '../../../Commponent/Global/Container'
import CardFeatures from '../../../Commponent/Global/Card/CardFeatures'

//Asset
import Package from '../../../Asset/Image/Component/Card/CardFeatures/Package.png'
import Trophy from '../../../Asset/Image/Component/Card/CardFeatures/Trophy.png'
import CreditCard from '../../../Asset/Image/Component/Card/CardFeatures/CreditCard.png'
import Headphones from '../../../Asset/Image/Component/Card/CardFeatures/Headphones.png'
import { Color } from '../../../Constant/Colors'

export default function HomeSection2() {
  return (
    <>
      <Container height={108} className={'HomeSection2_Parent'}>
          <Container className={'HomeSection2'} width={1320} height={108} border={`1px solid ${Color.Gary100}`} >
            <CardFeatures 
                src={Package} 
                titel={'Fasted Delivery'}
                describetion={'Delivery in 24/H'}
              />
              <div className="Break"></div>
              <CardFeatures 
                src={Trophy} 
                titel={'24 Hours Return'}
                describetion={'100% money-back guarantee'}
              />
              <div className="Break"></div>
              <CardFeatures 
                src={CreditCard} 
                titel={'Secure Payment'}
                describetion={'Your money is safe'}
              />
              <div className="Break"></div>
              <CardFeatures 
                src={Headphones} 
                titel={'Support 24/7'}
                describetion={'Live contact/message'}
              />
           </Container>
        </Container>
    </>
  )
}
