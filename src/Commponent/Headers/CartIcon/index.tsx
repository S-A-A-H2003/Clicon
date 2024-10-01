import './style.scss'

//Context
import { useCountCart } from '../../../Context/CountCart'

//Asset
import IconCart from '../../../Asset/Image/Component/CartIcon/Cart.png'
import ContinerCountNumber from '../../../Asset/Image/Component/CartIcon/ContinarCountNamber.png'

//Librari
import { useNavigate } from 'react-router-dom'

//Constant
import { PATH } from '../../../Constant/Route'

export default function CartIcon() {
  const {countCart} =useCountCart()
  const navigator = useNavigate()
  return (
    <>
      <div className="CartIcon">
          <img src={IconCart} alt="Cart" className='Icon' onClick={()=>navigator(PATH.CART)}/>
          <div className="Conter">
            <img src={ContinerCountNumber} alt="" className="ContinerCountNumber" />
            <div className="Number">{countCart}</div>
          </div>
      </div>
    </>
  )
}
