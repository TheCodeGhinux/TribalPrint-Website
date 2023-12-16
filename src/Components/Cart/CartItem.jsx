import { Link } from "react-router-dom";
import styles, { layout } from "../../style";
import { Button } from "../../Utils";
import { addIcon, checkMark, flexBannerLg, subtractIcon } from "../../Assets";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";

const CartItem = ({
  quantity,
  cardId,
  name,
  imageUrl,
  price,
  additionalProps,
  setCart,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async (cardId) => {
    try {
      setLoading(true);

      const baseUrl = `https://tribalprintengine.onrender.com/api/v1/carts/remove/${cardId}`;
      const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Implc3Vzd3JpdGVzMjAwNDNAZ21haWwuY29tIiwic3ViIjoiNjU1NzdhNzFlYzI2ODEyYTBmYTljMjk2IiwiaWF0IjoxNzAyNzIwMjEzLCJleHAiOjM2MDAwMDE3MDI3MjAyMTN9.RAFjVE_WdKjS9GqkK6Gtt75T9K6GvWki_DOwVHhHXX8`;

      const response = await axios.patch(baseUrl, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(token);
      if (response.status < 200 || response.status >= 300) {
        throw new Error(`Failed to remove item: ${response.statusText}`);
      }

      toast.success("Item removed successfully!");

      // Fetch updated cart data after deletion
      const updatedCartResponse = await axios.get(
        "https://tribalprintengine.onrender.com/api/v1/carts/get",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (updatedCartResponse.status < 200 || updatedCartResponse.status >= 300) {
        throw new Error(`Failed to fetch updated cart data: ${updatedCartResponse.statusText}`);
      }

      setCart(updatedCartResponse.data);
    } catch (error) {
      setError(error.message || "Error removing item");
      console.error(error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className=" flex xs:w-[400px] md:w-full flex-col lg:flex-row justify-between">
        <div
          className={` mb-[43px] bg-[#F2F2F2] lg:w-[600px] xl:w-full md:w-full md:px-6 lg:justify-start ${layout.section1} flex flex-col  gap-[48px] md:py-6 md:gap-5  `}
        >
          <div className="w-fit lg:m-0  mx-auto ">
            <img
              src={imageUrl}
              alt=""
              className="w-fit md:w-[249px] xl:w-[249px] md:h-fit mx-auto"
            />
          </div>
          <div className="flex w-full flex-col gap-[24px]">
            <div className="flex items-center justify-between">
              <h2 className="font-nunito text-black md:w-full ss:w-[500px] xl:w-[528px] smd:w-[518px] ">
                <span className={`${styles.heading4}`}> {quantity} pcs</span>
                <span
                  className={`${styles.heading4} border-r border-l  px-2 border-[#bdbdbd] mx-2`}
                >
                  {name}
                </span>
                <span className={`${styles.heading4}`}> ₦ {price} </span>
              </h2>
              <button
                className="text-[#E30613] w-14 flex items-end justify-end "
                onClick={() => handleDelete(cardId)}
                disabled={loading}
              >
                {loading ? (
                  <FaSpinner className="text-[red] animate-spin  " size={20} />
                ) : (
                  "Delete"
                )}
              </button>
            </div>
            <hr className="border-t border-t-[#BDBDBD]  " />
            <div className="flex flex-col md:flex-row gap-[24px]">
              {additionalProps && (
                <div className="flex flex-wrap  items-center gap-x-8 gap-y-5 w-fit">
                  {Object.keys(additionalProps).map((propCategory) => (
                    <div key={propCategory} className="">
                      <div className="">
                        <h2 className={`${styles.heading4} mb-[8px]  `}>
                          {propCategory}:
                        </h2>
                        <div
                          className={`text-skyBlueText bg-skyBlue border-transparent flex items-center gap-2  w-fit px-[16px] cursor-pointer py-[8px] border border-[#292929]`}
                        >
                          {typeof additionalProps[propCategory] === "object" ? (
                            // If it's an object, display its properties and values
                            <ul className="flex flex-wrap gap-4  ">
                              {Object.entries(
                                additionalProps[propCategory]
                              ).map(([prop, value]) => (
                                <li
                                  className={`text-black  w-fit px-[16px] cursor-pointer py-[8px] border border-[#292929]`}
                                  key={prop}
                                >
                                  {`${prop}: ${value}`}
                                  <IoCheckmarkCircleOutline color="#213B6F" />
                                </li>
                              ))}
                            </ul>
                          ) : (
                            // Handle the case where additionalProps[propCategory] is not an object
                            <p className="boder">
                              {additionalProps[propCategory]}
                            </p>
                          )}
                          <IoCheckmarkCircleOutline color="#213B6F" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <hr className="border-t border-t-[#BDBDBD]  " />
            <div className="flex flex-col gap-2">
              <h2 className={`${styles.heading4} leading-none`}>Quantity:</h2>
              <div className="flex flex-row items-center w-[280px] md:w-full justify-between">
                <div className="border border-[#213B6F]">
                  <p className=" text-black  w-[170px] flex flex-row items-center justify-between gap-2  px-[16px] py-[8px] ">
                    <button className="font-nunito text-skyBlueText">
                      <img src={subtractIcon} alt="" />
                    </button>
                    <span>{quantity}</span>
                    <button>
                      <img src={addIcon} alt="" />
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
