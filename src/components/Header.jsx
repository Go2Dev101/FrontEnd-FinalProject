import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Menu } from "lucide-react";

import { useMessage } from "../context/MessageContext";
import { useAuth } from "../context/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Header = () => {
  const { user, logout } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const { carts } = useMessage();

  return (
    <div className="bg-gray-100">
      <nav className="bg-primary-900 text-white px-4 md:px-16 py-4 shadow-md flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            loading="lazy"
            src="https://res.cloudinary.com/dk4pdticm/image/upload/v1757757247/logo-brown-image_l7l9gm.png"
            alt="logo-brown-image"
            className="w-6 h-6"
          />
          <p className="text-background-100 text-sm sm:text-base">DailyLean</p>
        </Link>

        <div className="flex gap-6 items-center">
          {/* Hamburger for mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* menu for mobile */}
          {isOpen && (
            <ul
              className={`
         flex flex-col md:hidden absolute top-full left-0 w-full  bg-primary-900 text-white z-50 px-4 py-2  gap-4  text-sm`}
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
            </ul>
          )}

          {/* menu for desktop */}
          <ul
            className={`flex flex-row items-center top-full left-0 bg-primary-900 text-white z-50 pr-4 gap-6 text-sm`}
          >
            <li className="hidden md:block">
              <Link to="/" className="hover:text-amber-400 block">
                Home
              </Link>
            </li>
            <li className="hidden md:block">
              <Link to="/menuset" className="hover:text-amber-400 block">
                Menu
              </Link>
            </li>

            <li>
              <Link to="/ordersummary" className="hover:text-amber-400 block">
                <div className="relative hover:scale-105 cursor-pointer">
                  <ShoppingCart className="inline w-5 h-5" />
                  {user && carts.length > 0 && (
                    <p className="absolute -top-1 -right-2 text-xs bg-red-600 rounded-full px-1">
                      {carts.length}
                    </p>
                  )}
                </div>
              </Link>
            </li>
            <li>
              {user ? (
                <button onClick={logout} className="hover:text-amber-400 block">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </button>
              ) : (
                <div className="relative ">
                  <User
                    onClick={() => setIsUser(!isUser)}
                    className="inline w-5 h-5 hover:text-amber-400 cursor-pointer"
                  />
                  {isUser && (
                    <div class="absolute -right-8 bg-white p-2 border-1 border-secondary-200 rounded-sm w-22">
                      <ul class="text-secondary-500 flex flex-col gap-1 z-30">
                        <li
                          onClick={() => setIsUser(!isUser)}
                          class="hover:bg-secondary-200 p-1 rounded-sm cursor-pointer"
                        >
                          <Link to="/login">Sign In</Link>
                        </li>
                        <li
                          onClick={() => setIsUser(!isUser)}
                          class="hover:bg-secondary-200 p-1 rounded-sm cursor-pointer"
                        >
                          <Link to="/signup">Sign Up</Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
