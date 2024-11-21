"use client";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import NavList from "./NavList";
import NavListSVG from "./NavListSVG";
import NewsLetter from "./NewsLetter";
import DropDown from "./DropDown";

const Nav = () => {
  const Products = ["Tadpole", "C1", "Composer"];
  const Company = ["About", "Terms", "Privacy"];
  const Resources = ["Support", "Media Kit", "Downloads", "Newsletter"];

  const [scrolled, setScrolled] = useState(false);
  const [dropDownMenu, setDropDownMenu] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 60) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={` ${scrolled ? "mix-blend-difference " : "bg-transparent"} z-10 fixed top-0 left-0 w-full flex text-gray-100 gap-20 p-4 pointer-events-auto border-b-[1px] border-gray-300 border-opacity-50 md:border-none`}
    >
      <h1 className="font-bold text-2xl">Opal</h1>

      <div onClick={() => setDropDownMenu((prev) => !prev)}>
        <NavListSVG />
      </div>

      <div className="hidden md:flex gap-12 p-2 ">
        <NavList title="Products" Items={Products} scrolled={scrolled} />
        <NavList title="Company" Items={Company} scrolled={scrolled} />
        <NavList title="Resources" Items={Resources} scrolled={scrolled} />
      </div>

      <div className="absolute  right-[10%] flex flex-col gap-10 ">
        <Logo />
        {!scrolled && <NewsLetter />}
      </div>
    </nav>
  );
};

export default Nav;
