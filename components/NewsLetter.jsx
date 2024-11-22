import { HiOutlineArrowRight } from "react-icons/hi2";

const NewsLetter = () => {
  return (
    <div className="hidden lg:block ">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Newsletter"
          className="text-xl bg-transparent transition delay-500 ease-in-out hover:border-b-2 focus:border-b-2  hover:border-gray-300  duration-300  outline-none ring-0"
        />

        <button className="transition-all duration-300 delay-75 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-400 bg-gray-50 bg-opacity-10 text-white w-28  py-2 rounded-3xl flex justify-end pr-2 hover:pr-8">
          <HiOutlineArrowRight
            size={30}
            className="hover:left-1/3 transition-all duration-300 delay-75 ease-in-out"
          />
        </button>
      </div>
      <p className="text-xs italic mt-4 opacity-70">
        By signing up, I agree with the data protection policy of Opal.
      </p>
    </div>
  );
};

export default NewsLetter;
