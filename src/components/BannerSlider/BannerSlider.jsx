// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './BannerStyle.css';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

import videoSource from '../../assets//image/video.mp4';
import image1Source from '../../assets/image/img1.jpeg';
import image2Source from '../../assets/image/img2.jpeg';

const BannerSlider = () => {



    return (
        <div className='z-4'>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
        <div className="h-screen flex items-center justify-center ">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
          >
            <source src={videoSource} type="video/mp4" />
          </video>
          <div className="absolute flex items-center justify-center text-white  bg-black bg-opacity-50 w-full h-full text-center">
            <p className='px-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore hic quaerat maiores laborum accusantium reiciendis deleniti. Quae accusamus minus consectetur vero distinctio, hic ad nihil, dolorum amet tempora veritatis a.</p>
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
          <div className="absolute flex items-center justify-center text-white bg-black bg-opacity-50 w-full h-full text-center">
            <p className='px-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore hic quaerat maiores laborum accusantium reiciendis deleniti. Quae accusamus minus consectetur vero distinctio, hic ad nihil, dolorum amet tempora veritatis a.</p>
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
          <div className="absolute flex items-center justify-center text-white  bg-black bg-opacity-50 w-full h-full text-center">
            <p className='px-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore hic quaerat maiores laborum accusantium reiciendis deleniti. Quae accusamus minus consectetur vero distinctio, hic ad nihil, dolorum amet tempora veritatis a.</p>
          </div>
        </div>
      </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default BannerSlider;