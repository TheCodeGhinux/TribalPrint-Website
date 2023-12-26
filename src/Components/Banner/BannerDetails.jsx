import { useParams } from "react-router-dom";
import { search } from "../../Assets";
import { BannerData } from "../../Constants";
import styles from "../../style";
import BannerContainer from "./BannerContainer";
import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "./Hero";

const BannerDetails = () => {
  const { id } = useParams();
  const [itemData, setItemData] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const baseUrl = `https://tp-prod.onrender.com/api/v1/categories/${id}`;
        const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Implc3Vzd3JpdGVzMjAwNDNAZ21haWwuY29tIiwic3ViIjoiNjU1NzdhNzFlYzI2ODEyYTBmYTljMjk2IiwiaWF0IjoxNzAwNjY2NjU5LCJleHAiOjM2MDAwMDE3MDA2NjY2NTl9.ZFE2O34gp4eVC5EYGXLA9AYu-mwSEdqggsaHQep3Em8`;
        const response = await axios.get(baseUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status < 200 || response.status >= 300) {
          throw new Error(
            `Failed to fetch payment methods: ${response.statusText}`
          );
        }

        setItemData(response.data);
      } catch (error) {
        setError(error.message || "Error fetching payment methods");
        console.error(error.message);
      }
    };
    fetchProductsByCategory();
  }, [id]);

  const filteredProducts = itemData.products
    ? itemData.products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div>
      <Hero selectedItem={itemData} />
      <div
        className={`xl:max-w-[1350px] w-full  mx-auto ${styles.paddingX}  my-[66px]`}
      >
        <div className="searchbox bg-[#fff] p-[16px] shadow mb-[66px] flex   flex-row items-center  w-full md:w-[560px]  rounded-[4px] gap-[16px] ">
          <input
            type="text"
            className=" outline-none text-gray  w-full  "
            placeholder="Search product you want to print"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <img src={search} alt="" className="w-[24px]  h-[24px] " />
        </div>
        <div className=" flex items-start justify-center xl:justify-start gap-[32px] flex-wrap ">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <BannerContainer
                path={product._id}
                key={product._id}
                productId={product._id}
                image={product.imageUrl}
                name={product.name}
                price={product.minimum_price}
                quantity={product.minimum_quantity}
                content={product.meta_description}
              />
            ))
          ) : (
            <div>No products found for the selected category</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BannerDetails;
