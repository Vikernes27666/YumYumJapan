// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import Swiper modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';

// eslint-disable-next-line react-refresh/only-export-components, react/display-name
export default () => {
  return (
    <Swiper
      className='w-[1550px] h-[350px]'
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      navigation
      autoplay={{ delay: 3000 }}
      loop={true} // Habilitar el bucle infinito
    >
      <SwiperSlide><img src={banner1} alt="Banner 1" className="banner-image" /></SwiperSlide>
      <SwiperSlide><img src={banner2} alt="Banner 2" className="banner-image" /></SwiperSlide>
      <SwiperSlide><img src={banner3} alt="Banner 3" className="banner-image" /></SwiperSlide>


    </Swiper>
  );
};
