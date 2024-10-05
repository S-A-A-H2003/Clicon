import './style.scss'

//Asset
import Star1 from '../../../Asset/Image/Component/Rating/Star1.png'
import Star2 from '../../../Asset/Image/Component/Rating/Star2.png'
import StarStrock from '../../../Asset/Image/Component/Rating/StarStrock.png'

interface Props {
  Rate:number;
  Style?:boolean;
}

export default function Rating({Rate,Style}:Props) {
  return (
    <>
      {
       Rate >=0&&Rate<1?
       <div className='Rating'>
         <img src={StarStrock} alt="" />
         <img src={StarStrock} alt="" />
         <img src={StarStrock} alt="" />
         <img src={StarStrock} alt="" />
         <img src={StarStrock} alt="" />
       </div> 
      :Rate >=1&&Rate<2?
        <div className='Rating'>
          <img src={Style?Star2:Star1} alt="" />
          <img src={StarStrock} alt="" />
          <img src={StarStrock} alt="" />
          <img src={StarStrock} alt="" />
          <img src={StarStrock} alt="" />
        </div>
      :Rate>=2&&Rate<3?
        <div className='Rating'>
          <img src={Style?Star2:Star1} alt="" />
          <img src={Style?Star2:Star1} alt="" />
          <img src={StarStrock} alt="" />
          <img src={StarStrock} alt="" />
          <img src={StarStrock} alt="" />
        </div>
      :Rate>=3&&Rate<4?
        <div className='Rating'>
          <img src={Style?Star2:Star1} alt="" />
          <img src={Style?Star2:Star1} alt="" />
          <img src={Style?Star2:Star1} alt="" />
          <img src={StarStrock} alt="" />
          <img src={StarStrock} alt="" />
        </div>
      :Rate>=4&&Rate<5?
        <div className='Rating'>
          <img src={Style?Star2:Star1} alt="" />
          <img src={Style?Star2:Star1} alt="" />
          <img src={Style?Star2:Star1} alt="" />
          <img src={Style?Star2:Star1} alt="" />
          <img src={StarStrock} alt="" />
        </div>
      :Rate>=5?
        <div className='Rating'>
          <img src={Style?Star2:Star1} alt="" />
          <img src={Style?Star2:Star1} alt="" />
          <img src={Style?Star2:Star1} alt="" />
          <img src={Style?Star2:Star1} alt="" />
          <img src={Style?Star2:Star1} alt="" />
        </div>
      :''
      }
    </>
  )
}
