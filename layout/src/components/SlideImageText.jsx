import '../styles/css/SlideImageText.css';

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import banner1 from '../assets/ftECh3G.png.png';
import banner2 from '../assets/ftECh3G-mob.png';
import 'swiper/css'; // core Swiper
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const SlideImageText = () => {

  return (
    <div className='fullbanner'>
      <Swiper
          spaceBetween={0}
          navigation={true}
          pagination={true}
          slidesPerView={1}
          modules={[Navigation, Pagination]}
      >
        <SwiperSlide>
            <img className='fullbanner desk' src={banner1} alt="promoção do dia"/>
            <img className='fullbanner mob' src={banner2}/>
            <div className='txt-banner'>
                <h4>Promoções de Outono</h4>
                <p>Confiras os melhores looks para combinar com você nesse Outono</p>
                <label>Conferir</label>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img className='fullbanner desk' src={banner1} alt="promoção do dia"/>
            <img className='fullbanner mob' src={banner2}/>
            <div className='txt-banner'>
                <h4>Promoções de Outono</h4>
                <p>Confiras os melhores looks para combinar com você nesse Outono</p>
                <label>Conferir</label>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SlideImageText;