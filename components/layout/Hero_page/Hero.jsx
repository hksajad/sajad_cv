import Header from "@/components/module/Header/Header";
import Navbar from "@/components/module/Navbar/Navbar";
import About from "@/components/template/About/About";
import Work from "@/components/template/Work/Work";
import './Hero.css'
import Resume from "@/components/template/resume/Resume";
import Project from "@/components/template/Project/Project";
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
        <Project/>
      </div>
    </div>
  );
};

export default Hero;
