// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel } from 'swiper/modules';

import image1Source from '../../assets/image/img1.jpeg';
import image2Source from '../../assets/image/img2.jpeg';

const AboutMouseSlider = () => {
  return (
    <div className="flex justify-between gap-4">
      <Swiper
      direction="vertical"
      slidesPerView={1}
      spaceBetween={30}
      mousewheel={true}
      modules={[Mousewheel]}
      className="h-screen"
    >
      <SwiperSlide style={{ height: '300px' }}> {/* Set height for the first image */}
          <img className='w-[200px]' src={image1Source} alt="" />
        </SwiperSlide>
        <SwiperSlide style={{ height: '400px' }}> {/* Set height for the second image */}
          <img className='w-[200px]' src={image2Source} alt="" />
        </SwiperSlide>
        <SwiperSlide style={{ height: '350px' }}>
          <img src={image1Source} alt="" />
        </SwiperSlide>
        <SwiperSlide style={{ height: '250px' }}>
          <img src={image2Source} alt="" />
        </SwiperSlide>
        <SwiperSlide style={{ height: '320px' }}>
          <img src={image1Source} alt="" />
        </SwiperSlide>
        <SwiperSlide style={{ height: '280px' }}>
          <img src={image1Source} alt="" />
        </SwiperSlide>
        {/* Add more slides as needed */}
     
      {/* Add more slides as needed */}
    </Swiper>
    </div>
  );
}

export default AboutMouseSlider;