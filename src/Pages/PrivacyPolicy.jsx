import { BiMailSend } from "react-icons/bi";
import styles from "../style";
import { BsTelephone } from "react-icons/bs";

const PrivacyPolicy = () => {
  return (
    <div className={`${styles.boxWidth} mt-[200px] mb-[200px]  md:mb-[350px]`}>
      <div
        className={`sm:px-16 px-5 ss:pxddddddd-10 md:p-[48px]  shadow-card p-[48px] md:w-[862px] ss:w-[500px]  sm:w-[600px] mx-auto `}
      >
        <h1
          className={`${styles.heading1} sm:text-[42px]  xlg:w-full  md:text-[48px] mb-[32px] `}
        >
          Privacy Policy
        </h1>
        <div className="flex flex-col gap-[32px] ">
          <div className="introduction">
            <h3
              className={`${styles.heading3} md:text-[20px] lg:text-[22px] mb-[16px] `}
            >
              Introduction
            </h3>
            <p className="leading-[24px] font-nunito font-normal text-black ">
              This privacy policy outlines how TribalPrint collects, uses, and
              protects personal information provided by our customers. We take
              the privacy and security of our customers' personal information
              very seriously, and we are committed to protecting it in
              accordance with applicable laws and regulations.
            </p>
          </div>
          <div className="introduction">
            <h3
              className={`${styles.heading3} md:text-[20px] lg:text-[22px] mb-[16px] `}
            >
              Collection of Personal Information
            </h3>
            <p className="leading-[24px] font-nunito font-normal text-black ">
              We collect personal information from our customers in several
              ways, including when they place an order on our website. The
              information we collect may include the customer's name, email
              address, phone number, shipping address, and payment information.
            </p>
          </div>
          <div className="introduction">
            <h3
              className={`${styles.heading3} md:text-[20px] lg:text-[22px] mb-[16px] `}
            >
              Use of Personal Information
            </h3>
            <p className="leading-[24px] font-nunito font-normal text-black ">
              We use personal information provided by our customers to fulfill
              their orders, communicate with them about their orders, provide
              customer support, and improve our products and services. We may
              also use this information to send promotional emails or
              newsletters about our products and services.
            </p>
          </div>
          <div className="introduction">
            <h3
              className={`${styles.heading3} md:text-[20px] lg:text-[22px] mb-[16px] `}
            >
              Protection of Personal Information
            </h3>
            <p className="leading-[24px] font-nunito font-normal text-black ">
              We take the security and protection of our customers' personal
              information very seriously. We have implemented technical measures
              to safeguard this information against unauthorized access, use,
              disclosure, or modification. We restrict access to personal
              information to our authorized personnel who have a legitimate need
              to access it. We also use encryption technology to protect
              sensitive data, such as payment information.
            </p>
          </div>
          <div className="introduction">
            <h3
              className={`${styles.heading3} md:text-[20px] lg:text-[22px] mb-[16px] `}
            >
              Sharing of Personal Information
            </h3>
            <p className="leading-[24px] font-nunito font-normal text-black ">
              We do not sell or rent our customers' personal information to
              third parties. However, we may share this information with our
              trusted service providers who help us fulfill orders, process
              payments, or provide customer support. We only share the minimum
              amount of personal information necessary for these service
              providers to perform their functions. We require our service
              providers to comply with applicable data protection laws and
              regulations and to use our customers' personal information only
              for the purposes specified by us.
            </p>
          </div>
          <div className="introduction">
            <h3
              className={`${styles.heading3} md:text-[20px] lg:text-[22px] mb-[16px] `}
            >
              Cookies
            </h3>
            <p className="leading-[24px] font-nunito font-normal text-black ">
              We use cookies on our website to enhance the customer experience
              and to analyze website traffic. Cookies are small text files that
              are stored on a customer's device when they access our website.
              They help us remember the customer's preferences and customize
              their experience on our website. Customers can choose to disable
              cookies in their web browser, but this may affect the
              functionality of our website.
            </p>
          </div>
          <div className="introduction">
            <h3
              className={`${styles.heading3} md:text-[20px] lg:text-[22px] mb-[16px] `}
            >
              Changes to Our Privacy Policy
            </h3>
            <p className="leading-[24px] font-nunito font-normal text-black ">
              We may update this privacy policy from time to time to reflect
              changes in our business practices or legal requirements. We
              encourage our customers to review this policy periodically to stay
              informed about how we collect, use, and protect their personal
              information.
            </p>
          </div>
          <div className="introduction">
            <h3
              className={`${styles.heading3} md:text-[20px] lg:text-[22px] mb-[16px] `}
            >
              Contact Us
            </h3>
            <p className="leading-[24px] font-nunito font-normal text-black ">
              If you have any questions or concerns about this privacy policy or
              the way we handle your personal information, please contact us at
              [insert contact information]. We will do our best to address your
              concerns and resolve any issues.
            </p>
            <p className="flex flex-row text-black my-[7px] items-center gap-[8px]">
          <span className="text-[16px]  ">
            <BsTelephone />
          </span>
          <span className="text-[14px] ss:text-[15px] ">
            (+234) 816 513 2356
          </span>
        </p>
            <p className="flex flex-row text-black items-center gap-[8px]">
          <span className="text-[16px] ">
            <BiMailSend />
          </span>
          <span className="text-[14px] ss:text-[15px] ">
          tribalprint.ng@gmail.com
          </span>
        </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
