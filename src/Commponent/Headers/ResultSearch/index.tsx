import './style.scss'

//Component
import Container from '../../Global/Container'
import CardProductStyle1 from '../../Global/Card/CardProductStyle1'

//Context
import { useResultContext } from '../../../Context/ResultSearch'

//Asset
import Clear from '../../../Asset/Image/Component/ResultSearch/X.png'

export default function ResultSearch() {
  const {resultSearch,setResultSearch}=useResultContext()
  return (
    <>
     <Container  width={1200} className={'ResultSearch'}>
       <img src={Clear} alt='Clear' onClick={()=>setResultSearch(null)} className='ResultSearch_img_Clear'/>
       <div className="ResultSearch_Card">
        {Array.isArray(resultSearch)?resultSearch?.map((item)=>
          <CardProductStyle1 item={item}></CardProductStyle1>
          ):resultSearch}
       </div>
     </Container>
    </>
  )
}

