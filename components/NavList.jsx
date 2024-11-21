import Link from "next/link";
import React from "react";

const NavList = ({ title, Items }) => {
  return (
    <div>
      <p className="font-semibold text-sm mb-2">{title}</p>
      <div className="text-sm flex flex-col gap-2 cursor-pointer text-gray-300">
        {Items.map((item, idx) => (
          <Link
            key={idx}
            className="hover:text-white   opacity-60  hover:opacity-100"
            href={`/${item}`}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavList;
