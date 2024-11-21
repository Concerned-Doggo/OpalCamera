import { HiOutlineArrowRight } from "react-icons/hi2";
import Link from "next/link";

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
        className="text-white pr-[5px] bg-black hover:text-black transition duration-300 ease-in-out  hover:justify-center hover:bg-yellow-300 rounded-3xl w-28 py-1 flex justify-end"
      >
        <HiOutlineArrowRight size={30} />
      </Link>
    </div>
  );
};

export default FooterNewsLetter;
