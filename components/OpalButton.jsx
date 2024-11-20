import Link from "next/link";

const OpalButton = ({ children, sendTo }) => {
  return (
    <Link
      href={`/${sendTo}`}
      className="bg-yellow-400 py-2 px-5 text-md mx-auto md:mx-0 rounded-3xl"
    >
      {children}
    </Link>
  );
};

export default OpalButton;
