import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="w-full mt-[50px]">
      <div className="hero_page w-full flex justify-between items-center flex-col md:flex-row-reverse md:gap-10">
        {/* img hero */}
        <div className="img_hero md:w-[50%]  border-2  rounded-[20px]">
          <Image src="/img/img-hero.png" alt="Images Hero Page" width={500} height={500} className="md:w-[500px] md:h-[500px]"/>
        </div>
        {/* content hero */}
        <div className="content_hero flex flex-col max-md:justify-center max-md:items-center md:w-[50%]">
          <h1 className="text-[35px]">من سجاد هستم</h1>
          <span className="text-[#303030] text-[40px] md:text-[50px]">برنامه نویس + طراح وب</span>
          <p className=" text-center mt-5 text-[20px] md:text-justify">
            من یک توسعه‌دهنده فرانت‌اند هستم که به ایجاد تجربه‌های کاربری جذاب
            و تعاملی علاقه‌مندم. من با استفاده از HTML، CSS و JavaScript و
            فریمورک‌های مدرنی مانند Nextjs،React، وب‌سایت‌هایی با طراحی زیبا و عملکرد
            بالا می‌سازم.
          </p>
          <div className="social flex gap-3 mt-8">
            <Link href="/" className="bg-[#303030] text-[#fff] px-5 py-5 text-[25px] rounded-lg"><FaInstagram/></Link>
            <Link href="/" className="bg-[#303030] text-[#fff] px-5 py-5 text-[25px] rounded-lg"><FaTelegram/></Link>
            <Link href="/" className="bg-[#303030] text-[#fff] px-5 py-5 text-[25px] rounded-lg"><FaWhatsapp/></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
