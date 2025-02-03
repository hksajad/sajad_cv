import { AiFillPhone } from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiInstagram } from "react-icons/ci";
import { FaTelegram } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div className="contact mt-3" id="contact">
        <div className="title_contact flex flex-col px-8">
          <h1 className="text-[30px]">ارتباط با من</h1>
          <p className="text-[#999] mt-1 text-[18px]">از طریق این راه ها میتونید با من در ارتباط باشید.</p>
        </div>
        <div className="content_contact flex justify-between items-center flex-wrap px-8 mt-3 max-md:flex-col">
            <div className="items_contact flex gap-3 items-center w-[50%] max-md:w-full max-md:mt-4">
                <AiFillPhone className="text-orange-300 text-[30px]"/>
                <div className="caption_contact flex flex-col">
                    <h1 className="text-[20px]">شماره تلفن من</h1>
                    <span className="text-[20px] text-[#999]">09339790644</span>
                </div>
            </div>
            <div className="items_contact flex gap-3 items-center w-[50%] max-md:w-full max-md:mt-4">
                <MdOutlineMailOutline className="text-orange-300 text-[30px]"/>
                <div className="caption_contact flex flex-col">
                    <h1 className="text-[20px]"> ایمیل من</h1>
                    <span className="text-[20px] text-[#999]">kakh.sajad@gmail.com</span>
                </div>
            </div>
            <div className="items_contact flex gap-3 items-center w-[50%] max-md:w-full mt-4">
                <CiInstagram className="text-orange-300 text-[30px]"/>
                <div className="caption_contact flex flex-col">
                    <h1 className="text-[20px]"> اینستاگرام من</h1>
                    <span className="text-[20px] text-[#999]">sajad.hk_</span>
                </div>
            </div>
            <div className="items_contact flex gap-3 items-center w-[50%] max-md:w-full mt-4">
                <FaTelegram className="text-orange-300 text-[30px]"/>
                <div className="caption_contact flex flex-col">
                    <h1 className="text-[20px]"> تلگرام من</h1>
                    <span className="text-[20px] text-[#999]">Kakh_shk</span>
                </div>
            </div>
        </div>
      </div>
      <div className="border border-b-[1px] border-[#505050] mt-3"></div>

    </div>
  );
};

export default Contact;
