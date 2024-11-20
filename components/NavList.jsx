import React from "react";

const NavList = ({ title, Items }) => {
  return (
    <div>
      <p className="font-semibold text-md">{title}</p>
      <div className="text-sm flex flex-col gap-2 cursor-pointer text-gray-300">
        {Items.map((item, idx) => (
          <div key={idx} className="hover:text-white">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavList;
