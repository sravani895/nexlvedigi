import React from "react";
import { NavbarMenu } from "./Navbar/Navbar";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <div className="container flex justify-between items-center py-6">
          {/* logo section */}
          <div className="flex items-center gap-2 text-2xl font-bold uppercase">
            <img src="/images/favicon.png" alt="NexlveDigi logo" className="h-8 w-auto" loading="lazy" />
            <Link to="/">
              <span className="cursor-pointer">NEXLVEDIGI</span>
            </Link>
          </div>
           {/* Menu section */}
           <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-primary">
              {
                NavbarMenu.map((item) => {
                  return (
                    <li key={item.id}><a href={item.link} className="inline-block py-1 px-3 hover:text-secondary font-sans font-semibold duration-300">{item.title}</a></li>
                  )
                })
              }
            </ul>
           </div>
      </div>
    </>
  )
}