import { waterBottle } from "../../Assets";
import styles from "../../style";

const Hero = ({ selectedItem }) => {
    const name = selectedItem?.name || "Loading...";
    const description = selectedItem?.meta_description || "Loading...";
  
    return (
        <div className="bg-[#0d4b6e9a] md:bg-lightBlue bottle h-[350px] flex flex-col items-center justify-center md:h-auto mt-[150px] xs:mt-[120px] lg:mt-[140px]  ">
            <div 
            className={`${styles.boxWidth} flex flex-col pb-20   md:pb-2 md:gap-5 md:pt-[0px] pt-16 ss:pt-[70px] sm:pt-[50px] ${styles.padding}`}
            >
                <div className="flex flex-row  md:flex-row items-center   md:justify-between">
                    <div className=" ">
                        <h2 className={` text-white mb-[8px] md:text-black ${styles.heading2}`} >{name} </h2>
                        <p className="font-nunito text-[16px] text-white md:text-black lg:w-[386px] lg:leading-[26px]  leading-[24px] font-normal ss:w-[450px] md:w-[386px]  ">  {description}</p>
                    </div>
                    <div className="image hidden md:block">
                        <img src={waterBottle} alt="" />
                    </div>
                </div>
            </div>
        </div>
      );
}
 
export default Hero;