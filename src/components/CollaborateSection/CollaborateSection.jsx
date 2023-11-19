import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel } from 'swiper/modules';
import img1 from '../../assets/image/GovMoha/img1.jpg';
import img10 from '../../assets/image/GovMoha/img10.jpg';
import img2 from '../../assets/image/GovMoha/img2.jpg';
import img3 from '../../assets/image/GovMoha/img3.jpg';
import img5 from '../../assets/image/GovMoha/img4.jpg';
import img4 from '../../assets/image/GovMoha/img5.jpg';
import img6 from '../../assets/image/GovMoha/img6.jpg';
import img7 from '../../assets/image/GovMoha/img7.jpg';
import img8 from '../../assets/image/GovMoha/img8.jpg';
import img9 from '../../assets/image/GovMoha/img9.jpg';

const CollaborateSection = () => {

    return (
        <div className="w-full h-[180px] bg-black mt-16 mb-16 rounded-[30px] overflow-hidden ">
            <div>
                <Swiper
                    direction={'vertical'}
                    slidesPerView={1}
                    spaceBetween={0}
                    mousewheel={true}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Mousewheel]}
                    className="mySwiper"
                >
                    <SwiperSlide className='h-full w-[125px]'>
                        <img className='h-full w-full object-cover' src={img1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='h-full w-[125px]'>
                        <img className='h-full w-full object-cover' src={img2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='h-full w-[125px]'>
                        <img className='h-full w-full object-cover' src={img3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='h-full w-[125px]'>
                        <img className='h-full w-full object-cover' src={img4} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='h-full w-[125px]'>
                        <img className='h-full w-full object-cover' src={img5} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='h-full w-[125px]'>
                        <img className='h-full w-full object-cover' src={img6} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='h-full w-[125px]'>
                        <img className='h-full w-full object-cover' src={img7} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='h-full w-[125px]'>
                        <img className='h-full w-full object-cover' src={img8} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='h-full w-[125px]'>
                        <img className='h-full w-full object-cover' src={img9} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='h-full w-[125px]'>
                        <img className='h-full w-full object-cover' src={img10} alt="" />
                    </SwiperSlide>
                 </Swiper>
                </div>
                <div></div>
                <div></div>
        </div>
    );
};

export default CollaborateSection;