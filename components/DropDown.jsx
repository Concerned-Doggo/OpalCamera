import NavList from "./NavList";

const DropDown = ({ Products, Company, Resources }) => {
  return (
    <div className="isolate z-10 bg-white text-black">
      <div className="absolute md:left-[220px] md:top-[10px] top-1 left-0 bg-white min-w-[300px] max-w-[600px] text-gray-900">
        <div className={`  flex gap-12 p-2 `}>
          <NavList title={"Products"} Items={Products} />
          <NavList title={"Company"} Items={Company} />
          <NavList title={"Resources"} Items={Resources} />
        </div>
      </div>
    </div>
  );
};

export default DropDown;
