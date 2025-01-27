import Resumedetlis from "@/components/module/resumedetlis/Resumedetlis";
import React from "react";

const Resume = () => {
  
  return (
    <div className="w-full  mt-[80px] md:mt-[100px]" id="resume">
      {/* title skills */}
      <div className="title_skills flex  justify-center items-center">
        <h1 className="text-[35px]"> رزومه من</h1>
      </div>
      {/* content resume */}
      <div className="content_resume w-full  mt-10">
        <Resumedetlis/>
      </div>
    </div>
  );
};

export default Resume;
