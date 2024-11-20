import Image from "next/image";
import HeroText from "@components/HeroText";
import HomeProducts from "@components/HomeProducts";

export default function Home() {
  return (
    <>
      <div className="w-full h-[60vh]">
        <Image
          style={{
            zIndex: -1,
            objectFit: "cover",
          }}
          src="/opalhero.jpg"
          fill
          alt="opalCamera"
        />
        <HeroText />
      </div>

      <HomeProducts />
    </>
  );
}
