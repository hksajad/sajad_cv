import Education from "@/components/module/Education/Education";
import Job from "@/components/module/Work_job/Job";

const Resume = () => {
  return (
    <div className="resume mt-3" id="resume">
      <div className="title_resume px-8">
        <h1 className="text-[30px]">رزومه من</h1>
      </div>
      <section className="resume_content mt-5 w-full px-8 flex max-md:flex-col">
        <div className="education  w-[50%]  max-md:w-full">
            <Education/>
        </div>
        <div className="work  w-[50%] max-md:w-full max-md:mt-5">
            <Job/>
        </div>
      </section>
      <div className="border border-b-[1px] border-[#505050] mt-3"></div>
    </div>
    
  );
};

export default Resume;
