// import About from "../components/About/About";
import BannerSlider from "../components/BannerSlider/BannerSlider";
import FriendsOfMumbaiSection from "../components/FriendsOfMumbaiSection/FriendsOfMumbaiSection";
import WorldRecord from "../components/WorldRecordSection/WorldRecord";
// import EventSection from "../components/EventSection/EventSection";
import Navbar from './../components/Navbar/Navbar';
import About from './../components/About/About';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <BannerSlider />
           <div className="myContainer">
           <About />
            {/* <EventSection /> */}
            <WorldRecord />
            <FriendsOfMumbaiSection /> 
           </div>
            {/* <SlickCarousel className="mb-8" /> */}
        </div>
    );
};

export default MainLayout;