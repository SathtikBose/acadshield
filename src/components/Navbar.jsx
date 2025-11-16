"use client";

import React, { useState } from "react";

import {
  Search,
  Globe2,
  MapPin,
  ChevronDown,
  CircleUserRound,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavItem = ({ href = "#", children }) => (
    <a
      href={href}
      className="flex items-center text-gray-700 hover:text-blue-600 transition-colors cursor-pointer py-2"
      onClick={() => setIsMobileMenuOpen(false)}
    >
      {children}
      <ChevronDown className="h-4 w-4 ml-1" />
    </a>
  );

  return (
    <nav className="bg-white p-4 md:px-16 md:py-4  w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:flex flex-col">
          <div className="flex justify-between items-center h-16 border-b border-gray-200">
            <div className="flex items-center space-x-8 flex-1">
              <a
                href="/"
                className="flex items-center space-x-2 cursor-pointer"
              >
                <img
                  src="/icon.png"
                  alt="AcadShield Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
                <span className="font-bold text-2xl text-gray-900">
                  AcadShield
                </span>
              </a>

              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search your document..."
                  className=" text-gray-900 bg-gray-200 rounded-full py-2.5 pl-10 pr-4 w-[98%] focus:outline-none focus:ring-2 focus:ring-blue-500 border border-transparent focus:border-blue-500"
                />
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                <Globe2 className="h-5 w-5 mr-1.5" />
                Region
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>

              <button className="flex items-center text-left">
                <MapPin className="h-6 w-6 mr-2 text-blue-600" />
                <div>
                  <span className="text-xs text-gray-500">Location</span>
                  <div className="font-semibold text-blue-600 flex items-center">
                    India, Jamshedpur
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center h-14">
            <div className="flex items-center space-x-8 font-medium">
              <NavItem href="/">Home</NavItem>
              <NavItem href="/how-it-works">How It Works</NavItem>
              <NavItem href="/contact">Contact</NavItem>
              <NavItem href="/about">About</NavItem>
            </div>

            <div className="flex items-center space-x-4">
              <button
                className="p-2 rounded-full text-gray-600 hover:bg-gray-100 transition-colors"
                type="button"
              >
                <CircleUserRound className="h-7 w-7 text-blue-600" />
              </button>
              <a
                href="/login"
                className="bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer shadow-sm hover:shadow-md"
              >
                Login
              </a>
            </div>
          </div>
        </div>

        <div className="lg:hidden flex justify-between items-center h-20">
          <a href="/" className="flex items-center space-x-2 cursor-pointer">
            <img
              src="/icon.png"
              alt="AcadShield Logo"
              width="36"
              height="36"
              className="h-9 w-9 rounded-full"
            />
            <span className="font-bold text-xl text-gray-900">AcadShield</span>
          </a>

          <div className="flex items-center space-x-3">
            <a
              href="/login"
              className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer text-sm"
            >
              Login
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 text-gray-700 rounded-md hover:bg-gray-100"
              aria-label="Open main menu"
              type="button"
            >
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0   bg-white z-50 p-6 flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <a
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <img
                src="/icon.png"
                alt="AcadShield Logo"
                width="36"
                height="36"
                className="h-9 w-9 rounded-full"
              />
              <span className="font-bold text-xl text-gray-900">
                AcadShield
              </span>
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-gray-700 rounded-md hover:bg-gray-100"
              aria-label="Close main menu"
              type="button"
            >
              <X className="h-8 w-8" />
            </button>
          </div>

          <nav className="flex flex-col space-y-6 text-xl font-medium">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/how-it-works">How It Works</NavItem>
            <NavItem href="/contact">Contact</NavItem>
            <NavItem href="/about">About</NavItem>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
