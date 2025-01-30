import Image from "next/image";
import "./Work.css";
const Work = () => {
  return (
    <div>
      <div className="title_work px-8">
        <h1 className="text-[30px]">مهارت من</h1>
      </div>
      <div className="skills px-8 mt-3 flex max-md:justify-between justify-center items-center flex-wrap gap-14 max-md:gap-5">
        <div className="skill flex flex-col items-center">
          <Image src="/img/js_skill.png" width={100} height={100} />
          <p className="text-[20px] mt-2">Javascript</p>
        </div>
        <div className="skill flex flex-col items-center">
          <Image src="/img/next_skill.png" width={100} height={100} />
          <p className="text-[20px] mt-2">Next.js</p>
        </div>
        <div className="skill flex flex-col items-center">
          <Image src="/img/react_skill.png" width={100} height={100} />
          <p className="text-[20px] mt-2">React.js</p>
        </div>
        <div className="skill flex flex-col items-center">
          <Image src="/img/figma_skill.png" width={100} height={100} />
          <p className="text-[20px] mt-2">Figma</p>
        </div>
        <div className="skill flex flex-col items-center">
          <Image src="/img/html_skill.webp" width={100} height={100} />
          <p className="text-[20px] mt-2">Html</p>
        </div>
        <div className="skill flex flex-col items-center">
          <Image src="/img/tailwind_css.png" width={100} height={100} />
          <p className="text-[20px] mt-2">Tailwind </p>
        </div>
      </div>
      <div className="border border-b-[1px] border-[#505050] mt-3"></div>
    </div>
  );
};

export default Work;
