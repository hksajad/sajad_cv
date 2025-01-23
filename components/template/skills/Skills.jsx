import Image from "next/image";

const Skills = () => {
  const dataskill = [
    { id: 1, icon: "/img/figma_skill.png", caption: "30%", title: "Figma" },
    { id: 1, icon: "/img/js_skill.png", caption: "100%", title: "Js" },
    { id: 1, icon: "/img/react_skill.png", caption: "80%", title: "React" },
    { id: 1, icon: "/img/next_skill.png", caption: "60%", title: "Next" },
  ];
  return (
    <div className="w-full  mt-[80px] md:mt-[100px]" id="skills">
      {/* title skills */}
      <div className="title_skills flex flex-col justify-center items-center">
        <h1 className="text-[35px]">مهارت های من</h1>
        <p className="text-[#303030] text-[22px]">
          و کماکان در جستجوی دانش های جدید...
        </p>
      </div>
      {/* content skills */}
      <div className="content_skill w-full mt-10">
        <section className="skills flex justify-between items-center flex-col md:flex-row">
          {dataskill.map((index) => (
            <div key={index.id} className="skill_box flex flex-col justify-center items-center bg-[#fff] shadow-xl max-md:m-3 w-full md:w-[230px] py-5 rounded-lg  cursor-pointer">
              <Image src={index.icon} width={100} height={100} alt="Images Skills"/>
              <span className="text-[#303030] text-[30px] font-bold pt-8">
                {index.caption}
              </span>
              <h1 className="text-[#303030] text-[25px]  pt-8">{index.title}</h1>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Skills;
