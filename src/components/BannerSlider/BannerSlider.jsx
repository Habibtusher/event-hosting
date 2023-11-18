// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

import videoSource from '../../assets//image/video.mp4';
import image1Source from '../../assets/image/img1.jpeg';
import image2Source from '../../assets/image/img2.jpeg';

const BannerSlider = () => {



    return (
        <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
        <div className="h-screen flex items-center justify-center">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
          >
            <source src={videoSource} type="video/mp4" />
          </video>
          <div className="absolute text-white text-4xl font-bold">
            Slide 1 - Video
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-screen flex items-center justify-center">
          <img
            className="w-full h-full object-cover"
            src={image1Source}
            alt="Slide 2"
          />
          <div className="absolute text-white text-4xl font-bold">
            Slide 2 - Image
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-screen flex items-center justify-center">
          <img
            className="w-full h-full object-cover"
            src={image2Source}
            alt="Slide 3"
          />
          <div className="absolute text-white text-4xl font-bold">
            Slide 3 - Image
          </div>
        </div>
      </SwiperSlide>
        </Swiper>
      </>
    );
};

export default BannerSlider;