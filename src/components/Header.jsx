import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Menu, CircleUser } from "lucide-react";

import {useMessage} from "../context/MessageContext"
import { useAuth } from "../context/AuthContext";

export const Header = () => {
  const { user, logout } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const { orders } = useMessage();

  return (
    <div className="bg-gray-100">
      <nav className="bg-primary-900 text-white px-4 md:px-16 py-4 shadow-md flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/img/logo-brown-image.png"
            alt="logo-brown-image"
            className="w-6 h-6"
          />
          <p className="text-background-100 text-sm sm:text-base">DailyLean</p>
        </Link>

        {/* Hamburger for mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Navigation links */}

        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:items-center absolute md:static top-full left-0 w-full md:w-auto bg-primary-900 text-white z-50 px-4 py-2 md:py-0 gap-4 md:gap-10 text-sm`}
        >
          <li>
            <Link to="/" className="hover:text-amber-400 block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/menuset" className="hover:text-amber-400 block">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-amber-400 block">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/ordersummary" className="hover:text-amber-400 block">
              <div className="hidden md:block relative hover:scale-105 cursor-pointer">
                <ShoppingCart className="inline w-5 h-5" />
                {user && orders.length > 0 && (
                  <p className="absolute -top-1 -right-2 text-xs bg-red-600 rounded-full px-1">
                    {orders.length}
                  </p>
                )}
              </div>
            </Link>
          </li>
          <li>
            {user ? (
              <Link onClick={logout} className="hover:text-amber-400 block">
                <CircleUser className="inline w-5 h-5" />
              </Link>
            ) : (
              <Link to="/login" className="hover:text-amber-400 block">
                <User className="inline w-5 h-5" />
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};
