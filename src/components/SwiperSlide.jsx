import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';

export default function Carousel() {
  return (
    <Swiper
      className='w-full max-w-screen-xl mx-auto'
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      navigation
      autoplay={{ delay: 3000 }}
      loop={true}
    >
      {/* Utiliza clases de Tailwind CSS para hacer que las imágenes sean responsivas */}
      <SwiperSlide>
        <img src={banner1} alt="Banner 1" className="w-full h-auto sm:h-[350px]" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner2} alt="Banner 2" className="w-full h-auto sm:h-[350px]" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner3} alt="Banner 3" className="w-full h-auto sm:h-[350px]" />
      </SwiperSlide>
    </Swiper>
  );
}
