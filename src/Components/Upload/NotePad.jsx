import { checkMark } from "../../Assets";
import styles from "../../style";

const Lamination = [
  {
    title: "Matte Lamination",
  },
  {
    title: "Glossy Lamination",
  }
];

const Paper = [
  {
    title: "Ruled inner sheets",
  },
  {
    title: "Plain inner sheets",
  },
];

const Cover = [
    {
      title: "Soft cover",
    },
    {
      title: "Hard cover",
    },
  ];

const NotePad = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex">
      <div>
        <h2 className={`${styles.heading4} mb-[8px] `}>Lamination:</h2>
        <div className="flex flex-row gap-[32px] w-fit ">
          <div className="flex flex-wrap gap-x-3 gap-y-5  ">
            {Lamination.map(({title}) => (
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
        <h2 className={`${styles.heading4} mb-[8px] `}>Paper:</h2>
        <div className="flex flex-row gap-[32px] w-fit">
          <div className="flex flex-wrap gap-x-8 gap-y-5">
            {Paper.map(({title}) => (
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
      
    {/* Cover */}
    <div>
        <h2 className={`${styles.heading4} mb-[8px] `}>Cover:</h2>
        <div className="flex flex-row gap-[32px] w-fit ">
          <div className="flex flex-wrap gap-x-8 gap-y-5  ">
            {Cover.map(({title}) => (
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
  );
};

export default NotePad;
