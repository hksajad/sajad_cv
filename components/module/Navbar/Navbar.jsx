import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { FaBloggerB } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="navbar w-[100%]  max-lg:mt-4 max-lg:pb-4 lg:w-[72px] bg-[#303030] flex justify-center items-center max-md:gap-6 gap-[65px] lg:gap-[30px] lg:flex-col  rounded-md lg:py-3">
      <ul className="max-lg:mt-5">
        <Link href="#about" className="flex flex-col justify-center items-center">
          <FaUser  className="text-orange-300"/>
          <h1 className="text-orange-300 pt-1">درباره من</h1>
        </Link>
      </ul>
      <ul className="mt-5">
        <Link href="#resume" className="flex flex-col justify-center items-center">
          <CiViewList/>
          <h1 className="pt-1">رزومه</h1>
        </Link>
      </ul>
      <ul className="mt-5">
        <Link href="#project" className="flex flex-col justify-center items-center">
          <FaEye/>
          <h1 className="pt-1">پروژه ها</h1>
        </Link>
      </ul>
      <ul className="mt-5">
        <Link href="/" className="flex flex-col justify-center items-center">
          <FaBloggerB/>
          <h1 className="pt-1">بلاگ</h1>
        </Link>
      </ul>
      <ul className="mt-5">
        <Link href="/" className="flex flex-col justify-center items-center">
          <FaPaperPlane/>
          <h1 className="pt-1">ارتباط با من</h1>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
