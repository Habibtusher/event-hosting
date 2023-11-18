import { CgMouse } from "react-icons/cg";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";


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
        </div>
    );
};

export default About;