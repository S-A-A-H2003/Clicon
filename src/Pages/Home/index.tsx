import './style.scss'

//Section
import HomeSection1 from '../../Section/Home/HomeSection1'
import HomeSection3 from '../../Section/Home/HomeSection3'
import HomeSection4 from '../../Section/Home/HomeSection4'
import HomeSection2 from '../../Section/Home/HomeSection2'
import HomeSection5 from '../../Section/Home/HomeSection5'

export default function Home() {
  return (
    <>
      <HomeSection1></HomeSection1>
      <HomeSection2></HomeSection2>
      <HomeSection3></HomeSection3>
      <HomeSection4></HomeSection4>
      <HomeSection5></HomeSection5>
    </>
  )
}