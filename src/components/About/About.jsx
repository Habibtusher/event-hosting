import { CgMouse } from "react-icons/cg";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import AboutMouseSlider from "./AboutMouseSlider";


const About = () => {
    return (
        <div>          
            {/* Mouse icon  */}
            <div className="flex justify-center items-center">
             <div className="w-[140px] h-[140px] rounded-full flex flex-col  items-center  bg-white z-20 relative -mt-[70px]">
                <div className="mt-[20px]">
                    <MdKeyboardArrowUp className="ml-[5.4px] -mb-[3px]" />
                    <CgMouse className="text-[24px]" />
                    <MdKeyboardArrowDown className="ml-[5.4px] -mt-[3px]" />
                </div>
             </div>
            </div>

            {/* About section start  */}
            <div>
                <div className="w-[1080px] m-auto">
                    <div className="flex justify-between gap-4">
                        <div className="w-1/2">
                            <h2 className="text-[40px] font-bold colorBlack"> Everyone's invited </h2>
                            <div className="mt-[30px]">
                                <h2 className="text[#101257] font-bold text-[30px]">Sapno ka gateway</h2>
                                <p className="colorBlack font-bold text-[18px]">Connection Dreamers to the city Of Dreams</p>
                            </div>
                            <div className="mt-[30px]">
                                <h2 className="text[#101257] font-bold text-[30px]">Sustainability</h2>
                                <p className="colorBlack font-bold text-[18px]">From waste segrgation to green power supply Mumbai Festival is putting the earth first.</p>
                            </div>
                            <button className="btn btn-primari mt-8">Knkow more</button>
                        </div>
                        <div className="w-1/2 ">
                            <AboutMouseSlider />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;