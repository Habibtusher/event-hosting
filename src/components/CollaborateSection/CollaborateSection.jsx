
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import img4 from "../../assets/image/GIRGAON CHAUPATI-19.jpg";
import img1 from "../../assets/image/GovMoha/img1.jpg";
import img3 from "../../assets/image/MOUNTMARY CHURCH-18.jpg";
import img2 from "../../assets/image/blue.png";
import darkBlue from "../../assets/image/darkBlue.png";
import img5 from "../../assets/image/green.png";

import image1Source from "../../assets/image/GATEWAY OF INDIA-16.jpg";
import imageRSource from "../../assets/image/Ganesh Chaturthi Celebration.jpg";
import { default as image2Source, default as imageR2Source } from "../../assets/image/Ganesh Chaturthi Celebration2.jpg";
import image3Source from "../../assets/image/MOUNTMARY CHURCH-2.jpg";
import image4Source from "../../assets/image/SEALINK-3.jpg";
import yellow from "../../assets/image/yellow.png";

import image5Source from "../../assets/image/GIRGAON CHAUPATI-19.jpg";
import green from "../../assets/image/green.png";
import Images from "../About/Images";

const CollaborateSection = () => {
  return (
    <div id="Gellary" className="w-full flex justify-around items-center h-[180px] bg-black mt-16 mb-16 rounded-[30px] overflow-hidden ">
      <div
        style={{
          height: "100%",
          overflowY: "auto",
          scrollbarWidth: "thin",
        }}
        className="text-white"
      >
        <Images height={150} width={140} src={image1Source} />
        <Images height={150} width={140} src={image2Source} />
        <Images height={150} width={140} src={img1} />
        <Images height={90} width={140} src={img2} />
        <Images height={150} width={140} src={img3} />
        <Images height={100} width={140} src={darkBlue} />
        <Images height={100} width={140} src={img5} />
        <Images height={150} width={140} src={img4} />
      </div>
      <div>
        <p className="text-white text-center p-3 text-[20px]">Collaborate with us </p>
      </div>
  
      <div
        style={{
          height: "100%",
          overflowY: "auto",
          scrollbarWidth: "thin",
        }}
        className="text-white"
      >
       <Images  height={150} width={140} src={imageRSource} />
        <Images height={150} width={140} src={imageR2Source} />
        <Images height={90} width={140} src={yellow} />
        <Images height={150} width={140} src={image3Source} />
        <Images height={150} width={140} src={image4Source} />
        <Images height={90} width={140} src={darkBlue} />
        <Images height={90} width={140} src={green} />
        <Images height={150} width={140} src={image5Source} />
      </div>
     
    </div>
  );
};

export default CollaborateSection;
