import { useState } from 'react';
import { CiTimer } from "react-icons/ci";
import logo from "../../assets/image/logo.png";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('home'); // Set 'home' as the default active page

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handlePageClick = (page) => {
    setActivePage(page);
    closeMobileMenu(); // Close mobile menu when a page is clicked
  };

  return (
    <nav className="fixed top-0 w-full z-[999]">
      <div className="rounded-b-3xl shadow-md bg-white w-[1180px] mx-auto w px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 pt-4 pb-4">
          <div className="flex items-center">
            <div className="text-black font-bold text-xl w-14 h-8"><img className='w-full h-full object-cover' src={logo} alt="" /></div>
            <div className="hidden md:ml-10 md:flex font-normal text-sm space-x-4 text-black">
              <a
                href="#"
                className={` ${activePage === 'home' ? 'text-[#E26E39]' : ''}`}
                onClick={() => handlePageClick('home')}
              >
                Home
              </a>
              <a
                href="#"
                className={` ${activePage === 'about' ? 'text-[#E26E39]' : ''}`}
                onClick={() => handlePageClick('about')}
              >
                About
              </a>
              <a
                href="#"
                className={` ${activePage === 'services' ? 'text-[#E26E39]' : ''}`}
                onClick={() => handlePageClick('services')}
              >
                Events & Experiences
              </a>
              <a
                href="#"
                className={` ${activePage === 'contact' ? 'text-[#E26E39]' : ''}`}
                onClick={() => handlePageClick('contact')}
              >
                Gellary
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-black focus:outline-none"
            >
              Menu
            </button>
          </div>
          <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className="flex flex-col items-center space-y-4 text-black">
              <a
                href="#"
                className={` ${activePage === 'home' ? 'text-[#E26E39]' : ''}`}
                onClick={() => handlePageClick('home')}
              >
                Home
              </a>
              <a
                href="#"
                className={` ${activePage === 'about' ? 'text-[#E26E39]' : ''}`}
                onClick={() => handlePageClick('about')}
              >
                About
              </a>
              <a
                href="#"
                className={` ${activePage === 'services' ? 'text-[#E26E39]' : ''}`}
                onClick={() => handlePageClick('services')}
              >
                Events & Experiences
              </a>
              <a
                href="#"
                className={` ${activePage === 'contact' ? 'text-[#E26E39]' : ''}`}
                onClick={() => handlePageClick('contact')}
              >
                Gellary
              </a>
            </div>
          </div>
          <div className="hidden md:flex">
             <div className="flex flex-row justify-center items-center gap-2">
              <span className='text-bold text-[22px] mt-1'><CiTimer /></span>
              <h2 className="text-[#E26E39] text-bold text-[36px]">  <span></span>
                25</h2>
              <div className="text-[16px] font-bold">
                <h1>DAYS</h1>
                <h2 className="mt-[-6px]">LEFT</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
