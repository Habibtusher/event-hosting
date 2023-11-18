import About from "../components/About/About";
import BannerSlider from "../components/BannerSlider/BannerSlider";

const MainLayout = () => {
    return (
        <div className="myContainer">
            <BannerSlider />
            <About />
        </div>
    );
};

export default MainLayout;