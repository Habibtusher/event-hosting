import About from "../components/About/About";
import BannerSlider from "../components/BannerSlider/BannerSlider";
import EventSection from "../components/EventSection/EventSection";

const MainLayout = () => {
    return (
        <div className="myContainer">
            <BannerSlider />
            <About />
            <EventSection />
            {/* <SlickCarousel className="mb-8" /> */}
        </div>
    );
};

export default MainLayout;