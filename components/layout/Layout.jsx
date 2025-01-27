import Image from "next/image";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <main>
      {/* header */}
      <header className="w-full mt-[30px]">
        <div className="header flex justify-between items-center">
          {/* logo site */}
          <div className="logo_header">
            <Image src="/img/logo.png" width={200} height={200} alt="Logo Site" />
          </div>
          {/* menu header */}
          <ul className="menu gap-8 max-lg:gap-5 hidden md:flex text-[20px]">
            <li><Link href="/" className="hover:text-[#8750F7]">صفحه اصلی</Link></li>
            <li><Link href="/" className="hover:text-[#8750F7]"> نمونه کارها</Link></li>
            <li><Link href="#skills" className="hover:text-[#8750F7]">  مهارت ها</Link></li>
            <li><Link href="/" className="hover:text-[#8750F7]">  تماس با من</Link></li>
          </ul>
          {/* number */}
          <div className="number_header">
            <span className="text-[20px]">09339790644</span>
          </div>
        </div>
      </header>
      {/* children */}
      <div className="min-h-[100vh]">{children}</div>
      {/* footer */}
      <footer className="flex justify-center items-center mt-[80px] text-[25px] text-[#303030]"><h1>طراحی شده توسط سجاد حسنی کاخ</h1></footer>
    </main>
  );
};

export default Layout;
