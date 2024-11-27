import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const NavList = ({ style = "", title, Items, scrolled = false }) => {
    return (
        <div>
            <p className="font-semibold text-sm mb-2 relative group">{title}</p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={!scrolled ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={` text-sm flex flex-col gap-2 cursor-pointer text-gray-300 group-hover:block ${scrolled ? "hidden" : ""}`}
            >
                {Items.map((item, idx) => (
                    <Link
                        key={idx}
                        className={`${style.length > 0 ? style : "hover:text-white"} block   opacity-60  hover:opacity-100`}
                        href={`/${item}`}
                    >
                        {item}
                    </Link>
                ))}
            </motion.div>
        </div>
    );
};

export default NavList;
