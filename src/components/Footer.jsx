
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between py-4 px-20 bg-primary-900 text-white">
      
        <div className="flex flex-col ">
          
          <div className="flex gap-x-1 font-bold gap-y-3 items-center">
            <img src="public/img/logoWhite.svg" alt="logo-white-image" className="w-8" />
            <p className="text-3xl">DailyLean</p>
          </div>

          <div className="text-sm mt-2 text-secondary-300 max-w-88 w-full">
            999/99 Soi Sukhumvit 21, Khlong Tan Nuea Subdistrict, Watthana
            District, Bangkok 10110, Thailand
          </div>
        </div>
      

      <div>
        <ul className="hidden md:flex justify-between mb-8">
          <li>
            <Link to="/" className=" hover:text-amber-400 cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" className="hover:text-amber-400 cursor-pointer">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-amber-400 cursor-pointer">
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="flex font-bold ">
          <p> © 2025 Healthy Food. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
