import "swiper/css";
import "swiper/css/pagination";
// import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
// import './styles.css';
// import { Autoplay } from 'swiper/modules';

import { BsArrowRightCircle } from "react-icons/bs";

import image1Source from "../../assets/image/event1.png";
import image2Source from "../../assets/image/event2.png";
import image3Source from "../../assets/image/event3.png";
import image4Source from "../../assets/image/event4.png";
import image5Source from "../../assets/image/event5.png";
import image6Source from "../../assets/image/event6.png";

const EventSlider = () => {
  return (
    <div className="lg:ml-[90px] relative md:mt-[-170px]">
      <Swiper
        spaceBetween={30}      
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} 
        // modules={[Autoplay]}
        breakpoints={{
          
          1024: {
            slidesPerView: 3,
        },
          768: {
              slidesPerView: 1,

          }
      }}     
      >
        <SwiperSlide>
          <div>
            <div className="w-[320px]">
              <img
                className="w-full h-full rounded-[25px] object-cover"
                src={image1Source}
                alt=""
              />
              <div className="flex justify-center items-center">
                <div className="w-[280px] h-[80px] border-x-2 border-b-2 border-gray-300 px-[20px] py-[18px] flex flex-row justify-between items-center rounded-b-[14px] ">
                  <div>
                    <h2 className="text-[#101257] font-bold text-lg">
                      Opening Ceremony
                    </h2>
                    <p className="text-sm font-normal">On 20 January 2024</p>
                    <p className="text-sm font-normal">Venue TBA</p>
                  </div>
                  <div>
                    <BsArrowRightCircle className="text-[28px] font-thin text-gray-400 hover:text-[#E47948]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="w-[320px]">
              <img
                className="w-full h-full rounded-[25px] object-cover"
                src={image2Source}
                alt=""
              />
              <div className="flex justify-center items-center">
                <div className="w-[280px] h-[80px] border-x-2 border-b-2 border-gray-300 px-[20px] py-[18px] flex flex-row justify-between items-center rounded-b-[14px] ">
                  <div>
                    <h2 className="text-[#101257] font-bold text-lg">
                      Opening Ceremony
                    </h2>
                    <p className="text-sm font-normal">On 20 January 2024</p>
                    <p className="text-sm font-normal">Venue TBA</p>
                  </div>
                  <div>
                    <BsArrowRightCircle className="text-[28px] font-thin text-gray-400 hover:text-[#E47948]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="w-[320px]">
              <img
                className="w-full h-full rounded-[25px] object-cover"
                src={image3Source}
                alt=""
              />
              <div className="flex justify-center items-center">
                <div className="w-[280px] h-[80px] border-x-2 border-b-2 border-gray-300 px-[20px] py-[18px] flex flex-row justify-between items-center rounded-b-[14px] ">
                  <div>
                    <h2 className="text-[#101257] font-bold text-lg">
                      Opening Ceremony
                    </h2>
                    <p className="text-sm font-normal">On 20 January 2024</p>
                    <p className="text-sm font-normal">Venue TBA</p>
                  </div>
                  <div>
                    <BsArrowRightCircle className="text-[28px] font-thin text-gray-400 hover:text-[#E47948]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="w-[320px] ">
              <img
                className="w-full h-full rounded-[25px] object-cover"
                src={image4Source}
                alt=""
              />
              <div className="flex justify-center items-center">
                <div className="w-[280px] h-[80px] border-x-2 border-b-2 border-gray-300 px-[20px] py-[18px] flex flex-row justify-between items-center rounded-b-[14px] ">
                  <div>
                    <h2 className="text-[#101257] font-bold text-lg">
                      Opening Ceremony
                    </h2>
                    <p className="text-sm font-normal">On 20 January 2024</p>
                    <p className="text-sm font-normal">Venue TBA</p>
                  </div>
                  <div>
                    <BsArrowRightCircle className="text-[28px] font-thin text-gray-400 hover:text-[#E47948]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="w-[320px] ">
              <img
                className="w-full h-full rounded-[25px] object-cover"
                src={image5Source}
                alt=""
              />
              <div className="flex justify-center items-center">
                <div className="w-[280px] h-[80px] border-x-2 border-b-2 border-gray-300 px-[20px] py-[18px] flex flex-row justify-between items-center rounded-b-[14px] ">
                  <div>
                    <h2 className="text-[#101257] font-bold text-lg">
                      Opening Ceremony
                    </h2>
                    <p className="text-sm font-normal">On 20 January 2024</p>
                    <p className="text-sm font-normal">Venue TBA</p>
                  </div>
                  <div>
                    <BsArrowRightCircle className="text-[28px] font-thin text-gray-400 hover:text-[#E47948]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <div className="w-[320px] ">
              <img
                className="w-full h-full rounded-[25px] object-cover"
                src={image6Source}
                alt=""
              />
               <div className="ml-[18px]">
              <div className="w-[280px] h-[80px] border-x-2 border-b-2 border-gray-300 px-[20px] py-[18px] flex flex-row justify-between items-center rounded-b-[14px] ">
                <div>
                  <h2 className="text-[#101257] font-bold text-lg">
                    Opening Ceremony
                  </h2>
                  <p className="text-sm font-normal">On 20 January 2024</p>
                  <p className="text-sm font-normal">Venue TBA</p>
                </div>
                <div>
                  <BsArrowRightCircle className="text-[28px] font-thin text-gray-400 hover:text-[#E47948]" />
                </div>
              </div>
            </div>
            </div>
           
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default EventSlider;
