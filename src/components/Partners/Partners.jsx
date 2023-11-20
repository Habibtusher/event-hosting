import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Partners = () => {
  return (
    <div className="mb-12 container mx-auto">
      <div className="md:ml-[5%] md:w-[95%] h-[220px] border-t-2 border-l-2 border-b-2 border-black rounded-l-[30px] relative">
        <h2 className="font-bold text-[20px] text-center mt-8">Partners</h2>
      </div>
      <div className="-mt-[60px] md:ml-[8%]">
        <Swiper
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }} 
          modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
          breakpoints={{
            1024: {
              slidesPerView: 6,
            },
            736: {
              slidesPerView: 3,
            },
            400: {
              slidesPerView: 2,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-[100px] h-[100px] bg-gray-300 rounded-md"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[100px] h-[100px] bg-gray-300 rounded-md"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[100px] h-[100px] bg-gray-300 rounded-md"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[100px] h-[100px] bg-gray-300 rounded-md"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[100px] h-[100px] bg-gray-300 rounded-md"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[100px] h-[100px] bg-gray-300 rounded-md"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[100px] h-[100px] bg-gray-300 rounded-md"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[100px] h-[100px] bg-gray-300 rounded-md"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[100px] h-[100px] bg-gray-300 rounded-md"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[100px] h-[100px] bg-gray-300 rounded-md"></div>
          </SwiperSlide>
          {/* Add more SwiperSlides as needed */}
        </Swiper>
      </div>
    </div>
  );
};

export default Partners;
