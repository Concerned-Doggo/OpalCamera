import Image from "next/image";
import OpalButton from "./OpalButton";

const ProductCard = ({ title, description, priceTag, img }) => {
  return (
    <div className="flex flex-col gap-4 justify-center align-center">
      <h1>{title}</h1>
      <p>{description}</p>
      {priceTag.length > 0 ? <OpalButton>{priceTag}</OpalButton> : <></>}
      <Image src={`${img}`} width={200} height={200} alt={title} />
    </div>
  );
};

export default ProductCard;
