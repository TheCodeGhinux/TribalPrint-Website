import { checkMark } from "../../Assets";
import styles from "../../style";

const BannerOptions = () => {
    return ( 
        <div>
                <h2 className={`${styles.heading4} mb-[8px] `}>Finishing:</h2>
                <div className="flex flex-row gap-[32px] ">
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
     );
}
 
export default BannerOptions;