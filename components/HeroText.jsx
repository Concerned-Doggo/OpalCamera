import OpalButton from "./OpalButton";
const HeroText = () => {
  return (
    <div className="lg:left-[10%] md:left-[35%] sm:left-1/3 left-1/4 top-1/3 absolute no-wrap">
      <h1 className="text-3xl text-center md:text-start mb-12 text-gray-100 ">
        The first webcam <br /> designed for laptops.
      </h1>
      <OpalButton sendTo={"opal-tadpole"} style={"mx-auto ml-30  "}>
        Available now for $149.
      </OpalButton>
    </div>
  );
};

export default HeroText;
