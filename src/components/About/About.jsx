import { CgMouse } from "react-icons/cg";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import { FaRegArrowAltCircleRight } from "react-icons/fa";
import ImagesRight from "./ImageRight";
import ImagesDiv from "./ImagesDiv";

const About = () => {
  return (
    <div>
      {/* Mouse icon  */}
      <div id="about" className="flex justify-center items-center">
        <div className="w-[140px] h-[140px] rounded-full flex flex-col  items-center  bg-white z-20 relative -mt-[70px]">
          <div className="mt-[20px]">
            <MdKeyboardArrowUp className="ml-[4.4px] -mb-[3px]" />
            <CgMouse className="text-[24px]" />
            <MdKeyboardArrowDown className="ml-[4.4px] -mt-[3px]" />
          </div>
        </div>
      </div>

      {/* About section start  */}
      <div>
        <div className="md:w-[1080px] w-full m-auto">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2 w-full flex justify-center">
              <div >
                <h2 className="text-[40px] text-[#3B3B3B] font-bold colorBlack">
                  {" "}
                  Everyone's
                  <p>invited</p>
                </h2>
                <div className="mt-[25px]">
                  <h2 className="text-[#003D73] font-bold text-[25px]">
                    Sapno ka gateway
                  </h2>
                  <p className="colorBlack font-bold text-[18px]">
                    Connection Dreamers to the city Of Dreams
                  </p>
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-[#003D73] font-bold text-[25px]">
                    Sustainability
                  </h2>
                  <p className="colorBlack font-bold text-[18px] ">
                    From waste segrgation to green power supply Mumbai Festival
                    is putting the earth first.
                  </p>
                </div>
                <button className=" mt-[40px] w-[200px] h-[50px] bg-black text-white text-left px-3 flex flex-row justify-between items-center rounded-md hover:rounded-full hover:justify-center hover:items-center hover:bg-[#e26e39] hover:gap-3 transition duration-700 ease-in-out">
                  <span className="text-xs font-thin">Know More</span>{" "}
                  <FaRegArrowAltCircleRight className="text-white" />
                </button>
              </div>
            </div>

            <div
              className="w-full md:w-1/2 flex justify-center"
              style={{
                height: "430px",
                overflowY: "auto",
                scrollbarWidth: "thin",
              }}
            >
              <div
                className="flex gap-5 md:ml-[7.5rem] ml-0
                
               "
              >
                <ImagesDiv />
                <ImagesRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
