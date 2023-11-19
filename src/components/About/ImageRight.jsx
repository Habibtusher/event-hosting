import image1Source from "../../assets/image/HAJI ALI-18.jpg";
import image2Source from "../../assets/image/Ganesh Chaturthi Celebration.jpg";
import image3Source from "../../assets/image/yellow.png";
import image4Source from "../../assets/image/green.png";
import image5Source from "../../assets/image/AKSA BEACH-6.jpg";
import blue from "../../assets/image/blue.png";
import image6Source from "../../assets/image/GATEWAY OF INDIA -43.jpg";
import darkBlue from "../../assets/image/darkBlue.png";
import image7Source from "../../assets/image/MOUNTMARY CHURCH-11.jpg";
import image8Source from "../../assets/image/SEALINK-3.jpg";
import image9Source from "../../assets/image/BANDRA FORT-32.jpg";
import Images from "./Images";
const ImagesRight = () => {
  return (
    <div>
      <div className="flex flex-col">
        <Images height={230} src={image1Source} />
        <Images height={230} src={image2Source} />
        <Images height={130} src={image3Source} />
        <Images height={130} src={image4Source} />
        <Images height={230} src={image5Source} />
        <Images height={130} src={blue} />
        <Images height={230} src={image6Source} />
        <Images height={130} src={darkBlue} />
        <Images height={230} src={image7Source} />
        <Images height={230} src={image8Source} />
        <Images height={130} src={blue} />
        <Images height={230} src={image9Source} />
      </div>
    </div>
  );
};

export default ImagesRight;
