import Link from "next/link";

const Resumedetlis = () => {
  return (
    <div className="w-full flex flex-col gap-5 md:flex-row">
      <div className="education bg-[#fff] rounded-lg shadow-xl py-5  md:w-[50%]">
        <h1 className=" px-5 text-[20px] font-bold">سوابق تحصیلی</h1>
      </div>
      <div className="work bg-[#fff] shadow-xl rounded-lg py-5 md:w-[50%]">
        <h1 className=" px-5 text-[20px] font-bold">سوابق شغلی</h1>
      </div>
    </div>
  );
};

export default Resumedetlis;
