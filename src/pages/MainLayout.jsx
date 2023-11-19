import About from "../components/About/About";
import BannerSlider from "../components/BannerSlider/BannerSlider";
import EventSection from "../components/EventSection/EventSection";
import Navbar from './../components/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <BannerSlider />
           <div className="myContainer">
           <About />
            <EventSection />
           </div>
            {/* <SlickCarousel className="mb-8" /> */}
        </div>
    );
};

export default MainLayout;