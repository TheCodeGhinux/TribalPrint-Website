import { Link, useParams } from "react-router-dom";
import { Button } from "../../Utils";
import styles from "../../style";
import { useEffect, useState } from "react";
import axios from "axios";

const CheckOutPage = () => {
  const { checkoutId } = useParams();
  const [checkoutDetails, setCheckoutDetails] = useState(null);

  useEffect(() => {
    const fetchCheckoutDetails = async () => {
      try {
        const baseUrl = `https://tribalprintengine.onrender.com/api/v1/carts/orders/get/${checkoutId}`;
        const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Implc3Vzd3JpdGVzMjAwNDNAZ21haWwuY29tIiwic3ViIjoiNjU1NzdhNzFlYzI2ODEyYTBmYTljMjk2IiwiaWF0IjoxNzAyNzIwMjEzLCJleHAiOjM2MDAwMDE3MDI3MjAyMTN9.RAFjVE_WdKjS9GqkK6Gtt75T9K6GvWki_DOwVHhHXX8`;

        const response = await axios.get(baseUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status < 200 || response.status >= 300) {
          throw new Error(
            `Failed to fetch checkout details: ${response.statusText}`
          );
        }

        setCheckoutDetails(response.data);
      } catch (error) {
        console.error(error.message);
        // Handle error if needed
      }
    };

    fetchCheckoutDetails();
  }, [checkoutId]);

  return (
    <div className="mt-[170px]">
      <div className={`${styles.boxWidth}  ${styles.paddingX} `}>
        <h1 className={`${styles.heading1} mb-[46px] md:mb-[64px]`}>
          Check Out
        </h1>
        <div className="flex flex-col md:flex-row md:gap-[32px]  ">
          <form className="w-full">
            <div className="p-[24px]  flex flex-col gap-[24px] ">
              <h3 className="text-black text-[18px] md:text-[24px] font-semibold font-monteserrat ">
                Customer Information
              </h3>
              <div className="name flex flex-col md:flex-row gap-[24px] ">
                <div className="w-full">
                  <input
                    type="text"
                    required
                    className="w-full outline-none border border-gray p-[16px] rounded-[4px] "
                    placeholder="First Name"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    required
                    className="w-full outline-none border border-gray p-[16px] rounded-[4px] "
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="email flex flex-col md:flex-row gap-[24px] ">
                <div className="w-full">
                  <input
                    type="email"
                    required
                    className="w-full outline-none border border-gray p-[16px] rounded-[4px] "
                    placeholder="Email"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="tel"
                    required
                    className="w-full outline-none border border-gray p-[16px] rounded-[4px] "
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="check-btn  mt-[20px] md:mt-[72px] flex flex-col md:flex-row gap-[24px] ">
                <Button
                  title={"Generate Invoice"}
                  type={"button"}
                  classname={
                    " text-lightGreen font-nunito border border-lightGreen py-[16px] px-[24px] rounded-[4px] w-full "
                  }
                />
                <Button
                  title={"Proceed"}
                  type={"submit"}
                  classname={
                    " text-white font-nunito bg-lightGreen py-[16px] px-[24px] rounded-[4px] w-full "
                  }
                />
              </div>
            </div>
          </form>
          <div className="md:w-3/4 lg:w-[526px]">
            {checkoutDetails && (
              <div className="order-summary mb-[32px]  bg-[#F2F2F2] flex flex-col gap-[24px] p-[24px] ">
                <h3 className="font-monteserrat text-[18px] md:text-[24px] font-semibold flex items-center justify-between ">
                  <span>Order Summary</span>
                  <span className="font-nunito md:text-[18px] text-red font-semibold ">
                    {checkoutDetails.items.length} Item(s)
                  </span>
                </h3>
                {checkoutDetails.items.map((item, index) => (
                  <p
                    key={item._id}
                    className="flex items-center md:text-[18px] justify-between "
                  >
                    <span>{`${index + 1}. ${item.description?.name || ""}`}</span>
                    <span>₦{item.lineTotal}</span>
                  </p>
                ))}
                <p className="items-center hidden md:text-[18px] justify-between ">
                  <span>VAT</span>
                  <span>N2,025</span>
                </p>
                <p className="flex items-center text-[24px] justify-between ">
                  <span className="font-bold  ">Total</span>
                  <span className="font-bold">
                    ₦{checkoutDetails.totalAmount}
                  </span>
                </p>
                <Button
                  title={"Proceed"}
                  type={"submit"}
                  classname={
                    " text-white font-nunito bg-skyBlueText py-[16px] px-[24px] rounded-[4px] w-full "
                  }
                />
              </div>
            )}
            <div className="instructions p-[24px]  bg-[#FFD4E6] ">
              <p className="font-normal text-[18pxs] ">
                Hey customer, <br /> your order will be ready in 3 – 5 working
                days from today and will be fulfilled, through the method you
                select below. Please, bear in mind that payment validates order.
                Thanks!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
