import Image from "next/image";
import NavList from "./NavList";

const Nav = () => {
  const Producst = ["Tadpole", "C1", "Composer"];
  const Company = ["About", "Terms", "Privacy"];
  const Resources = ["Support", "Media Kit", "Downloads", "Newsletter"];
  return (
    <nav className="flex  gap-20 p-4">
      <h1 className="font-bold text-2xl">Opal</h1>
      <div className="hidden md:flex gap-8 p-2">
        <NavList title="Products" Items={Producst} />
        <NavList title="Company" Items={Company} />
        <NavList title="Resources" Items={Resources} />
      </div>

      <div className="justify-self-end">
        <Image
          className=""
          src="/opalLogoBlack.png"
          alt="opal camera logo"
          width={22}
          height={22}
        />
        <input type="text" placeholder="Newsletter" className="text-xl" />
        <h1>here is the input box</h1>
      </div>
    </nav>
  );
};

export default Nav;
