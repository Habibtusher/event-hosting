import { FaRegArrowAltCircleRight } from "react-icons/fa";

const FriendsOfMumbaiSection = () => {
  return (
    <div className="mt-[70px] mb-10">
      {/* Friends Of Mumbai Header Section  */}
      <div className="w-full md:w-[1080px] rounded-3xl md:rounded-[40px] mx-auto bg-black h-full md:h-[125px]">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:pt-[40px] py-10 md:py-0 pl-10 pr-28">
          <div>
            <h2 className="text-white font-bold text-2xl md:text-[25px] ">
              Friends Of Mumbai
            </h2>
          </div>
          <div className="md:mt-0 mt-4">
            <button className="w-[200px] h-[50px] bg-black text-white text-left px-3 flex flex-row justify-between items-center rounded-md hover:rounded-full hover:justify-center hover:items-center hover:bg-[#fff] hover:text-black hover:gap-3 transition duration-700 ease-in-out border border-white-600">
              <span className="text-xs font-thin">Know More</span>{" "}
              <FaRegArrowAltCircleRight className="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsOfMumbaiSection;
