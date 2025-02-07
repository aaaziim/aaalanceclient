// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y,Autoplay  } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "../../src/assets/images/carousel1.jpg"
import img2 from "../../src/assets/images/carousel2.jpg"
import img3 from "../../src/assets/images/carousel3.jpg"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Slide from './Slide';

const Carousel = () => {
  return (
    <div className='container my-6 py-6 mx-auto '>
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      autoplay={{
        delay: 2500,
        disableOnInteraction:false
      }}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <Slide
        image={img1}
        text="Get Your Web Development Project Done Now!">
        </Slide>
      </SwiperSlide>

      <SwiperSlide>
        <Slide
        image={img2}
        text="Get Your Digital Marketing Project Done Now!">
        </Slide>
      </SwiperSlide>

      <SwiperSlide>
        <Slide
        image={img3}
        text="Get Your Video Editing Project Done Now!">
        </Slide>
      </SwiperSlide>
   
    </Swiper>
    </div>
  );
}

export default Carousel



 