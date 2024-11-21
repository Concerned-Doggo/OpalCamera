import NavList from "./NavList";
import NavListSVG from "./NavListSVG";
import NewsLetter from "./NewsLetter";

const Nav = () => {
  const Producst = ["Tadpole", "C1", "Composer"];
  const Company = ["About", "Terms", "Privacy"];
  const Resources = ["Support", "Media Kit", "Downloads", "Newsletter"];

  return (
    <nav className="z-10 fixed top-0 left-0 w-full flex text-gray-100 gap-20 p-4 pointer-events-auto mix-blend-difference border-b-[1px] border-gray-300 border-opacity-50 md:border-none">
      <h1 className="font-bold text-2xl">Opal</h1>

      <NavListSVG />

      <div className="hidden md:flex gap-12 p-2">
        <NavList title="Products" Items={Producst} />
        <NavList title="Company" Items={Company} />
        <NavList title="Resources" Items={Resources} />
      </div>

      <div className="absolute md:right-[10%] right-10 flex flex-col gap-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 30 24"
          className="w-[30px] deep:fill-black"
          data-sentry-element="IconLogo"
          data-sentry-source-file="MobileNav.tsx"
        >
          <g clipPath="url(#logotype_svg__a)">
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M21.96 5.306A12 12 0 0 0 11.398.014C5.191.318.178 5.447.005 11.66-.182 18.443 5.26 23.999 12 23.999c4.15 0 7.807-2.107 9.96-5.306l-9.813-6.416a.333.333 0 0 1 0-.554l9.813-6.415A11.92 11.92 0 0 1 24 11.998c0 2.48-.75 4.78-2.04 6.694l7.52 5.249c.223.147.52-.01.52-.277V.334a.333.333 0 0 0-.52-.277z"
              clipRule="evenodd"
            ></path>
          </g>
          <defs>
            <clipPath id="logotype_svg__a">
              <path fill="#fff" d="M0 0h30v24H0z"></path>
            </clipPath>
          </defs>
        </svg>
        <NewsLetter />
      </div>
    </nav>
  );
};

export default Nav;
