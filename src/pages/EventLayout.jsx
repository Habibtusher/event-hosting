import About from "../components/About/About";
import BannerSlider from "../components/BannerSlider/BannerSlider";
import Foolter from "../components/Foolter/Foolter";
import Navbar from "../components/Navbar/Navbar";


const EventLayout = () => {
    return (
        <div>
            <Navbar />
            <BannerSlider />
            <About />
            <Foolter />
        </div>
    );
};

export default EventLayout;