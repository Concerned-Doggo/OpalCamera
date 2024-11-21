import React from "react";
import Image from "next/image";
import FooterList from "./FooterList";
import FooterItems from "./FooterListData";
import FooterNewsLetter from "./FooterNewsLetter";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-20  pointer-events-auto">
      <div className="p-4">
        <Image
          src={"/OpalBranding.png"}
          width={3000}
          height={3000}
          className="object-contain "
          alt="opal branding"
        />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 w-full space-x-1/4 p-4 mt-2 border-t-[1px] border-gray ">
        <FooterNewsLetter />
        <div className="grid grid-cols-4 col-span-2 md:col-span-1 gap-4 ">
          {FooterItems.map((item, idx) => (
            <FooterList key={idx} {...item} />
          ))}
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
