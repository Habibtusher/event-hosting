import {
    createBrowserRouter,
} from "react-router-dom";

import About from "../About/About";
import BannerSlider from "../BannerSlider/BannerSlider";
import EventSection from "../EventSection/EventSection";
import MainLayout from "../../pages/MainLayout";
import EventLayout from "../../pages/EventLayout";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
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
    {
      path: "/events-experience",
      element: <EventLayout/>,
    },
  ]);