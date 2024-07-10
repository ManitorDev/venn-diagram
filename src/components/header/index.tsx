"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { BsShare } from "react-icons/bs";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sideList = [
    {
      icon: <AiOutlineHome className="text-2xl" />,
      title: "item 1",
    },
    {
      icon: <AiOutlineHome className="text-2xl" />,
      title: "item 2",
    },
    {
      icon: <AiOutlineHome className="text-2xl" />,
      title: "item 3",
    },
    {
      icon: <AiOutlineHome className="text-2xl" />,
      title: "item 4",
    },
  ];

  const navList = [
    {
      icon: <AiOutlineHome className="text-2xl mr-2" />,
      title: "item",
    },
    {
      icon: <AiOutlineHome className="text-2xl" />,
      title: "",
    },
    {
      icon: <AiOutlineHome className="text-2xl" />,
      title: "",
    },
  ];

  const handleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleEscKeyPress = (e: any) => {
      if (e.keyCode === 27 && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.setProperty("overflow", "hidden");
    } else {
      document.body.style.removeProperty("overflow");
    }

    document.addEventListener("keydown", handleEscKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, [isOpen]);

  return (
    <nav className="flex  w-full items-center justify-between px-6 h-16 z-10">
      <div className="flex items-center">
        <button className="mr-2" aria-label="Open Menu" onClick={handleDrawer}>
          <HiMenuAlt1 className="text-3xl" />
        </button>

        <span>menu</span>
      </div>

      <div className="flex items-center">
        <div className="flex uppercase md:justify-between md:bg-transparent">
          <Link href="/">submit a form</Link>
        </div>
      </div>

      {isOpen && (
        <div className="z-10 fixed inset-0 transition-opacity">
          <div
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black opacity-50"
            tabIndex={0}
          ></div>
        </div>
      )}

      <aside
        className={`transform top-0 left-0 w-64 bg-black fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <span className="flex w-full items-center p-4 border-b">LOGO NAME</span>
        {sideList.map(({ icon, title }, index) => {
          return (
            <span
              key={index}
              className="flex items-center p-4 hover:bg-slate-800 hover:text-white"
            >
              <span className="mr-2">{icon}</span> <span>{title}</span>
            </span>
          );
        })}
        <div className="fixed bottom-0 w-full">
          <button className="flex items-center p-4 text-white bg-slate-600 hover:bg-slate-800 duration-300 w-full">
            <span className="mr-2">
              <BsShare className="text-2xl" />
            </span>

            <span>Share</span>
          </button>
        </div>
      </aside>
    </nav>
  );
};

export default Header;
