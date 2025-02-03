import Header from "@/components/module/Header/Header";
import Navbar from "@/components/module/Navbar/Navbar";
import About from "@/components/template/About/About";
import Work from "@/components/template/Work/Work";
import './Hero.css'
import Resume from "@/components/template/resume/Resume";
import Degree from "@/components/template/degree/Degree";
import Contact from "@/components/template/contact/Contact";
const Hero = () => {
  return (
    <div className="hero w-full flex flex-col lg:flex-row lg:justify-center lg:items-center gap-3">
      {/* start navbar */}
      <Navbar />
      {/* content fixed page hero */}
      <Header/>
      {/* section page */}
      <div className="section_page bg-[#303030] w-full lg:w-[60%] rounded-md lg:h-[465px]  lg:overflow-y-auto">
        <About/>
        <Work/>
        <Resume/>
        <Degree/>
        <Contact/>
        {/* footer */}
      <footer className="my-5 text-center">
        <h1 className="text-[20px] font-bold text-[#999]">طراحی شده توسط سجاد حسنی کاخ</h1>
      </footer>
      </div>
      
    </div>
  );
};

export default Hero;
