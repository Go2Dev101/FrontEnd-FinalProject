import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { User } from "lucide-react";

export const Header = () => {
  return (
    <div className=" bg-gray-100 flex flex-col">
      <nav className="bg-primary-900 text-white px-16 py-4 shadow-md flex justify-between items-center">
        <div>
          <Link
            to="/"
            className=" hover:text-amber-400 flex  items-center gap-1 w-4 h-4 sm:w-6 sm:h-6 lg:w-6 lg:h-6"
          >
            <img src="public/img/logo-brown-image.png" alt="logo-brown-image" />
            <p className="text-background-100">DailyLean</p>
          </Link>
        </div>
        <ul className="flex gap-20 justify-end">
          <li>
            <Link to="/" className=" hover:text-amber-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" className=" hover:text-amber-400">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/contact" className=" hover:text-amber-400">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/cart" className=" hover:text-amber-400 ">
              <ShoppingCart className="w-4 h-4 sm:w-6 sm:h-6 lg:w-6 lg:h-6" />
            </Link>
          </li>
          <li>
            <Link to="/profile" className=" hover:text-amber-400">
              <User className="w-4 h-4 sm:w-6 sm:h-6 lg:w-6 lg:h-6" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
