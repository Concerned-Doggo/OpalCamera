import { HiOutlineArrowRight } from "react-icons/hi2";
import Image from "next/image";
import NavList from "./NavList";
import NavListSVG from "./NavListSVG";

const Nav = () => {
  const Producst = ["Tadpole", "C1", "Composer"];
  const Company = ["About", "Terms", "Privacy"];
  const Resources = ["Support", "Media Kit", "Downloads", "Newsletter"];

  return (
    <nav className="flex text-gray-100 gap-20 p-4  border-b-[1px] border-gray-300 border-opacity-50 md:border-none">
      <h1 className="font-bold text-2xl">Opal</h1>

      <NavListSVG />

      <div className="hidden md:flex gap-8 p-2">
        <NavList title="Products" Items={Producst} />
        <NavList title="Company" Items={Company} />
        <NavList title="Resources" Items={Resources} />
      </div>

      <div className="absolute md:right-[10%] right-10 flex flex-col gap-10">
        <Image
          className=""
          src="/opalLogoBlack.png"
          alt="opal camera logo"
          width={22}
          height={22}
        />

        <div className="hidden lg:block">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Newsletter"
              className="text-xl bg-transparent border-gray-300 border-b-2"
            />

            <button className="hover:bg-blue-500 bg-gray-50 bg-opacity-10 text-white w-28  py-2 rounded-3xl pl-16 hover:pl-12 flex justify-end pr-2 hover:pr-8">
              <HiOutlineArrowRight size={30} className="" />
            </button>
          </div>
          <p className="text-xs italic mt-4 opacity-70">
            By signing up, I agree with the data protection policy of Opal.
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
