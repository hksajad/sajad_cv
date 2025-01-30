import Education from "@/components/module/Education/Education";
import Job from "@/components/module/Work_job/Job";

const Resume = () => {
  return (
    <div className="resume" id="resume">
      <div className="title_resume px-8">
        <h1 className="text-[30px]">رزومه من</h1>
      </div>
      <section className="resume_content mt-5 w-full px-8 flex">
        <div className="education  w-[50%] ">
            <Education/>
        </div>
        <div className="work  w-[50%]">
            <Job/>
        </div>
      </section>
      <div className="border border-b-[1px] border-[#505050] mt-3"></div>
    </div>
    
  );
};

export default Resume;
