import { Link } from "react-router-dom";
import { Button } from "../../Utils";
import styles from "../../style";
import { FaSpinner } from "react-icons/fa";

const TotalCart = ({ product, price, handleCheckout, loading }) => {
  return (
    <section>
      <div className="bg-[#F2F2F2] w-full lg:w-[416px] lg:h-[312px] p-6 flex flex-col gap-6 ">
        <div className="total_price">
          <h2 className="flex gap-6 items-center">
            <span className="text-lg font-nunito">Total</span>
            <span className="text-black md:text-2xl lg:text-3xl font-semibold ">
              ₦{price}
            </span>
          </h2>
        </div>
        <hr className="border-t border-t-[#BDBDBD]  " />
        <p>{product} Product(s)</p>
        <div className="flex mx-auto w-full lg:mx-0 flex-col gap-4 ">
          <div className="w-full">
          <Button
              type={"button"}
              classname={`bg-skyBlueText flex items-center justify-center py-[16px] rounded-[4px] text-white w-full ${styles.image} `}
              title={loading ? (
                  <FaSpinner className="text-white animate-spin  " size={20} />
                ) : (
                  "Checkout Now"
                )}
              onClick={handleCheckout}
            />
          </div>
          <div className="w-full">
            <Link to={"/all-products"}>
              <Button
                type={"button"}
                classname={`border border-skyBlueText py-[16px] rounded-[4px] text-skyBlueText w-full ${styles.image} `}
                title={"Continue Shopping"}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalCart;
