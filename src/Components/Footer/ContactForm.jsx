import { BiWindowClose } from "react-icons/bi";
import { Button } from "../../Utils";
import styles from "../../style";
import { close } from "../../Assets";

const ContactForm = ({handleCloseForm}) => {
    return (
      <div className="block bg-white shadow-card relative py-[40px] px-[32px]  ">

        <div onClick={handleCloseForm} className=" absolute z-10 top-[16px] smd:hidden right-[16px] bg-red rounded-full w-[42px] h-[42px] flex items-center justify-center ">
            <img src={close} alt="" className="w-[30px] h-[30px] "/>
        </div>

        <div className="header mb-[24px] ">
          <h4 className={`${styles.heading4}`}>Got questions?</h4>
          <p className="font-nunito leading-[24px] text-[14px] md:text-[18px]  ">
            Fill out the form below and we will be in touch within 24hrs.
          </p>
        </div>
        <form>
          <div className=" flex flex-col gap-[24px] ">
            <input
              type="text"
              placeholder="Subject" required
              className="text-gray font-nunito text-[14px] font-normal  rounded-[4px] p-[16px] border border-red w-full outline-none  "
            />
            <input
              type="text"
              placeholder="Full Name" required
              className="text-gray font-nunito text-[14px] font-normal  rounded-[4px] p-[16px] border border-red w-full outline-none  "
            />
            <input
              type="email"
              placeholder="Email" required
              className="text-gray font-nunito text-[14px] font-normal  rounded-[4px] p-[16px] border border-red w-full outline-none  "
            />
            <input
              type="tel"
              placeholder="Phone" required
              className="text-gray font-nunito text-[14px] font-normal  rounded-[4px] p-[16px] border border-red w-full outline-none  "
            />
            <textarea name="" id="" cols="30" rows="6" placeholder="Message" required
            className="text-gray font-nunito text-[14px] font-normal  rounded-[4px] p-[16px] border border-red w-full outline-none  "></textarea>
            <Button
            type={"submit"}
            title={"Submit"}
            classname={`${
              styles.image
            } ${"bg-red py-[16px]  font-nunito text-white cursor-pointer w-full text-[16px]  font-normal rounded-[4px] "} `}
          />
          </div>
        </form>
      </div>
    );
}
 
export default ContactForm;