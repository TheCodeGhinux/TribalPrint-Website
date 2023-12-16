import { OrderProcedure } from "../../Constants";
import styles from "../../style";

const HowToOrderLight = () => {
    return ( 
        <div className="bg-darkGreen "> 
            <div className={`${styles.boxWidth} md:mt-[200px]  md:mb-[300px] mt-[50px] py-[64px] md:py-[94px] ${styles.padding}`}>
            <div>
                <h2 className={`${styles.heading2a} text-white text-center mb-[48px]`}>How to place an order</h2>
                <div className="flex flex-wrap gap-[66px]  items-start justify-center md:justify-center ">
                    {
                        OrderProcedure.map((ord, index)=> (
                            <div className="flex flex-col w-[320px] xl:w-[378px] ss:w-[400px] sm:w-[359px] md:w-[] lg:w-[308px] items-center justify-center text-center gap-[16px]  ">
                                <img src={ord.iconLight} alt="" />
                                <h3 className={`${styles.heading3} text-white`}>{ord.title}</h3>
                                <p className="xlg:text-[14px] text-white ">{ord.content}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default HowToOrderLight;