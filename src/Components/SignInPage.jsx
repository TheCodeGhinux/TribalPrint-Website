import {
    BsFillEyeFill,
    BsFillEyeSlashFill,
    BsInstagram,
    BsTwitter,
  } from "react-icons/bs";
  import HowToOrder from "./HowToOrder/HowToOrder";
  import styles from "../style";
  import { Button } from "../Utils";
  import { arrorRight } from "../Assets";
  import { useState } from "react";
  import { NavLink } from "react-router-dom";
  
  const SignInPage = () => {
    const [passwordType, setPasswordType] = useState("password");
    const [show, setShow] = useState(false);
  
    const togglePassword = () => {
      if (passwordType === "password") {
        setPasswordType("text");
        return;
      }
      setPasswordType("password");
    };
    return (
      <div className="  md:mt-[140px]  ">
        <div className="flex flex-col  items-center welcome-bg-lg justify-center md:flex-row   ">
          <div
            className={`welcome-bg  ${styles.paddingX} h-[434px]  ${styles.boxWidth} mt-[155px] xs:mt-[120px] md:mt-[160px]  flex flex-col items-start md:justify-end justify-center `}
          >
              <div className={`  w-full  md:h-[744px] `}>
              <div className={`  mx-auto xl:w-[564px] `}>
              <div className={` welcome mb-[64px] md:mb-[269px] `}>
                <h1
                  className={`${styles.heading1} ss:text-[44px] text-white mb-[32px]`}
                >
                  Welcome!
                </h1>
                <p className="font-nunito text-[14px] text-[#fff] leading-[18px] md:w-full lg:w-[534px] ss:w-[511px] xs:w-[411px] ss:text-[18px] ss:leading-[28px] ">
                  Sign in now to continue your printing journey. Your design, your
                  ideas, and your vision await you.
                </p>
              </div>
              <div className="">
                <p className="font-nunito text-[14px] text-[#fff] leading-[18px] mb-[4px] md:mb-[12px] text-[16px] ss:mb-[8px]  ">
                  Keep in touch
                </p>
                <div className="flex flex-row gap-[16px] text-white b ">
                  <BsInstagram className="ss:text-[24px] " />
                  <BsTwitter className="ss:text-[24px]" />
                </div>
              </div>
            </div>
              </div>
          </div>
  
          <div
            className={` w-full flex flex-col  items-center justify-center lg:px-[81px] ${styles.paddingX} md:h-[744px] md:py-0  sign bg-blue py-[64px] `}
          >
            <div className=" w-full  xl:w-[556px] ">
              <h2
                className={`${styles.heading2} text-white mb-[8px] md:mb-[24px]  `}
              >
                Sign In
              </h2>
              <p className="font-nunito  font-light leading-[24px] md:text-[18px] text-white ">
                {" "}
                Please fill email and password to sign in into your account
              </p>
              <form className="flex flex-col gap-[24px] my-[24px]">
                <input
                  type="email"
                  required
                  className="font-nunito p-[16px] border border-[#ffffff66]  bg-[#ffffff1a] rounded-[4px] outline-none text-white w-full "
                  placeholder="Email"
                />
  
                <div className="relative">
                  <p className="font-nunito text-white text-right text-[14px] mb-[4px] ">
                    Forgotten Password?
                  </p>
                  <input
                    className="p-[16px] border font-nunito border-[#ffffff66] bg-[#ffffff1a] rounded-[4px] text-white outline-none w-full "
                    type={passwordType}
                    disabled={show ? true : false}
                    name="password"
                    placeholder="Password"
                    required
                  />
                  <span
                    className="absolute right-[18px] cursor-pointer top-[45px] lg:text-[24px] text-[#fff] "
                    onClick={togglePassword}
                  >
                    {passwordType === "password" ? (
                      <BsFillEyeSlashFill />
                    ) : (
                      <BsFillEyeFill />
                    )}
                  </span>
                </div>
                <NavLink to={"/"}>
                <Button
                  type={"submit"}
                  title={
                    <div className="flex flex-row items-center justify-center gap-[8px] ">
                      <span className="font-nunito font-semibold ">Sign In</span>
                      <span>
                        <img src={arrorRight} alt="" />
                      </span>
                    </div>
                  }
                  classname={`${
                    styles.image
                  } ${"bg-white py-[16px]  font-nunito text-[#213B6F] cursor-pointer w-full text-[16px]  font-normal rounded-[4px] "} `}
                />
                </NavLink>
                <p className=" my-[-10px] font-nunito text-white text-center ">
                  Don't have an account?
                  <span className="underline">
                    <NavLink to={"/sign-up"}> Create Account</NavLink>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
        <HowToOrder />
      </div>
    );
  };
  
  export default SignInPage;
  