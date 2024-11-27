import Image from "next/image";
import HeroText from "@components/HeroText";
import HomeProducts from "@components/HomeProducts";

export default function HomePageContent() {
  return (
    <>
      <section className="h-screen ">
        <div className="w-full">
          <Image
            className="object-cover"
            src="/HeroBackground.webp"
            fill
            alt="opalCamera"
          />
          <HeroText />
        </div>
      </section>
      <section className="">
        <HomeProducts />
      </section>
    </>
  );
}
