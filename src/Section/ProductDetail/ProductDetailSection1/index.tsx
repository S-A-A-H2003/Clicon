import './style.scss'

//Component
import Container from '../../../Commponent/Global/Container'
import { useParams } from 'react-router-dom'
import { useProductsContext } from '../../../Context/Products'

export default function ProductDetailSection1() {
    const productId = useParams()
    const {Products} = useProductsContext()
    const productDetail = Products?.filter((item:any)=>item.id === Number(productId.id))
    console.log(productDetail);
    
  return (
    <>
        <Container className={'ProductDetailSection1'}>
         <div className="k">{productDetail.map((item:any)=>item.items)}</div>
         
        </Container>
    </>
  )
}
