import './style.scss'

//Component
import Container from '../../../Commponent/Global/Container'
import { useCategoryContext } from '../../../Context/Category'
import CardCategory from '../../../Commponent/Global/Card/CardCategory'
import { H1 } from '../../../Style/Font/Typograpy'
import { Color } from '../../../Constant/Colors'

export default function HomeSection4() {

  const {Category}=useCategoryContext()

  return (
    <>
        <Container className={'HomeSection4'} height={316}>
          <div className="HomeSection4_Top">
            <H1 color={Color.Gary900}>Shop with Categorys</H1>
          </div>

          <div className='HomeSection4_Bottom'>
            {Array.isArray(Category)&&Category?.map((item:any)=>
              <CardCategory item={item}></CardCategory>
            )}
          </div>
        </Container>
    </>
  )
}
