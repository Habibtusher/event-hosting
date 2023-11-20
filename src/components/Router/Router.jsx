import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../../App";
import About from "../About/About";
import BannerSlider from "../BannerSlider/BannerSlider";
import EventSection from "../EventSection/EventSection";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: "/",
            element: <BannerSlider />
          },
        {
            path: "/",
            element: <About />
          },
        {
            path: "/",
            element: <EventSection />
          },
      ]
    },
  ]);