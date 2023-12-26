import {  useEffect, useState } from "react";
import { filter, search } from "../../Assets";
import {
  ServiceItems,
} from "../../Constants";
import styles from "../../style";
import FilterContainer from "../FilterContainer";
import ProductContainer from "../Home/ProductContainer";
import axios from "axios";

const Products = () => {
  const [categories, setCategories] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const baseUrl = `https://tp-prod.onrender.com/api/v1/categories`;
        const response = await axios.get(baseUrl, {
          params: {
            search: searchTerm
          },
        });

        if (response.status < 200 || response.status >= 300) {
          throw new Error(
            `Failed to fetch payment methods: ${response.statusText}`
          );
        }

        setCategories(response.data);
      } catch (error) {
        setError(error.message || "Error fetching payment methods");
        console.error(error.message);
      }
    };
    if (!categories) {
      fetchCategories();
    }
  }, [categories, searchTerm]);

  const filteredProducts = categories
    ? categories.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div
      className={`${styles.boxWidth}  mt-[50px] mb-[300px] md:mb-[350px]  ${styles.padding3}`}
    >
      <div className=" flex flex-col md:flex-row gap-[28px] md:gap-5 lg:gap-[32px] lg:justify-between ">
        <div className="filter-services  mb-[80px] md:w-2/5 lg:w-1/3 ">
          <FilterContainer
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
          />
          <div className="services">
            <h2
              className={`${styles.heading2} text-center md:text-left mb-[48px] md:mb-[30px] `}
            >
              We offer you:
            </h2>
            <div className="flex flex-col ss:flex-row  md:flex-col gap-[16px] md:gap-[24px]">
              {ServiceItems.map((serv, index) => (
                <div className="flex flex-row gap-[16px] py-[24px] justify-start items-start px-[16px] lg:px-[12px]  bg-white  ">
                  <div className="icon">
                    <img
                      src={serv.icon}
                      alt=""
                      className="w-[100px] md:w-[200px]"
                    />
                  </div>
                  <div>
                    <h4 className={`${styles.heading4} mb-[8px]  `}>
                      {serv.title}
                    </h4>
                    <p className="font-nunito text-[12.5px] lg:text-[14px] text-black font-normal leading-[20px] ">
                      {serv.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="sellers  w-full  ">
          <div className="header mb-[30px]">
            <h2
              className={`${styles.heading2} text-black md:text-left text-center mb-[16px] `}
            >
              All Products
            </h2>
            <div className="md:hidden flex flex-row items-center justify-between   mb-[32px]">
              <div className="searchbox py-[12px] px-[16px] flex   flex-row items-center  w-[271px]  rounded-[4px] gap-[16px] ">
                <img src={search} alt="" className="w-[24px]  h-[24px] " />
                <input
                  type="text"
                  className=" outline-none text-gray"
                  placeholder="Search product"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className=" ">
                <img src={filter} alt="" className="w-[26px]" />
              </div>
            </div>
          </div>

          <div className="product flex flex-wrap justify-center  md:justify-start  xl:justify-start w-fit xlg:w-full md:gap-[25px] lg:gap-[32px] gap-x-[15px] gap-y-5">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <ProductContainer
                  key={index._id}
                  title={product.meta_description}
                  name={product.name}
                  image={product.imageUrl}
                  price={product.price}
                  path={product._id}
                />
              ))
            ) : (
              <div className="w-full h-full ">
                No products found for the selected category
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
