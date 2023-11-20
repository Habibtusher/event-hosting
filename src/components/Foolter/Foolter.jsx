import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/image/logo.png";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
const Foolter = () => {
  return (
    <div className=" bg-[#000] rounded-tl-3xl rounded-tr-3xl">
      <div className="md:w-[1260px] w-full mx-auto">
        <div className="text-sm text-white mt-20 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 rounded-t-[30px] pb-10">
          <div className="flex flex-col md:flex-row justify-between pt-10 pb-10">
            <div className="w-full md:w-1/2">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-[200px] h-[80px]">
                  <img className="w-50 h-full mb-4" src={logo} alt="" />
                  <p className="text-sm">Lorem ipsum, dolor sit </p>
                  <p className="text-sm">Lorem ipsum, dolor sit </p>
                </div>
                <div className="md:ml-8 md:mt-0 mt-12">
                  <ul>
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li className="mt-3 text-sm">
                      <a href="#Events">Events & Experience</a>
                    </li>
                    <li className="mt-3 text-sm">
                      <a href="#">FAQs</a>
                    </li>
                    <li className="mt-3 text-sm">
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <div className="md:ml-[10rem]">
                <h2>Subscribe to our newsletter</h2>
                <div className="flex items-center">

                
                <input
                  className=" mt-2 mb-2 bg-black border border-gray-300 text-gray-900 text-sm rounded-md  block p-1 w-[270px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  type="text"
                  placeholder="Subscribe to our newsletter"
                />
                <FaRegArrowAltCircleRight className="text-[25px]" />
                </div>
                <div>
                  <div>
                    {/* <h2>Follow Us</h2> */}
                    <div className="flex gap-4 mt-8">
                      <h2 className="text-xs">Follow Us</h2>
                      <a href="#" className="text-white text-base">
                        <FaFacebook size={16} />
                      </a>
                      <a
                        target="blank"
                        href="https://twitter.com/mumbai_festival"
                        className="text-white"
                      >
                        <FaXTwitter size={16} />
                      </a>
                      <a href="#" className="text-white">
                        <FaYoutube size={16} />
                      </a>
                      <a href="#" className="text-white">
                        <FaInstagram size={16} />
                      </a>
                      <a href="#" className="text-white">
                        <FaLinkedin size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-4 md:pl-2 text-center md:ml-[637px] text-gray-200 text-sm font-thin">
            @MumbaiFestival2024. All rights reserve. 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Foolter;
