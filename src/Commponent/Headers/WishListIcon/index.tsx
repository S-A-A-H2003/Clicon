import './style.scss'

//Context
import { useCountWishlist} from '../../../Context/CountWishlist'

//Asset
import IconWishList from '../../../Asset/Image/Component/WishListIcon/Heart.png'
import ContinerCountNumber from '../../../Asset/Image/Component/WishListIcon/ContinarCountNamber.png'

//Librari
import { useNavigate } from 'react-router-dom'

//Constant
import { PATH } from '../../../Constant/Route'

export default function WishListIcon() {
  const {countWishlist} =useCountWishlist()
  const navigator = useNavigate()
  return (
    <>
      <div className="WishListIcon">
          <img src={IconWishList} alt="Icon" className='Icon' onClick={()=>navigator(PATH.WISHLIST)}/>
            <div className="Conter">
              <img src={ContinerCountNumber} alt="" className="ContinerCountNumber" />
              <div className="Number">{countWishlist}</div>
            </div>
      </div>
    </>
  )
}
