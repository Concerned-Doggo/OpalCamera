import OpalButton from "./OpalButton";
const HeroText = () => {
  return (
    <div className="md:ml-[10%] mt-[8%]">
      <h1 className="text-3xl text-center md:text-start mb-12 text-gray-100 ">
        The first webcam <br /> designed for laptops.
      </h1>
      <OpalButton sendTo={"opal-tadpole"}>Available now for $149.</OpalButton>
    </div>
  );
};

export default HeroText;
