import Image from "next/image";
import "./Header.css";
const Header = () => {
  return (
    <div className="Header bg-[#303030] w-full md:w-[40%] rounded-md">
      <div className="content_header flex flex-col">
        <div className="img_gif_header">
          <Image
            src="/img/mp4.about.gif"
            width={100}
            height={100}
            className="w-full"
            alt="programmer gif"
          />
        </div>
        <div className="content_header flex flex-col justify-center items-center pb-3">
            <Image src="/img/img_about.png" width={150} height={150} className="rounded-[100%] mt-[-5rem]"/>
            <h1 className="mt-5 text-[40px]">سجاد حسنی کاخ</h1>
            <p className="mt-2 text-[20px] text-orange-300">توسعه دهنده + برنامه نویس</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
