const styles  = {
    boxWidth: "xl:max-w-[1300px] w-full  mx-auto",

    heading1: "font-monteserrat font-bold w-full xlg:text-[56px]  text-[42px] leading-[48px]  xlg:leading-[64px]  xlg:w-[528px]  ",
    heading2: "font-monteserrat text-[32px] xlg:text-[36px] leading-[48px] font-bold ",
    heading2a: "font-monteserrat text-[24px] xlg:text-[36px] leading-[48px] font-semibold ",
    heading3: "font-monteserrat font-semibold w-full font-normal text-[18px] text-black xlg:leading-[40px] leading-[24px] xlg:text-[24px] ",
    heading4: "font-monteserrat font-semibold xlg:leading-[24px]  xlg:text-[18px] text-[16px] ",

    paragraph: "font-nunito font-normal text-[16px] leading-[24px]  xlg:text-[18px] xlg:leading-[32px]",
    paragraph1: "font-nunito font-bold text-[20px] text-black",
    paragraph2: "font-nunito text-[16px] ",
    paragraph3: "font-nunito font-normal text-[14px] ",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
    flexBetween: "flex justify-between items-center",
    flexStartB: "flex justify-between items-start",
    flexEnd: "flex justify-end items-center",
    flexWrap: "flex flex-wrap justify-center",

    paddingX: "sm:px-14 px-5 xl:px-0",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-14 md:px-[60px] px-5 xs:px-6 xl:px-0  sm:py-12  py-4",
    padding2: "sm:px-16 px-7 xl:px-0 ",
    padding3: "sm:px-14 md:px-[30px] px-5 xs:px-6 xl:px-0  sm:py-12  py-4",

    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
    image: "transition duration-150 ease-out hover:ease-in  hover:scale-[1.02] object-cover cursor-pointer"
}

 
export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    section1: `flex md:flex-row flex-col`,
    section2: `flex lg:flex-row flex-col`,
    sectionCol: `flex flex-col`,
    
    button: `bg-primary ${styles.flexCenter} gap-4 text-white font-poppins text-[16px] font-semibold xl:leading-[24px] `
}

export default styles;