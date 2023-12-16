import styles from "../style";

const TermsCondition = () => {
  return (
    <div className={`${styles.boxWidth} mt-[200px] mb-[200px]  md:mb-[350px]`}>
      <div className={`sm:px-16 px-5 ss:px-10 md:p-[48px]  shadow-card p-[48px] md:w-[862px] ss:w-[500px]  sm:w-[600px] mx-auto `}>
        <h1 className={`${styles.heading1} sm:text-[42px]  xlg:w-full  md:text-[48px] mb-[32px] `}>Terms and Condition</h1>
        <div className="flex flex-col gap-[32px] ">
          <div className="introduction">
            <h3 className={`${styles.heading3} md:text-[20px] lg:text-[22px] mb-[16px] `}>Introduction</h3>
            <p className="leading-[24px] font-nunito font-normal text-black ">
              The following terms and conditions ("Agreement") govern the use of
              the TribalPrint website and services ("Services"). By using the
              Services, you agree to be bound by this Agreement. If you do not
              agree to this Agreement, do not use the Services.
            </p>
          </div>
          <div className="introduction">
            <h3 className={`${styles.heading3} md:text-[20px] lg:text-[22px] mb-[16px] `}>Use of Services</h3>
            <p className="leading-[24px] font-nunito font-normal text-black ">
              The Services are intended for use by individuals or entities
              located in Nigeria. You must be at least 18 years of age or have
              the legal capacity to enter into contracts to use the Services.
              <br /><br />
              You agree to use the Services only for lawful purposes and in
              accordance with this Agreement. You agree not to use the Services
              in any way that may cause harm to TribalPrint, its users, or any
              third party.
            </p>
          </div>
          <div className="introduction">
            <h3 className={`${styles.heading3} md:text-[20px] lg:text-[22px] mb-[16px] `}>
              Intellectual Property
            </h3>
            <p className="leading-[24px] font-nunito font-normal text-black ">
              The content on the TribalPrint website, including text, graphics,
              images, logos, and software, is the property of TribalPrint or its
              licensors and is protected by copyright and other intellectual
              property laws. <br /> <br /> You agree not to reproduce, modify,
              distribute, display, perform, or create derivative works of any
              content on the TribalPrint website without the prior written
              consent of TribalPrint.
            </p>
          </div>
          <div className="introduction">
            <h3 className={`${styles.heading3} md:text-[20px] lg:text-[22px] mb-[16px] `}>
              Delivery and Returns
            </h3>
            <p className="leading-[24px] font-nunito font-normal text-black ">
              TribalPrint will make every effort to deliver your order within
              the specified timeframe. However, we cannot guarantee delivery
              times and are not responsible for any delays caused by shipping
              carriers or other factors beyond our control. <br /> <br />
              If you are not satisfied with your order, please contact
              TribalPrint within 48 hours of receipt to discuss returns or
              exchanges. We reserve the right to refuse returns or exchanges for
              any reason.
            </p>
          </div>
          <div className="introduction">
            <h3 className={`${styles.heading3} md:text-[20px] lg:text-[22px] mb-[16px] `}>
              Limitation of Liability
            </h3>
            <p className="leading-[24px] font-nunito font-normal text-black ">
              To the maximum extent permitted by law, TribalPrint and its
              affiliates, officers, directors, employees, and agents will not be
              liable for any damages, including but not limited to direct,
              indirect, incidental, punitive, or consequential damages, arising
              out of or in connection with the Services or this Agreement.
            </p>
          </div>
          <div className="introduction">
            <h3 className={`${styles.heading3} md:text-[20px] lg:text-[22px] mb-[16px] `}>Indemnification</h3>
            <p className="leading-[24px] font-nunito font-normal text-black ">
              You agree to indemnify and hold harmless TribalPrint and its
              affiliates, officers, directors, employees, and agents from any
              and all claims, damages, liabilities, costs, and expenses,
              including reasonable attorneys' fees, arising out of or in
              connection with your use of the Services or your violation of this
              Agreement.
            </p>
          </div>
          <div className="introduction">
            <h3 className={`${styles.heading3} md:text-[20px] lg:text-[22px] mb-[16px] `}>Termination</h3>
            <p className="leading-[24px] font-nunito font-normal text-black ">
              TribalPrint may terminate this Agreement and your access to the
              Services at any time, for any reason, without notice to you. Upon
              termination, you must immediately cease using the Services.
            </p>
          </div>
          <div className="introduction">
            <h3 className={`${styles.heading3} md:text-[20px] lg:text-[22px] mb-[16px] `}>
              Governing Law and Dispute Resolution
            </h3>
            <p className="leading-[24px] font-nunito font-normal text-black ">
              This Agreement will be governed by and construed in accordance
              with the laws of Nigeria, without giving effect to any principles
              of conflicts of law. <br /> <br />
              Any dispute arising out of or in connection with this Agreement
              will be resolved through arbitration in accordance with the rules
              of the Nigerian Arbitration and Conciliation Act. The arbitration
              will take place in Nigeria, and the language of the arbitration
              will be English.
            </p>
          </div>
          <div className="introduction">
            <h3 className={`${styles.heading3} md:text-[20px] lg:text-[22px] mb-[16px] `}>
              Modification of Agreement
            </h3>
            <p className="leading-[24px] font-nunito font-normal text-black ">
              TribalPrint reserves the right to modify this Agreement at any
              time, in its sole discretion, without notice to you. Your
              continued use of the Services after any such modification will
              constitute your acceptance of the modified Agreement.
            </p>
          </div>
          <div className="introduction">
            <h3 className={`${styles.heading3} md:text-[20px] lg:text-[22px] mb-[16px] `}>
              Entire Agreement
            </h3>
            <p className="leading-[24px] font-nunito font-normal text-black ">
              This Agreement constitutes the entire agreement between you and
              TribalPrint with respect to the Services and supersedes all prior
              or
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsCondition;
