import { FaBriefcase } from "react-icons/fa";

const Job = () => {
  return (
    <div className="job">
      <div className="title_job flex items-center gap-2">
        <FaBriefcase className="text-orange-300 text-[55px] border-2 rounded-[100%] p-3 border-orange-300" />
        <h1 className="text-[20px]">سوابق شغلی</h1>
      </div>
      <div className="content_job flex flex-col mt-4">
        <div className="flex flex-col">
          <h1 className="text-[20px]">*طراحی سایت آزمایشگاه ژنتیک</h1>
          <span className="text-[#999] text-[18px] mt-2">
            آزمایشگاه ژنتیک دکتر صالح گوهری
          </span>
        </div>
        <div className="flex flex-col mt-8">
          <h1 className="text-[20px]">*طراحی سایت developmart</h1>
          <span className="text-[#999] text-[18px] mt-2">
            وب سایت تیم developmart
          </span>
        </div>
      </div>
    </div>
  );
};

export default Job;
