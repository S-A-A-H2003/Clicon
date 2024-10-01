import 'swiper/css';
import 'swiper/css/pagination';
import './style.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

//Style
import { BodyLarge400, BodySmall400, BodyXL400, Display3 } from '../../../../Style/Font/Typograpy';
import { Color } from '../../../../Constant/Colors';

//Component
import BRS1ShopNow from '../../Button/ButtonRectangel/B_R_S1_ShopNow'
import Display from '../../Display'

//Librari
import { useNavigate } from 'react-router-dom';

interface Props {
  ProductFilter?:any;
}

export default function CardProductSwiperStyle1({ProductFilter}:Props) {
  const navigate =useNavigate()
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="MyCardProductSwiperStyle1"
      >
          {Array.isArray(ProductFilter)&&ProductFilter?.map((item)=>
            <>
              <SwiperSlide>
                <div className="SwiperSlide_Left">
                  <BodySmall400 className="SwiperSlide_Left_One" color={Color.Secondary600}>__{item.promotionalTalk}</BodySmall400>
                  <Display3 className="SwiperSlide_Left_Tow" color={Color.Gary900}>{item.productNames}</Display3>
                  <BodyLarge400 className="SwiperSlide_Left_Three" color={Color.Gary700}>{item.description}</BodyLarge400>
                  <BRS1ShopNow 
                    width={191} 
                    height={56} 
                    onClick={()=>navigate(`/ProductDetail/${item.id}`)}
                  />
                </div>

                <div className="SwiperSlide_Right">
                  <img src={item.pictures.mainPicture} alt="" className='SwiperSlide_Right_Img'/>
                  <Display className={"SwiperSlide_Right_Display"} width={100} height={100} borderradius={'100%'} backgroundcolor={Color.Secondary500} border={`3px solid ${Color.Gary00}`}>
                    <BodyXL400 color={Color.Gary00}>${item.price}</BodyXL400>
                  </Display>
                </div>
              </SwiperSlide>
            </>
          )}
      </Swiper>
    </>
  );
}