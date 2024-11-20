import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="">
        <Image
          style={{
            zIndex: -1,
            objectFit: "cover",
          }}
          src="/opalhero.jpg"
          fill
          alt="opalCamera"
        />
      </div>
    </>
  );
}
