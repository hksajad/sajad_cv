import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <div className="edu">
      <div className="title_education flex items-center gap-2">
        <FaGraduationCap className="text-orange-300 text-[55px] border-2 rounded-[100%] p-3 border-orange-300" />
        <h1 className="text-[20px]">سوابق تحصیلی</h1>
      </div>
      <div className="content_edu flex flex-col mt-4">
        <div className="flex flex-col">
            <h1 className="text-[20px]">*دیپلم علوم تجربی</h1>
            <span className="text-[#999] text-[18px] mt-2">مدرسه فرهنگیان بندرعباس</span>
        </div>
        <div className="flex flex-col mt-8">
            <h1 className="text-[20px]">*کارشناسی مهندسی نرم افزار</h1>
            <span className="text-[#999] text-[18px] mt-2">دانشگاه آزاد کرمان</span>
        </div>
      </div>
    </div>
  );
};

export default Education;
