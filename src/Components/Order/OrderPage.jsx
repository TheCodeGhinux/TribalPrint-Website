import { Link } from "react-router-dom";
import {
  addIcon,
  checkMark,
  flexBannerLg,
  subtractIcon,
} from "../../Assets";
import { Button } from "../../Utils";
import styles, { layout } from "../../style";

const OrderPage = () => {
  return (
    <div className="mt-[170px]">
      <div className={`${styles.boxWidth}  ${styles.paddingX} `}>
        <h1 className={`${styles.heading1} mb-[46px] md:mb-[64px]`}>
          Order Detail
        </h1>
        <div
          className={` mb-[43px] bg-[#F2F2F2] px-6 lg:justify-center ${layout.section1} flex flex-col py-20 gap-[48px] md:py-6 md:gap-5  `}
        >
          <div className="w-fit  lg:m-0  mx-auto ">
            <img
              src={flexBannerLg}
              alt=""
              className="w-fit md:w-full lg:w-fit md:h-full mx-auto"
            />
          </div>
          <div className="flex  flex-col gap-[24px] ">
            <p className="font-nunito text-black md:w-[379px] ss:w-[500px] lg:w-[528px] smd:w-[518px] ">
              <span className="border-r  pr-[10px] mr-[10px] border-r-[#BDBDBD]">
                Flex banner Large 7ft x 3ft{" "}
              </span>
              <span> 1 pcs</span>
            </p>
            <hr className="text-[#BDBDBD] " />
            <div className="flex flex-col md:flex-row gap-[24px]">
              <div>
                <h2 className={`${styles.heading4} mb-[8px] `}>Material:</h2>
                <p className="bg-skyBlue w-fit flex flex-row items-center justify-center gap-2  px-[16px] py-[8px] ">
                  <span className="font-nunito text-skyBlueText">Flex</span>
                  <span>
                    <img src={checkMark} alt="" />
                  </span>
                </p>
              </div>
              <div>
                <h2 className={`${styles.heading4} mb-[8px] `}>Finishing:</h2>
                <div className="flex flex-row gap-[32px]">
                  <div>
                    <p className="bg-skyBlue w-fit flex flex-row items-center justify-center gap-2  px-[16px] py-[8px] ">
                      <span className="font-nunito text-skyBlueText">
                        Eyelets
                      </span>
                      <span>
                        <img src={checkMark} alt="" />
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className=" -black w-fit  px-[16px] py-[8px] border border-[#292929] ">
                      <span className="font-nunito text-black">No Eyelets</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <>
              <h2 className={`${styles.heading4} leading-none`}>Quantity:</h2>
              <div className="flex flex-row items-center w-[280px] md:w-full justify-between">
                <div className="border border-[#213B6F]">
                  <p className=" text-black  w-[170px] flex flex-row items-center justify-between gap-2  px-[16px] py-[8px] ">
                    <button className="font-nunito text-skyBlueText">
                      <img src={subtractIcon} alt="" />
                    </button>
                    <span>1</span>
                    <button>
                      <img src={addIcon} alt="" />
                    </button>
                  </p>
                </div>
                <button className="text-[#E30613] ">Delete</button>
              </div>
              <div className="border-b border-b-[#BDBDBD] pb-[16px] ">
                <p>
                  <span className="font-nunito mr-[16px]">Total</span>
                  <span className="font-nunito text-[24px] ">₦ </span>
                  <span className={`${styles.heading2}`}>27,000</span>
                </p>
              </div>
              <>
                <p className="font-nunito">1 product</p>
              </>
            </>
          </div>
        </div>
        <div className="flex w-[85%] mx-auto flex-col md:flex-row gap-[16px] md:gap-[32px] ">
         <div className="w-full">
         <Link to={"/all-products/banner/checkout"}>
          <Button
            type={"button"}
            classname={
              `bg-skyBlueText py-[16px] rounded-[4px] text-white w-full ${styles.image} `
            }
            title={"Checkout Now"}
          />
          </Link>
         </div>
          <div className="w-full">
          <Link to={'/all-products'}>
          <Button
            type={"button"}
            classname={
              `border border-skyBlueText py-[16px] rounded-[4px] text-skyBlueText w-full ${styles.image} `
            }
            title={"Continue Shopping"}
          />
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
