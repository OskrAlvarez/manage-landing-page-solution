import { useState } from "react";
import { CloseIcon, HamburgerIcon } from "./Icons";
import { NavItems } from "./NavItems";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between p-6">
      <div>
        <img src="./svgs/logo.svg" alt="Logo" />
      </div>
      <div className="hidden md:flex space-x-6">
        <a href="#" className="font-vietnanPro text-darkBlue text-sm hover:text-darkGrayishBlue">
          Pricing
        </a>
        <a href="#" className="font-vietnanPro text-darkBlue  text-sm hover:text-darkGrayishBlue">
          Product
        </a>
        <a href="#" className="font-vietnanPro text-darkBlue  text-sm hover:text-darkGrayishBlue">
          About Us
        </a>
        <a href="#" className="font-vietnanPro text-darkBlue  text-sm hover:text-darkGrayishBlue">
          Careers
        </a>
        <a href="#" className="font-vietnanPro text-darkBlue  text-sm hover:text-darkGrayishBlue">
          Community
        </a>
      </div>

      <a class="hidden md:block cursor-pointer hover:bg-brightRedLight bg-brightRed text-white rounded-full px-6 py-3 shadow-md font-vietnanPro font-bold">
        Get Started
      </a>
      <button
        onClick={() => setIsOpen((prevState) => !prevState)}
        className="cursor-pointer rounded-full p-3 md:hidden"
      >
        {isOpen ? <CloseIcon /> : <HamburgerIcon />}
      </button>
      { isOpen ? <NavItems /> : '' }
    </nav>
  );
}
