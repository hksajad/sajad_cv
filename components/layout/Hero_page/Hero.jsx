import Header from "@/components/module/Header/Header";
import Navbar from "@/components/module/Navbar/Navbar";
import About from "@/components/template/About/About";
import Work from "@/components/template/Work/Work";

const Hero = () => {
  return (
    <div className="hero w-full flex flex-col md:flex-row md:justify-center md:items-center gap-3">
      {/* start navbar */}
      <Navbar />
      {/* content fixed page hero */}
      <Header/>
      {/* section page */}
      <div className="section_page bg-[#303030] w-full md:w-[60%]  rounded-md">
        <About/>
        <Work/>
      </div>
    </div>
  );
};

export default Hero;
