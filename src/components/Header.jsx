import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { NavbarMenu } from "./Navbar/Navbar";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container flex justify-between items-center py-6">
      {/* Logo */}
      <div className="flex items-center gap-2 text-2xl font-bold uppercase">
        <img
          src="/images/favicon.png"
          alt="NexlveDigi logo"
          className="h-8 w-auto"
        />
        <Link to="/">
          <span>NEXLVEDIGI</span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:block">
        <ul className="flex items-center gap-6 text-primary">
          {NavbarMenu.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className="inline-block py-1 px-3 hover:text-secondary font-semibold"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Button */}
      <button
        className="md:hidden text-3xl"
        onClick={() => setOpen(!open)}
      >
        {open ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed top-0 left-0 w-full bg-white z-[9999] md:hidden shadow-lg">
          <ul className="flex flex-col items-center py-4">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="block py-3"
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};