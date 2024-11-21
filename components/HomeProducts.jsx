import ProductCard from "./ProductCard";

const HomeProducts = () => {
  const Products = [
    {
      title: "Tadpole",
      description: "The tiny webcam with a clip",
      priceTag: "Now $149",
      img: "/tadpole.png",
      style:
        "col-span-2 lg:col-span-1 lg:border-r-[1px] border-b-[1px] border-gray-400 border-opacity-50 ",
    },
    {
      title: "Opal C1",
      description: "The first professional webcam",
      priceTag: "$299",
      img: "/camera.png",
      style:
        "col-span-2 md:col-span-1 lg:border-non border-b-[1px] border-gray-400 border-opacity-50 md:border-r-[1px]",
    },
    {
      title: "Composer",
      description: "The magic behind the camera",
      priceTag: "",
      img: "/composer.png",
      style:
        "col-span-2 md:col-span-1   md:border-gray-400 md:border-opacity-50 md:border-b-[1px] border-gray-100",
    },
  ];
  return (
    <div className=" grid grid-cols-2 bg-gray-50 lg:grid-cols-3 mix-blend-difference">
      <ProductCard {...Products[0]} />
      <ProductCard {...Products[1]} />
      <ProductCard {...Products[2]} />
    </div>
  );
};

export default HomeProducts;

// {Products.map((product, idx) => (
//   <ProductCard
//     key={idx}
//     title={product.title}
//     description={product.description}
//     priceTag={product.priceTag}
//     img={product.img}
//   />
// ))}
//
