"use client";

import { sideNav } from "@/constants";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export const DesktopNav = () => {
  return (
    <div className=" h-screen lg:w-[300px]  z-[1000] pt-[120px] border-r border-r-[#DCDEE6] hidden lg:flex fixed top-0">
      <SideNav />
    </div>
  );
};

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden pt-[30px]">
      <button
        className="fixed top-4 right-4 z-[100000] text-2xl  p-2 rounded"
        onClick={toggleNavbar}
      >
        {isOpen ? (
          <X size={24} color="black" strokeWidth={3} />
        ) : (
          <Menu size={24} color="black" strokeWidth={3} />
        )}
      </button>
      <div
        className={`fixed top-0 right-0 h-full w-64 shadow-sm bg-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-40`}
      >
        <nav className="mt-20 flex flex-col items-center">
          <SideNav/>
       
        </nav>
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={toggleNavbar}
      ></div>
    </div>
  );
};

const SideNav = () => {
  const pathname = usePathname();

  return (
    <div className="w-full">
      <div className="pr-3">
        {sideNav.map((item) => (
          <Link
            href={item.path}
            className={`flex gap-3 p-5 font-bold ${
              pathname.includes(item.path)
                ? "text-blue-800 bg-slate-50 rounded-tr-full rounded-br-full"
                : ""
            }`}
            key={item.text}
          >
            {item.icon}
            <span>{item.text}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
