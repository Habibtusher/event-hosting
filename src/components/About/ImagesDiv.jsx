
import image1Source from "../../assets/image/GATEWAY OF INDIA-16.jpg";
import image2Source from "../../assets/image/Ganesh Chaturthi Celebration2.jpg";
import yellow from "../../assets/image/yellow.png";
import image3Source from "../../assets/image/MOUNTMARY CHURCH-2.jpg";
import image4Source from "../../assets/image/SEALINK-3.jpg";
import darkBlue from "../../assets/image/darkBlue.png";
import green from "../../assets/image/green.png";
import image5Source from "../../assets/image/GIRGAON CHAUPATI-19.jpg";
import Images from "./Images";
const ImagesDiv = () => {
  return (
    <div>
      <div className="flex flex-col">
        <Images height={230} src={image1Source} />
        <Images height={230} src={image2Source} />
        <Images height={130} src={yellow} />
        <Images height={230} src={image3Source} />
        <Images height={230} src={image4Source} />
        <Images height={130} src={darkBlue} />
        <Images height={130} src={green} />
        <Images height={230} src={image5Source} />
      </div>
    </div>
  );
};

export default ImagesDiv;
