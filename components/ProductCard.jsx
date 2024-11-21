import Image from "next/image";
import OpalButton from "./OpalButton";

const ProductCard = ({ title, description, priceTag, img, style = "" }) => {
  return (
    <div
      className={`flex flex-col gap-4 pt-20 min-h-[450px] w-full text-center justify-start align-center  ${style}`}
    >
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-sm text-gray-500">{description}</p>
      {priceTag.length > 0 ? <OpalButton>{priceTag}</OpalButton> : <></>}
      <Image
        src={`${img}`}
        className="mx-auto"
        width={200}
        height={200}
        alt={title}
      />
    </div>
  );
};

export default ProductCard;
