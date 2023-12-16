import {
  BsInstagram,
  BsMailbox,
  BsMailbox2,
  BsTelephone,
  BsTwitch,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import { logoDark, message } from "../../Assets";
import { FooterLinks } from "../../Constants";
import styles from "../../style";
import { BiMailSend, BiSolidMessage } from "react-icons/bi";
import ContactForm from "./ContactForm";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const FooterContent = () => {
  const [isContactFormVisible, setIsContactFormVisible] = useState(false);

  const toggleContactForm = () => {
    setIsContactFormVisible((prevState) => !prevState);
  };

  return (
    <footer
      className={`  bg-dark py-[64px] mt-[109px] lg:mt-[149px] md:py-[70px] lg:py-[90px] ${styles.padding}`}
    >
      <div className={`${styles.boxWidth} relative`}>
        <div className="hidden smd:block absolute contact-form lg:top-[-250px] z-10 lg:right-0 right-[-20px] top-[-150px] contact-form w-[311px] ss:w-[415px] h-[574px] md:w-[415px] md:h-[689px] ">
          <ContactForm handleCloseForm={toggleContactForm} />
        </div>
        {isContactFormVisible && (
          <div className="absolute contact-form lg:top-[-250px] z-10 lg:right-0 right-[-20px] top-[-150px] contact-form w-[311px] ss:w-[415px] h-[574px] md:w-[415px] md:h-[689px] ">
            <ContactForm handleCloseForm={toggleContactForm} />
          </div>
        )}
        <div
          className="absolute lg:hidden message-icon top-[-136px] md:hidden right-[-5px] bg-red rounded-full w-[42px] h-[42px] flex items-center justify-center"
          onClick={toggleContactForm}
        >
          <img src={message} alt="" />
        </div>
        <div className="flex flex-col lg:flex-row gap-[16px]  lg:w-fit  lg:gap-[15px] xlg:gap-[28px] xl:gap-[50px] ">
          <div className="footer-logo">
            <img src={logoDark} alt="" />
          </div>
          <hr className="text-black" />
          <div className="help-information my-[16px] ">
            <h4 className={`${styles.heading4} text-white `}>
              Help & Information
            </h4>
            <div className="mt-[16px]">
              {FooterLinks.map((foot, index) => (
                <ul>
                  <li className="font-nunito font-normal text-gray leading-[40px] ">
                    <NavLink to={foot.to}>{foot.text}</NavLink>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <hr className="text-black" />
          <div className="contact my-[16px] ">
            <h4 className={`${styles.heading4} text-white `}>Contact</h4>
            <div className="flex flex-col gap-[16px] my-[16px] md:mt-[24px]">
              <p className="flex flex-row text-gray items-center gap-[8px]">
                <span className="text-[16px]  ">
                  <BsTelephone />
                </span>
                <span className="text-[14px] ss:text-[15px] ">
                  (+234) 816 513 2356
                </span>
              </p>
              <p className="flex flex-row text-gray items-center gap-[8px]">
                <span className="text-[16px] ">
                  <BsWhatsapp />
                </span>
                <span className="text-[14px] ss:text-[15px] ">
                  (+234) 701 348 9211
                </span>
              </p>
              <p className="flex flex-row text-gray items-center gap-[8px]">
                <span className="text-[16px]  flex flex-row  gap-[9px]">
                  <Link
                    target="_blank"
                    to={"https://instagram.com/tribalprintng"}
                  >
                    <BsInstagram />
                  </Link>{" "}
                  <Link
                    target="_blank"
                    to={"https://twitter.com/tribalprintng"}
                  >
                    <BsTwitter />
                  </Link>
                </span>
                <span className="text-[14px] ss:text-[15px] ">
                  tribalprintng
                </span>
              </p>
              <a className="flex flex-row text-gray items-center gap-[8px]"
              href="mailto:ojeyomi.daniel@gmail.com"
              target="_blank"
              >
                <span className="text-[16px] ">
                  <BiMailSend />
                </span>
                <span className="text-[14px] ss:text-[15px] ">
                  tribalprint.ng@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterContent;
