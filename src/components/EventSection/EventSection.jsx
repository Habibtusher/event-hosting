import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import EventSlider from "./EventSlider";



const EventSection = () => {

     const handleKnowMoreClick = () => {
    // Open the new tab and navigate to the extra component
    window.open('../extra.jsx', '_blank');
  };


    return (
        <div id="Events" className="mb-12">
            <div className="md:w-[1080px] w-full  md:h-[300px] h-full border-2 rounded-[32px] border-[#707070] m-auto ">
                <div className="flex flex-row justify-between px-2 mt-10 w-[992px] m-auto ">
                    <h2 className="font-bold text-[36px]">Event & Experiences</h2>
                 <Link>
                 <button onClick={handleKnowMoreClick} className="w-[200px] h-[50px] bg-black text-white text-left px-3 flex flex-row justify-between items-center rounded-md hover:rounded-full hover:justify-center hover:items-center hover:bg-[#fff] hover:text-black hover:gap-3 transition duration-700 ease-in-out border border-white-600"><span className="text-xs font-thin">Know More</span> <FaRegArrowAltCircleRight className="" /></button>
                 </Link>
                </div>                
            </div>
            <EventSlider />
        </div>
    );
};

export default EventSection;