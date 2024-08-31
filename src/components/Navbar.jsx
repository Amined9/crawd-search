"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer l'état du menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="h-22 bg-blue-50 shadow-lg shadow-sky-200/50 pt-4 pb-2">
      <div className="flex flex-row justify-between items-center max-w-[1200px] px-6 sm:mx-auto">
        {/* Logo */}
        <div >
          <a href="/" className="inline-flex space-x-2">
            <Image src={`/search_632815.png`} width="32" height="32" alt="Logo" />
            <span className="text-xl font-sans font-semibold mt-1">Crawder</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:flex-row md:space-x-6">
          <ul className="flex space-x-4">
            <li><a href="/about" className="hover:text-blue-700">About</a></li>
            <li><a href="/pricing" className="hover:text-blue-700">Pricing</a></li>
          </ul>
          <a href="/login">
            <button type="button"  class="text-white bg-blue-700 hover:bg-blue-800  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 -mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</button>
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {/* Icône hamburger */}
              <Image src={`/hamburger-svgrepo-com.svg`} width="24" height="24" alt="Menu" />
            </button>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/about" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="/pricing" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Pricing</a>
          <a href="/login" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Login</a>
        </div>
      </div>
    </nav>
  );
}
