
import { Swiper, SwiperSlide } from "swiper/react";
import image5Source from "../../../assets/image/mumbai/Screenshot_1.png";
import image4Source from "../../../assets/image/mumbai/Screenshot_2.png";
import image3Source from "../../../assets/image/mumbai/Screenshot_3.png";
import image6Source from "../../../assets/image/mumbai/Screenshot_4.png";
import image1Source from "../../../assets/image/mumbai/anad1.png";
import image2Source from "../../../assets/image/mumbai/sachin2.png";

const FriendsOfMumbaiSlide = () => {
  return (
    <div className="lg:ml-[90px] -mt-[41px]">
      <Swiper 
        spaceBetween={30}      
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} 
     
        breakpoints={{
         
          736: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
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
                  <div className="text-center">
                    <h2 className="text-[#101257] font-bold text-lg">
                      Anand Mahindra
                    </h2>
                    <p className="text-sm font-normal">Charman (Mahindra Group)</p>
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
                <div className="text-center">
                    <h2 className="text-[#101257] font-bold text-lg">
                     Sachin Tendulkar
                    </h2>
                    <p className="text-sm font-normal">Indian Cricketer</p>
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
                <div className="text-center">
                    <h2 className="text-[#101257] font-bold text-lg">
                      Mukesh Ambani
                    </h2>
                    <p className="text-sm font-normal">Director (Reliance Industries)</p>
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
                <div className="text-center">
                    <h2 className="text-[#101257] font-bold text-lg">
                     Madhuri.Dixit
                    </h2>
                    <p className="text-sm font-normal">Actories</p>
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
                <div className="text-center">
                    <h2 className="text-[#101257] font-bold text-lg">
                      Aamir khan
                    </h2>
                    <p className="text-sm font-normal">Actor</p>
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
              <div className="text-center">
                    <h2 className="text-[#101257] font-bold text-lg">
                     Shankar Mahadeven
                    </h2>
                    <p className="text-sm font-normal">Chairman (Mahindra Group)</p>
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

export default FriendsOfMumbaiSlide;
