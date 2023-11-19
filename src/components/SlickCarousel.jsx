import { BsArrowRightCircle } from 'react-icons/bs';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import image1Source from "../assets/image/event1.png";
import image2Source from "../assets/image/event2.png";
import image3Source from "../assets/image/event3.png";
import image4Source from "../assets/image/event4.png";
import image5Source from "../assets/image/event5.png";
import image6Source from "../assets/image/event6.png";

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const items = [
    {
      id: 1,
      image: image1Source,
      title: "Opening Ceremony",
      description: "On 20 January 2024",
      venue: "Venue TBA",
    },
    {
      id: 2,
      image: image2Source,
      title: "Music Fest",
      description: "20 - 24 January 2024",
      venue: "TBA",
    },
    {
      id: 3,
      image: image3Source,
      title: "Mumbai Walks",
      description: "On 26 January 2024",
      Venue: "Gateway of India",
    },
    {
      id: 4,
      image: image4Source,
      title: "Beach Fest",
      description: "20 - 26 January 2024",
      venue: "Juhu Beach",
    },
    {
      id: 5,
      image: image5Source,
      title: "Cricket Clinic",
      description: "20 - 26 January 2024",
      venue: "Juhu Beach",
    },
    {
      id: 6,
      image: image6Source,
      title: "Shopping Festival",
      description: "TBA",
      venue: "TBA",
    },
  ];

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">React Carousel</h2>
      <Slider {...settings} className="slick-slider-gap">
        {items.map((item) => (
          <div key={item.id} className="w-[300px] mr-8 slick-slide-gap">
            <img
              className="w-full h-full rounded-[25px] object-cover"
              src={item.image}
              alt={item.title}
            />
            <div className="flex justify-center items-center">
              <div className="w-[280px] h-[80px] border-x-2 border-b-2 border-gray-300 px-[20px] py-[18px] flex flex-row justify-between items-center rounded-b-[14px]">
                <div>
                  <h2 className="text-[#101257] font-bold text-lg">
                    {item.title}
                  </h2>
                  <p className="text-sm font-normal">{item.description}</p>
                  <p className="text-sm font-normal">{item.venue}</p>
                </div>
                <div>
                  <BsArrowRightCircle className="text-[28px] font-thin text-gray-400 hover:text-[#E47948]" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickCarousel;
