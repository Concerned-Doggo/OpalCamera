import Link from "next/link";

const OpalButton = ({ children, sendTo, style }) => {
  return (
    <Link
      href={`/${sendTo}`}
      className={`bg-yellow-400 overflow-hidden  py-2 px-5 ${style} text-md mx-auto rounded-3xl`}
    >
      {children}
    </Link>
  );
};

export default OpalButton;
