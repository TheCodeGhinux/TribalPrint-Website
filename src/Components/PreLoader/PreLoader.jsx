import { TailSpin } from "react-loading-icons";
import { logo, logoDark } from "../../Assets";



const Preloader = () => {
  return (
    <div className="preloader fixed top-0 left-0 w-full h-full flex justify-center items-center bg-skyBlueText">
      <div className="  min-h-screen flex items-center justify-center ">
        {/* <TailSpin className="w-[50px]" /> */}
        <img src={logoDark} alt="" className="animate-pulse" />
      </div>
    </div>
  );
};

export default Preloader;
