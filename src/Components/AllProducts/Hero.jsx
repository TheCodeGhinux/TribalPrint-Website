import { waterBottle } from "../../Assets";
import styles from "../../style";

const Hero = () => {
    return (
        <div className="bg-[#32A18D] md:bg-green bottle h-[300px] flex flex-col items-center justify-center md:h-auto mt-[150px] xs:mt-[120px] lg:mt-[140px]  ">
            <div 
            className={`${styles.boxWidth} flex flex-col pb-20   md:pb-2 md:gap-5 md:pt-[0px] pt-16 ss:pt-[70px] sm:pt-[50px] ${styles.padding}`}
            >
                <div className="flex flex-row  md:flex-row items-center   md:justify-between">
                    <div className=" ">
                        <h2 className={` text-white md:text-black ${styles.heading2}`} >Product Catalogue</h2>
                        <p className="font-nunito text-[16px] text-white md:text-black leading-[24px] font-normal ">All products</p>
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