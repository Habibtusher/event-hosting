import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import EventSlider from "./EventSlider";

const EventSection = () => {
  return (
    <div id="Events" className="mb-12 mt-12">
      <div className="md:w-[1080px] w-full md:h-[300px] h-full border-2 rounded-[32px] border-[#707070] mx-4 md:mx-auto md:py-0 py-6">
        <div className="flex flex-col md:flex-row justify-between px-2 md:px-0 md:mt-10 w-full md:w-[992px] mx-auto">
          <h2 className="font-bold text-[24px] md:text-[25px] mb-4 md:mb-0">
            Event & Experiences
          </h2>
          <Link to="/events-experience">
            <button className="md:ml-[132px] mt-[20px] w-[200px] h-[50px] bg-black text-white text-left px-3 flex flex-row justify-between items-center rounded-md hover:rounded-full hover:justify-center hover:items-center hover:bg-[#e26e39] hover:gap-3 transition duration-700 ease-in-out">
              <span className="text-xs font-thin">Know More</span>{" "}
              <FaRegArrowAltCircleRight className="text-white" />
            </button>
          </Link>
        </div>
      </div>
      <EventSlider />
    </div>
  );
};
export default EventSection;
