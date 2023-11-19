import { FaRegArrowAltCircleRight } from "react-icons/fa";
import WorldRecordImg from "../../assets/image/WorldRecord.jpeg";


const WorldRecord = () => {
  return (
    <div>
      <div className="relative h-full md:h-[440px] mt-8">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-[40px]"></div>
        <img
          className="w-full h-full rounded-3xl md:rounded-[40px] object-cover"
          src={WorldRecordImg}
          alt=""
        />
        <div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-end items-start p-4">
          <h2 className="text-white font-bold text-lg md:text-[36px] md:ml-[118px] md:mb-3">
            World Record Attempt
          </h2>
        </div>
      </div>

      <div className="w-full md:w-[1080px] mx-auto md:border-b-2 md:border-r-2 md:border-l-2 border-[#707070] md:h-[140px] rounded-b-[36px]">
        <div  className=" mt-2 md:mt-0 md:px-[45px] md:py-[30px] w-full flex flex-col md:flex-row md:justify-between items-center justify-center text-center md:text-left">
            <div className="md:w-[60%]">
                <h2 className="blueColor font-bold text-lg">Setting out to Break a World Record</h2>
                <p className="text-[13px] mt-2 font-normal">At Mumbai Fest 2024, 8,000 professionally trained Lezhim dancers will perform together in the soul of the country with the intent of setting a new Guinness World Record.</p>
            </div>
            <div className="md:w-[40%]">
                <button className="md:ml-[132px] mt-[20px] w-[200px] h-[50px] bg-black text-white text-left px-3 flex flex-row justify-between items-center rounded-md hover:rounded-full hover:justify-center hover:items-center hover:bg-[#e26e39] hover:gap-3 transition duration-700 ease-in-out"><span className="text-xs font-thin">Know More</span> <FaRegArrowAltCircleRight className="text-white" /></button>
            </div>
        </div>

      </div>


    </div>
  );
};

export default WorldRecord;
