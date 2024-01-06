import { Link } from "react-router-dom";
import { Button } from "../../Utils";
import styles from "../../style";

const SuccessPage = () => {
  return (
    <div className="mt-[170px] lg:mt-[200px] ">
      <div
        className={`${styles.boxWidth} flex items-center justify-center  ${styles.paddingX} `}
      >
        <div className="flex flex-col gap-5 lg:w-[860px] mx-auto items-center justify-center p-10 ">
          <h1 className={`${styles.heading1} w-full  text-center  `}>
            Thank you!
          </h1>
          <p className="text-center">
            Your order is now being processed. Please check your mail as we
            confirm your order shortly. <br /> If you have any questions or need
            further assistance, please don't hesitate to reach out to our
            customer support team. We appreciate your business and look forward
            to fulfilling your order soon!
          </p>
          <div className="w-fit mx-auto">
            <Link to={"/"}>
              <Button
                type={"button"}
                classname={`bg-skyBlueText py-[16px] mx-auto  rounded-[4px] text-white w-[190px] ${styles.image} `}
                title={"Back to Home"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
