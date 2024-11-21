import { HiOutlineArrowRight } from "react-icons/hi2";
import Link from "next/link";
import Copyright from "./Copyright";

const FooterNewsLetter = () => {
  return (
    <div className="hidden md:flex flex-col gap-4 justify-start ">
      <h1 className="text-xl font-bold">
        Subscribe to the <br /> Opal Newsletter
      </h1>
      <p className="text-xs text-gray-400 ">
        Latest news, musings, announcements <br className="h-[5px]" /> and
        updates direct to your inbox.
      </p>
      <Link
        href="/news-letter"
        className="transition-all duration-300 delay-75 ease-in-out hover:bg-gradient-to-r hover:from-yellow-300 hover:to-yellow-400 hover:text-black text-white bg-black   w-28  py-1 rounded-3xl flex justify-end pr-2 hover:pr-8"
      >
        <HiOutlineArrowRight size={30} />
      </Link>
    </div>
  );
};

export default FooterNewsLetter;
