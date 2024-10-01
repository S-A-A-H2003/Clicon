import './style.scss'

//Asset
import IconUser from '../../../Asset/Image/Component/UserIcon/User.png'

//Librari
import { useNavigate } from 'react-router-dom'

//Constant
import {PATH} from '../../../Constant/Route'

export default function UserIcon() {
  const navigate =useNavigate()
  return (
    <>
          <img src={IconUser} alt="Profiler" className='UserIcon' onClick={()=>navigate(PATH.DASHBORD)} />
    </>
  )
}
