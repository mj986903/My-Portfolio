import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import Navlinks from "../data/navlinks";
import ProfileData from "../data/profile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-white body-font fixed inset-x-0 z-50 bg-darkblue">
      <div className="mx-auto py-2 px-5 flex flex-row justify-between lg:justify-around items-center lg:py-3">
        <Link
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-once="false"
          to="/"
          className="flex justify-center items-center w-fit ml-10"
        >
          <img
            className="w-12 h-12 ml-3 cursor-pointer scale-125 lg:scale-150"
            src={ProfileData.logo}
            alt={ProfileData.name}
          />
        </Link>

        {/* Desktop Menu */}
        <nav
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-once="false"
          className="hidden lg:flex flex-wrap items-center text-lg justify-between gap-12 ml-auto mr-10"
        >
          {Navlinks.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="cursor-pointer hover:text-dark-orange"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden ml-auto mr-6 z-50" onClick={toggleMenu}>
          {isMenuOpen ? (
            <MdClose className="text-3xl cursor-pointer" />
          ) : (
            <BiMenu className="text-3xl cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-darkblue absolute top-16 left-0 w-full flex flex-col items-center gap-6 py-6 shadow-lg z-40">
          {Navlinks.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="cursor-pointer text-lg hover:text-dark-orange"
              onClick={toggleMenu}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;