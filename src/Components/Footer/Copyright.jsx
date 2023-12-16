import styles from "../../style";

const Copyright = () => {
    return ( 
        <div className={` ${styles.boxWidth}  ${styles.paddingX} py-[32px] lg:py-[74px] lg:justify-start flex items-center justify-center `}>
            <p className="font-nunito text-[12px] md:text-[14px]  ">Copyright © 2023 TribalPrint. All Rights Reserved.</p>
        </div>
     );
}
 
export default Copyright;