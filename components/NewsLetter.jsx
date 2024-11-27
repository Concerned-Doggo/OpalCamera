"use client";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// <button
//     className={`transition-all duration-300 delay-75 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-400 bg-gray-50 bg-opacity-10 text-white w-28  py-2 rounded-3xl flex justify-end pr-2 hover:pr-8 ${isVisible ? "opacity-100" : "opactiy-0"}`}
// >
//     <HiOutlineArrowRight
//         size={30}
//         className="hover:left-1/3 transition-all duration-300 delay-75 ease-in-out"
//     />
// </button>

const NewsLetter = ({ isVisible }) => {
  // const [isVisible, setIsVisible] = useState(false);
  // const buttonRef = useRef(null);
  //
  // useEffect(() => {
  //     const observer = new IntersectionObserver(
  //         ([entry]) => {
  //             setIsVisible(entry.intersectionRatio > 0.6); // Only show if 60% of the button is visible
  //         },
  //         {
  //             threshold: Array.from({ length: 10 }, (_, i) => i / 10), // Thresholds from 0.0 to 1.0
  //         },
  //     );
  //
  //     if (buttonRef.current) observer.observe(buttonRef.current);
  //
  //     return () => {
  //         if (buttonRef.current) observer.unobserve(buttonRef.current);
  //     };
  // }, [isVisible]);
  return (
    <div className="hidden lg:block ">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Newsletter"
          className="text-xl bg-transparent transition delay-500 ease-in-out hover:border-b-2 focus:border-b-2  hover:border-gray-300  duration-300  outline-none ring-0"
        />

        {/*why the renderring? why tho? */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeIn" }}
          className="transition-background duration-300 delay-75 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-400 bg-gray-50 bg-opacity-10 text-white w-28  py-2 rounded-3xl flex justify-end pr-2 hover:pr-8"
        >
          <HiOutlineArrowRight
            size={30}
            className="hover:left-1/3 transition-all duration-300 delay-75 ease-in-out"
          />
        </motion.button>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeIn" }}
        className="text-xs italic mt-4"
      >
        By signing up, I agree with the data protection policy of Opal.
      </motion.p>
    </div>
  );
};

export default NewsLetter;
