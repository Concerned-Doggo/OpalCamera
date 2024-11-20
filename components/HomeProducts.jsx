import ProductCard from "./ProductCard";

const HomeProducts = () => {
  const Products = [
    {
      title: "Tadpole",
      description: "The tiny webcam with a clip",
      priceTag: "Now $149",
      img: "/tadpole.png",
    },
    {
      title: "Opal C1",
      description: "The first professional webcam",
      priceTag: "$299",
      img: "/camera.png",
    },
    {
      title: "Composer",
      description: "The magic behind the camera",
      priceTag: "",
      img: "/Opal.png",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {Products.map((product, idx) => (
        <ProductCard
          key={idx}
          title={product.title}
          description={product.description}
          priceTag={product.priceTag}
          img={product.img}
        />
      ))}
    </div>
  );
};

export default HomeProducts;
