import Link from "next/link";
import React from "react";
import './index.css'
const Page = () => {
  return (
    <main>
      <div className="projects">
        <div className="title_projects flex flex-col justify-center items-center mt-[50px] md:mt-[70px]">
          <h1 className="text-[50px]">پروژه های من</h1>
          <div className="links_project flex gap-2 mt-4 text-[17px]">
            <Link href="/" className="text-orange-300">
              صفحه اصلی
            </Link>
            /<span className="text-[#999]">پروژه ها</span>
          </div>
        </div>
        <div className="content_project flex justify-between items-center flex-wrap mt-24 max-lg:gap-5 max-md:mt-16">
          <div className="img_project">
            <img src="/img/IT_APP.png" alt="resume_it" />
          </div>
          <div className="img_project">
            <img src="/img/cosmetic.png" alt="resume_it" />
          </div>
          <div className="img_project">
            <img src="/img/slg.png" alt="resume_it" />
          </div>
          <div className="img_project lg:mt-10">
            <img src="/img/fitness.png" alt="resume_it" />
          </div>
          <div className="img_project lg:mt-10">
            <img src="/img/shop.png" alt="resume_it" />
          </div>
          <div className="img_project lg:mt-10">
            <img src="/img/shoop.png" alt="resume_it" />
          </div>
        </div>
        {/* footer */}
      <footer className="my-5 text-center border-t-2 border-[#999]">
        <h1 className="text-[20px] font-bold text-[#999] mt-5">طراحی شده توسط سجاد حسنی کاخ</h1>
      </footer>
      </div>
    </main>
  );
};

export default Page;
