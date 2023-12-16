import { useEffect, useRef, useState } from "react";
import { cartIcon, close, closeDark, hamburger, logo, user } from "../Assets";

import { NavLinks } from "../Constants";
import { Link, NavLink, useLocation } from "react-router-dom";
import styles from "../style";

import { BsTelephone, BsWhatsapp } from "react-icons/bs";

import { useCart } from "../Utils/CartContext";

const Navbar = () => {
  const location = useLocation();
  const { cart } = useCart();
  const [active, setActive] = useState(
    NavLinks.find((navLink) => navLink.to === location.pathname)?.title ||
      NavLinks[0].title
  );
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setToggle(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop >= 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    setActive(
      NavLinks.find((navLink) => navLink.to === location.pathname)?.title ||
        NavLinks[0].title
    );
  }, [location.pathname]);

  return (
    <nav
      className={`${
        scrolled ? " " : "bg-transparent"
      } w-full mx-auto fixed  top-0 z-20 `}
    >
      <div
        className={`bg-topBg pt-[32px] xs:pt-[12px] pb-[9px]   ${styles.paddingX}  `}
      >
        <div
          className={`flex flex-col  xs:flex-row justify-end xs:items-center xs:gap-10  ${styles.boxWidth}`}
        >
          <div className="">
            <p className="font-nunito font-light  text-right text-[12px] leading-[18px] ss:text-[14px] ">
              Need help?
            </p>
          </div>
          <div className="phone  flex flex-row gap-[16px] items-center ss:gap-10 justify-end ">
            <p className="flex flex-row items-center gap-[6px]">
              <span className="text-[14px]  ">
                <BsTelephone />
              </span>
              <span className="text-[12px] ss:text-[14px] ">
                (+234) 816 513 2356
              </span>
            </p>
            <p className="flex flex-row items-center gap-[6px]">
              <span className="text-[14px] ">
                <BsWhatsapp />
              </span>
              <span className="text-[12px] ss:text-[14px] ">
                (+234) 701 348 9211
              </span>
            </p>
          </div>
        </div>
      </div>
      <div
        className={`bg-white   ${styles.paddingX}  
        ${
          scrolled
            ? "md:py-0 shadow-navbar pt-[18px] pb-[16px]"
            : "md:py-3 lg:py-[10px] pt-[18px] pb-[16px] "
        }`}
      >
        <div className={`${styles.boxWidth} ${styles.flexBetween} `}>
          <div className="nav-logo ">
            <Link
              to={"/"}
              className="logo "
              onClick={() => {
                setActive(NavLinks[0].title);
                setToggle(false);
              }}
            >
              <img
                src={logo}
                alt="tribalprints"
                className="w-[160px]  object-contain ss:w-[200px] md:w-[250px]  cursor-pointer "
              />
            </Link>
          </div>
          <div className="navbar-links-desk  md:flex md:flex-row hidden md:justify-between  md:items-center">
            <ul className="flex gap-12 md:gap-[32px] mr-[32px] ">
              {NavLinks.map((nav, index) => (
                <li key={nav.id}>
                  <Link
                    to={`${nav.to}`}
                    key={nav.id}
                    className={`relative text-[#333] cursor-pointer font-nunito py-0 font-normal text-[16px] ${
                      active === nav.title
                        ? "text-[#292929] font-semibold  pointer-events-none "
                        : "hover:underline"
                    }
                                ${
                                  index === NavLinks.length
                                    ? "mr-0"
                                    : " text-[15px] font-normal  md:text-[14px]  lg:text-[16px]  lg:leading-[24px]   "
                                }`}
                    onClick={() => {
                      setActive(nav.title);
                      setToggle(false);
                    }}
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-row gap-[20px] ">
              <NavLink to={"/cart"} className="sign relative">
                <div className="absolute right-0 border bg-red rounded-full text-white  w-5 h-5 flex items-center justify-center ">
                  {cart && cart.items ? cart.items.length : 0}
                </div>
                <img src={cartIcon} alt="" className="md:w-[44px] lg:w-fit " />
              </NavLink>
              <NavLink to={"/sign-in"} className="join">
                <img src={user} alt="" className="md:w-[44px] lg:w-fit " />
              </NavLink>
            </div>
          </div>
          <div className="md:hidden ">
            {toggle ? (
              <img
                src={closeDark}
                alt=""
                className="w-[36px] h-[36px] "
                onClick={() => setToggle(false)}
              />
            ) : (
              <img src={hamburger} alt="" onClick={() => setToggle(true)} />
            )}
          </div>
        </div>
      </div>
      {toggle && (
        <div
          className={`fixed bg-white z-20 top-[160px] xs:top-[120px] ss:top-[135px] min-h-screen  w-full   md:hidden ${styles.paddingX}`}
          style={{
            left: toggle ? "0px" : "-300px",
          }}
        >
          <div className="mt-[32px] flex flex-col justify-end items-end">
            <div className="flex flex-row w-fit gap-[20px]  ">
              <NavLink to={"/cart"} className="sign relative">
                <div className="absolute right-0 border bg-red rounded-full text-white  w-5 h-5 flex items-center justify-center ">
                  {cart && cart.items ? cart.items.length : 0}
                </div>
                <img src={cartIcon} alt="" className="md:w-[44px] lg:w-fit " />
              </NavLink>
              <NavLink to={"/sign-in"} className="user">
                <img src={user} alt="" className="w-[40px] " />
              </NavLink>
            </div>
          </div>
          <div className="flex text-left flex-col  ">
            <ul className="flex flex-col py-12 gap-6">
              {NavLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`relative cursor-pointer font-nunito py-2  font-normal text-[16px] ${
                    active === nav.title
                      ? "text-[#292929] font-semibold  pointer-events-none "
                      : "hover:underline"
                  }
                  ${
                    index === NavLinks.length
                      ? "mr-0"
                      : " text-[15px] font-bold font-nunito md:text-[18px] lg:text-[22px] xl:text-[24px] lg:leading-[24px]   "
                  } `}
                  onClick={() => {
                    setActive(nav.title);
                    setToggle(false);
                  }}
                >
                  <NavLink to={`${nav.to}`} className="">
                    {nav.title}
                  </NavLink>
                  {active === nav.title ? (
                    <div className="flex items-center w-full justify-center">
                      <div className="absolute w-[5px] h-[5px] bg-pink bottom-[-3px]  rounded-full " />
                    </div>
                  ) : (
                    ""
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
