import './style.scss'

//Asset
import Twitter from '../../../Asset/Image/Component/SocialMidiaIcon/Twitter.png'
import Facebook from '../../../Asset/Image/Component/SocialMidiaIcon/Facebook.png'
import Pinterest from '../../../Asset/Image/Component/SocialMidiaIcon/Pinterest.png'
import Reddit from '../../../Asset/Image/Component/SocialMidiaIcon/Reddit.png'
import Youtube from '../../../Asset/Image/Component/SocialMidiaIcon/Youtube.png'
import Instagram from '../../../Asset/Image/Component/SocialMidiaIcon/Instagram.png'

interface Props {
  className:string;
}

export default function SocialMediaIcon({className}:Props) {
  return (
    <>
      <div className={className + " SocialMediaIcon"}>
        <a href='/' target='blank'><img src={Twitter} alt='Twitter'></img></a>
        <a href='/' target='blank'><img src={Facebook} alt='Facebook'></img></a>
        <a href='/' target='blank'><img src={Pinterest} alt='Pinterest'></img></a>
        <a href='/' target='blank'><img src={Reddit} alt='Reddit'></img></a>
        <a href='/' target='blank'><img src={Youtube} alt='Youtube'></img></a>
        <a href='/' target='blank'><img src={Instagram} alt='Instagram'></img></a>
      </div>
    </>
  )
}
