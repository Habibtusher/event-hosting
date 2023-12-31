import About from "../components/About/About";
import BannerSlider from "../components/BannerSlider/BannerSlider";
import CollaborateSection from "../components/CollaborateSection/CollaborateSection";
import EventSection from "../components/EventSection/EventSection";
import Foolter from "../components/Foolter/Foolter";
import FriendsOfMumbaiSection from "../components/FriendsOfMumbaiSection/FriendsOfMumbaiSection";
import FriendsOfMumbaiSlide from "../components/FriendsOfMumbaiSection/FriendsOfMumbaiSlide/FriendsOfMumbaiSlide";
import Partners from "../components/Partners/Partners";
import Sponsor from "../components/Sponsor/Sponsor";
import WorldRecord from "../components/WorldRecordSection/WorldRecord";
import Navbar from './../components/Navbar/Navbar';


const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <BannerSlider />
           <div className="myContainer">
           <About />
           
            <EventSection />
            <WorldRecord />
            <FriendsOfMumbaiSection /> 
            <FriendsOfMumbaiSlide />
            <CollaborateSection />
            <Sponsor />
            <Partners />
            
           </div>
           <Foolter />
            {/* <SlickCarousel className="mb-8" /> */}
        </div>
    );
};

export default MainLayout;