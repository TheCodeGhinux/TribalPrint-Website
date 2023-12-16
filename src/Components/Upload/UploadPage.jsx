import { useEffect, useState } from "react";
import { addIcon, checkMark, subtractIcon, uploadIcon } from "../../Assets";
import { Software } from "../../Constants";
import styles, { layout } from "../../style";
import Modal from "../../Utils/Modal";
import { setIncreaseItem, setDecreaseItem } from "../../features/cartSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const UploadPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [selectedProps, setSelectedProps] = useState({});
  const dispatch = useDispatch();
  const onIncreaseItem = () => {
    setIncreaseItem();
  };

  const onDecreaseItem = () => {
    setDecreaseItem();
  };

  const { id, productId } = useParams();
  const [paymentMethods, setPaymentMethods] = useState({});
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const baseUrl = `https://tribalprintengine.onrender.com/api/v1/categories/${id}`;
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

        setPaymentMethods(response.data);
        const product = response.data.products.find(
          (product) => product._id === productId
        );
        console.log(productId)
        setSelectedProduct(product);
        setPrice(quantity * (product ? product.minimum_price : 0));
      } catch (error) {
        setError(error.message || "Error fetching payment methods");
        console.error(error.message);
      }
    };
    fetchSingleProduct();
  }, [id, productId, quantity]);

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
    console.log("Selected Props:", selectedProps);
    console.log("modall");
  };

  return (
    <div className=" flex flex-col items-center justify-center mt-[170px] xs:mt-[120px] sm:mt-[170px] lg:mt-[200px]  ">
      <Modal 
      price={price}
      quantity={quantity}
      name={selectedProduct ? selectedProduct.name : ""}
      imageUrl={selectedProduct ? selectedProduct.imageUrl : ""}
      selectedProps={selectedProps}
      productId={productId}
        onClose={toggleModal} 
        show={showModal} />
      <div className="w-full">
        <div
          className={`${styles.boxWidth} mb-[43px] lg:justify-center ${layout.section1} flex flex-col pb-20 gap-[48px] xl:gap-8 md:pb-2 md:gap-5 md:pt-[0px]  ${styles.paddingX}`}
        >
          <div className="w-fit  lg:m-0  lg:w-full  mx-auto">
            <img
              src={selectedProduct ? selectedProduct.imageUrl : null}
              alt=""
              className="w-fit md:w-full lg:w-full  md:h-full mx-auto"
            />
          </div>
          <div className="flex w-fit lg:w-full  flex-col gap-[24px] ">
            <h2
              className={`${styles.heading2} border-b border-b-[#BDBDBD] pb-2 `}
            >
              {selectedProduct ? selectedProduct.name : "Loading..."}
            </h2>
            <p className="font-nunito text-black md:w-[379px] ss:w-[500px] lg:w-[528px] smd:w-[518px] ">
              {selectedProduct ? selectedProduct.meta_description : "Loading..."}
            </p>
            <div className="flex flex-col gap-[24px]">
              <div>
                <h2 className={`${styles.heading4} mb-[8px] `}>Material:</h2>
                <p className="font-nunito text-black md:w-[379px] ss:w-[500px] lg:w-[528px] smd:w-[518px] ">
                  {selectedProduct ? selectedProduct.prop_material : "Loading..."}
                </p>
              </div>

              <div>
                <h2 className={`${styles.heading4} mb-[8px] `}>Finishing:</h2>
                <p className="font-nunito text-black md:w-[379px] ss:w-[500px] lg:w-[528px] smd:w-[518px] ">
                  {selectedProduct ? selectedProduct.prop_finishing : "Loading..."}
                </p>
              </div>
              <div className="options">
                <p className="italic text-red mb-2 font-semibold ">Please select the specifications you want</p>
                {selectedProduct?.additionalProps && (
                  <div className="flex flex-wrap items-center gap-x-8 gap-y-5 w-fit">
                    {Object.keys(selectedProduct.additionalProps).map(
                      (propCategory) => (
                        <div key={propCategory} className="">
                          <div className="">
                            <h2 className={`${styles.heading4} mb-[8px] `}>
                              {propCategory}:
                            </h2>
                            <div className="flex flex-row gap-[32px] w-fit">
                              <ul className="flex flex-wrap gap-4">
                                {selectedProduct.additionalProps[
                                  propCategory
                                ].map((prop) => (
                                  <li
                                    className={`black w-fit px-[16px] cursor-pointer py-[8px] border border-[#292929] ${
                                      selectedProps[propCategory] === prop
                                        ? "bg-skyBlue border-transparent flex items-center gap-2"
                                        : ""
                                    }`}
                                    key={prop}
                                    onClick={() =>
                                      setSelectedProps({
                                        ...selectedProps,
                                        [propCategory]: prop,
                                      })
                                    }
                                  >
                                    {prop}
                                    {selectedProps[propCategory] === prop && (
                                      <IoCheckmarkCircleOutline color="#213B6F" />
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>

              <div>
                <h2 className={`${styles.heading4} mb-[8px] `}>Quantity:</h2>
                <div className="flex flex-row items-center justify-between ">
                  <div className="border border-skyBlueText">
                    <p className=" -black  w-[170px] flex flex-row items-center justify-between gap-2  px-[16px] py-[8px] ">
                      <button
                        onClick={() =>
                          setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                        }
                        className="font-nunito text-skyBlueText"
                      >
                        <img src={subtractIcon} alt="" />
                      </button>
                      <span>{quantity}</span>
                      <button onClick={() => setQuantity((prev) => prev + 1)}>
                        <img src={addIcon} alt="" />
                      </button>
                    </p>
                  </div>
                  <div>
                    <p>
                      <span className="font-nunito mr-[16px]">Total</span>
                      <span className={`${styles.heading3} `}>
                      ₦{price}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.boxWidth}  md:bg-transparent bg-[#f2f2f2] py-[48px] px-[22px] xs:px-[32px] lg:justify-center ${layout.section1} flex flex-col pb-20 gap-[48px] md:pb-2 md:gap-5 md:pt-[0px]  ${styles.paddingX}`}
        >
          <div className="hidden  md:flex flex-col bg-[#f2f2f2] items-center justify-center  md:h-[224px] lg:w-[528px] text-center  w-full ">
            <p className="font-nunito md:text-[18px] ">
              These file formats are the only ones that we accept.
              <div className="flex flex-row items-center justify-center gap-[24px] mt-[24px] ">
                {Software.map((soft, index) => (
                  <img src={soft.icon} key={soft.id} alt="" />
                ))}
              </div>
            </p>
          </div>
          <div className="  md:h-[224px] md:px-5 bg-[#f2f2f2] lg:w-[528px] flex flex-col items-center justify-center">
            <p className="text-black mb-[16px] text-center ss:w-[530px] md:w-[370px] lg:w-[464px] mx-auto ">
              Please choose the design(s) that you wish to upload. Our system
              can only process the formats listed below: .pdf, .psd, .cdr, .ai,
              .png (high resolution), .jpg (high resolution).
            </p>
            <div className="flex flex-row mb-[24px] justify-center md:hidden gap-[24px] ">
              {Software.map((soft, index) => (
                <img src={soft.icon} key={soft.id} alt="" />
              ))}
            </div>
            <button
              onClick={toggleModal}
              type="button"
              className="bg-[#213B6F] px-[14px] lg:px-[24px] lg:gap-[12px] py-[16px] mx-auto gap-[5px] justify-between flex rounded-[4px] flex-row items-center    "
            >
              <span className="text-white text-[14px] md:text-[16px] font-nunito ">
                Upload design(s) to proceed with your order
              </span>
              <span>
                <img src={uploadIcon} className="w-[20px] " alt="" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
