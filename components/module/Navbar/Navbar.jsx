import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { FaBloggerB } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="navbar w-[100%] m-auto md:w-[72px] bg-[#303030] flex justify-center items-center gap-6 md:gap-0 md:flex-col py-3 rounded-md">
      <ul className="max-md:mt-5">
        <Link href="/" className="flex flex-col justify-center items-center">
          <FaUser  className="text-orange-300"/>
          <h1 className="text-orange-300 pt-1">درباره من</h1>
        </Link>
      </ul>
      <ul className="mt-5">
        <Link href="/" className="flex flex-col justify-center items-center">
          <CiViewList/>
          <h1 className="pt-1">رزومه</h1>
        </Link>
      </ul>
      <ul className="mt-5">
        <Link href="/" className="flex flex-col justify-center items-center">
          <FaEye/>
          <h1 className="pt-1">رزومه</h1>
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
