import { NavLink } from "react-router-dom";
import styles, { layout } from "../../style";
import { artboard, search } from "../../Assets";
import { Suspense, lazy } from "react";


const LazyLoadedImage = lazy(() => import("../../Utils/HeroLazyLoad"));

const Hero = () => {
  return (
    <div className="bg-white sm:pb-[0] ">
      <div
        className={`${styles.boxWidth}  mt-[130px] pb-20  md:pb-2 md:gap-5 md:pt-[0px] pt-16 ss:pt-[70px] sm:pt-[50px] ${styles.padding}`}
      >
        <div
          className={`${layout.section} xlg:w-[1150px] xl:w-full xlg:justify-between mx-auto gap-[50px] md:gap-0 flex justify-center items-center md:justify-between`}
        >
          <div className="hero-content  ">
            <h1
              className={`${styles.heading1} md:leading-[58px] lg:text-[56px] text-black md:text-[45px] xs:text-[50px] ss:text-[55px] mb-[16px] xs:leading-[54px] xs:w-[450px] ss:w-[580px] lg:w-[5S0px] sm:w-[650px] md:w-fit md:mb-[10px] `}
            >
              PRINT MEETS EXPECTATION
            </h1>
            <p
              className={` ${styles.paragraph} md:w-[430px] lg:text-[18px] lg:leading-[28px] xs:w-[460px] ss:w-[550px] lg:w-[550px] xl:w-[640px] text-black mb-[24px]`}
            >
              We understand the importance of accurate colour matching to bring
              your designs to life, and our team of experts is committed to
              ensuring that your prints match your design perfectly, every time
            </p>
            <div className="flex flex-row items-center justify-between bg-[#F2F2F2] rounded-[4px] md:w-[400px] lg:w-[480px] xl:w-[560px]  ss:w-[400px] px-[16px] py-[12px] md:py-[16px] gap-[58px] ">
            <input type="text" placeholder="Search the product you want to print" className="w-full   text-[#828282]  lg:text-[16px] bg-transparent text-[13px] outline-none    " />
            <img src={search} alt=""  className="w-[24px] h-[24px] "/>
            </div>
          </div>
          <Suspense
        >
          <div className=" overflow-hidden rounded-full">
            <LazyLoadedImage src={artboard} alt="" />
          </div>
        </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Hero;
