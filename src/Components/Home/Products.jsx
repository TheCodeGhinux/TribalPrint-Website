import { Link } from "react-router-dom";
import { filter, search } from "../../Assets";
import { FilterItems, ProductDetails, ServiceItems } from "../../Constants";
import styles from "../../style";
import FilterContainer from "../FilterContainer";
import BestSellers from "./BestSellers";
import ProductContainer from "./ProductContainer";
import { Button } from "../../Utils";

const Products = () => {
  return (
    <div className={`${styles.boxWidth}  mt-[50px]  ${styles.padding3}`}>
      <div className=" flex flex-col md:flex-row gap-[28px] lg:gap-[32px] ">

        <div className="filter-services mb-[80px]  md:w-[1100px] lg:w-[1000px] xlg:w-[1220px] ">
            <FilterContainer/>
          <div className="services">
            <h2 className={`${styles.heading2} text-center md:text-left mb-[48px] md:mb-[30px] `}>We offer you:</h2>
            <div className="flex flex-col ss:flex-row  md:flex-col gap-[16px] md:gap-[24px]">
            {
                ServiceItems.map((serv, index) => (
                    <div className="flex flex-row gap-[16px] py-[24px] justify-start items-start px-[16px] lg:px-[12px]  bg-white  ">
                        <div className="icon">
                            <img src={serv.icon} alt="" className="w-[100px] md:w-[230px]" />
                        </div>
                        <div>
                            <h4 className={`${styles.heading4} mb-[8px]  `}>{serv.title}</h4>
                            <p className="font-nunito text-[12.5px] lg:text-[14px] text-black font-normal leading-[20px] ">{serv.content}</p>
                        </div>
                    </div>
                ))
            }
            </div>
          </div>
        </div>


        <div className="sellers  ">
          <div className="header mb-[30px]">
            <div className="flex items-center justify-between ">
            <h2
              className={`font-monteserrat text-[22px] ss:text-[32px] xlg:text-[36px] leading-[48px] font-bold text-black md:text-left text-center mb-[16px] `}
            >
              Best Sellers
            </h2>
            <div className="">
            <Link to={'/all-products'}>
            <Button
                  title={"Explore Products"}
                  type={"button"}
                  classname={
                    " text-white font-nunito bg-red py-[16px] w-[150px] xs:w-[180px] rounded-[4px]"
                  }
                />
            </Link>
            </div>
            </div>
            <div className="md:hidden flex flex-row items-center justify-between   mb-[32px]">
              <div className="searchbox py-[12px] px-[16px] flex   flex-row items-center  w-[271px]  rounded-[4px] gap-[16px] ">
                <img src={search} alt="" className="w-[24px]  h-[24px] " />
                <input
                  type="text"
                  className=" outline-none text-gray"
                  placeholder="Search product"
                />
              </div>
              <div className=" ">
                <img src={filter} alt="" className="w-[26px]" />
              </div>
            </div>
          </div>

          <div className="product flex flex-wrap justify-center  md:justify-start  xl:justify-between w-full md:gap-[25px]  lg:gap-[32px]  gap-x-[15px] gap-y-5 ">
            {ProductDetails.map((product, index) => (
              <BestSellers
                key={index.id}
                name={product.productName}
                image={product.productImage}
                price={product.price}
                quantity={product.quantity}
              />
            ))}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
