import Link from "next/link";

const FooterList = ({ title, items }) => {
  return (
    <div>
      <p className="text-sm mb-2 text-gray-400">{title}</p>
      <div className="text-xs flex flex-col gap-2 cursor-pointer">
        {items.map((item, idx) => (
          <Link
            key={idx}
            className="hover:text-gray-800 text-black hover:opacity-60 "
            href={`/${item.sendTo}`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterList;
