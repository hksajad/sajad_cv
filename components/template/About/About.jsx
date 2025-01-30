import "./About.css";
const About = () => {
  return (
    <div className="flex flex-col py-3 ">
      <div className="title_about px-8">
        <h1 className="text-[30px]">درباره من</h1>
      </div>
      <div className="border border-b-[1px] border-[#505050] mt-3"></div>
      <div className="caption_resume px-8 text-justify text-[20px] leading-8">
        <p className="mt-3">
          من یک برنامه‌نویس فرانت‌اند هستم با بیش از 4 سال تجربه در ساخت
          رابط‌های کاربری جذاب و کاربرپسند. به HTML5، CSS3 ، flexbox ، JavaScript و
          فریمورک‌هایی مانند ReactJs و NextJs مسلط هستم. علاقه‌مند به ایجاد
          تجربه‌های وب تعاملی و بهینه‌سازی عملکرد وب‌سایت‌ها هستم. 
        </p>
        <div className="content_caption_resume flex justify-between  flex-wrap mt-2  lg:w-[390px] gap-2 p-[9px] max-lg:flex-col">
            <span>سن : 24</span>
            <span>محل سکونت : کرمان</span>
            <span>تخصص : برنامه نویس فرانت - اند</span>
            <span>تیم : developmart</span>
            <span>تلفون : 09339790644</span>
            <span>ایمیل : kakh.sajad@gmail.com</span>
        </div>
      </div>
      <div className="border border-b-[1px] border-[#505050] mt-3"></div>
    </div>
  );
};

export default About;
// gap-5 mt-5 max-md:flex-col max-md:gap-5