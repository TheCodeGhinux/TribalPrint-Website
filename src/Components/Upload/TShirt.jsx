import { checkMark } from "../../Assets";
import styles from "../../style";

const Colours = [
  {
    title: "Black",
  },
  {
    title: "Navy blue",
  },
  {
    title: "White",
  },
  {
    title: "Others",
  },
];

const Sizes = [
  {
    title: "S",
  },
  {
    title: "M",
  },
  {
    title: "L",
  },
  {
    title: "XL",
  },
  {
    title: "XXL",
  },
];

const TShirt = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex">
      <div>
        <h2 className={`${styles.heading4} mb-[8px] `}>Colour:</h2>
        <div className="flex flex-row gap-[32px] w-fit ">
          <div className="flex flex-wrap gap-x-3 gap-y-5  ">
            {Colours.map(({title}) => (
              <p 
              className="black w-fit  px-[16px] py-[8px] border border-[#292929]"
            //   className="bg-skyBlue w-fit flex flex-row items-center justify-center gap-2  px-[16px] py-[8px] "
              >
                <span 
                
                // className="font-nunito text-skyBlueText"
                >{title}</span>
                <span>{/* <img src={checkMark} alt="" /> */}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
      
      {/* Sizes */}
      <div>
        <h2 className={`${styles.heading4} mb-[8px] `}>Size:</h2>
        <div className="flex flex-row gap-[32px] w-fit ">
          <div className="flex flex-wrap gap-x-8 gap-y-5  ">
            {Sizes.map(({title}) => (
              <p 
              className="black w-fit  px-[16px] py-[8px] border border-[#292929]"
            //   className="bg-skyBlue w-fit flex flex-row items-center justify-center gap-2  px-[16px] py-[8px] "
              >
                <span 
                
                // className="font-nunito text-skyBlueText"
                >{title}</span>
                <span>{/* <img src={checkMark} alt="" /> */}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
      </div>
      <div>
        <h2 className={`${styles.heading4} mb-[8px] `}>Sides:</h2>
        <div className="flex flex-row gap-[32px] ">
          <div>
            <p className="bg-skyBlue w-fit flex flex-row items-center justify-center gap-2  px-[16px] py-[8px] ">
              <span className="font-nunito text-skyBlueText">
                Front side print
              </span>
              <span>
                <img src={checkMark} alt="" />
              </span>
            </p>
          </div>
          <div>
            <p className=" -black w-fit  px-[16px] py-[8px] border border-[#292929] ">
              <span className="font-nunito text-black">
                Front & back side print
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TShirt;
