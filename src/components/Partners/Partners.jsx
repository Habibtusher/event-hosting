
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Partners = () => {
    return (
        <div className="mb-12 mt-14">
            <div className="w-full h-[220px] border-2 border-black rounded-l-[30px] ml-[100px] relative">
                <h2 className="font-bold text-[30px] text-center ml-[800px] mt-[70px]">Partners</h2>
            </div>
            <div >
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                // pagination={{
                //   clickable: true,
                // }}
                breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 6,
                    spaceBetween: 50,
                },
                }}
                // modules={[Pagination]}
                className="mySwiper ml-[138px] -mt-[55px]"
            >
                <SwiperSlide>
                    <div className='w-[100px] h-[100px] bg-gray-300 rounded-md'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[100px] h-[100px] bg-gray-300 rounded-md'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[100px] h-[100px] bg-gray-300 rounded-md'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[100px] h-[100px] bg-gray-300 rounded-md'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[100px] h-[100px] bg-gray-300 rounded-md'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[100px] h-[100px] bg-gray-300 rounded-md'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[100px] h-[100px] bg-gray-300 rounded-md'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[100px] h-[100px] bg-gray-300 rounded-md'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[100px] h-[100px] bg-gray-300 rounded-md'>

                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
    );
};

export default Partners;