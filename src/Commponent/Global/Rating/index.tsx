import './style.scss'

//Asset
import Star from '../../../Asset/Image/Component/Rating/Star.png'

interface Props {
  Rate:number;
}

export default function Rating({Rate}:Props) {
  return (
    <>
      {
       Rate >=1&&Rate<2?
        <div className='Rating'>
          <img src={Star} alt="" />
        </div>
      :Rate>=2&&Rate<3?
        <div className='Rating'>
          <img src={Star} alt="" />
          <img src={Star} alt="" />
        </div>
      :Rate>=3&&Rate<4?
        <div className='Rating'>
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
        </div>
      :Rate>=4&&Rate<5?
        <div className='Rating'>
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
        </div>
      :Rate>=5?
        <div className='Rating'>
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
        </div>
      :''
      }
    </>
  )
}
