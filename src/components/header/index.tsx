"use client";
// Import necessary libraries and components
import React, { useState, useEffect, useRef, EventHandler } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { BsShare } from "react-icons/bs";
import Link from "next/link";
import { GoSignIn } from "react-icons/go";
import { MdOutlineDataArray } from "react-icons/md";

// Define the Header component
const Header = () => {
  // State to track whether the drawer is open or not
  const [isOpen, setIsOpen] = useState(false);

  // Define the side list items
  const sideList = [
    {
      icon: <GoSignIn className="text-2xl" />,
      title: "SignIn / SignUp",
      href: "/register",
    },
    {
      icon: <MdOutlineDataArray className="text-2xl" />,
      title: "Create Diagram",
      href: "/create-diagram",
    },
  ];

  // Function to handle drawer toggle
  const handleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // Use effect to handle esc key press and overflow property
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

  const [scroll, setScroll] = useState<number>(0);
  const headerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (scroll > el!.clientHeight) {
      el!.classList.add("bg-black");
    } else {
      el?.classList.remove("bg-black");
    }
  }, [scroll]);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  // Render the header component
  return (
    <header>
      <nav
        ref={headerRef}
        className="flex w-[100lvw] items-center fixed top-0 justify-between px-6 h-16 z-10"
      >
        {/* Drawer toggle button */}
        <div className="flex items-center">
          <button
            className="mr-2"
            aria-label="Open Menu"
            onClick={handleDrawer}
          >
            <HiMenuAlt1 className="text-3xl" />
          </button>
          <span>menu</span>
        </div>

        {/* Nav links */}
        <div className="flex items-center">
          <div className="flex uppercase md:justify-between md:bg-transparent">
            <Link href="/create-diagram">submit a form</Link>
          </div>
        </div>

        {/* Overlay when drawer is open */}
        {isOpen && (
          <div className="z-10 fixed inset-0 transition-opacity">
            <div
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black opacity-50"
              tabIndex={0}
            />
          </div>
        )}

        {/* Drawer content */}
        <aside
          className={`transform top-0 left-0 w-64 bg-black fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <span className="flex w-full items-center p-4 border-b">
            LOGO NAME
          </span>
          {sideList.map(({ icon, title, href }, index) => {
            return (
              <Link
                href={href}
                key={index}
                className="flex items-center p-4 hover:bg-slate-800 hover:text-white"
              >
                <span className="mr-2">{icon}</span> <span>{title}</span>
              </Link>
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
    </header>
  );
};

export default Header;
