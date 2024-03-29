import React, { useEffect, useCallback, useRef, useState } from "react";
import { closeIcon, deleteIcon, uploadProductIcon } from "../Assets";
import Button from "./Button";
import styles from "../style";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import $http from "../api/axios";

const Modal = ({
  onClose,
  show,
  quantity,
  selectedProps,
  productId,
  price,
}) => {
  const modalContentRef = useRef(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingUpload, setLoadingUpload] = useState(false);
  const navigate = useNavigate();

  const closeOnEscapeKeyDown = useCallback(
    (e) => {
      if ((e.charCode || e.keyCode) === 27) {
        onClose();
      }
    },
    [onClose]
  );

  const handleClick = useCallback(
    (e) => {
      if (
        modalContentRef.current &&
        !modalContentRef.current.contains(e.target)
      ) {
        onClose();
      }
    },
    [onClose]
  );

  const handleFileUpload = async (event) => {
    const files = event.target.files;

    if (files.length > 0) {
      const validFiles = Array.from(files).filter(isValidFile);

      if (validFiles.length > 0) {
        try {
          setLoadingUpload(true);
          const baseUrl = `https://tp-prod.onrender.com/api/v1`
          const designUploadEndpoint = `${baseUrl}/design/upload`;
          const formData = new FormData();
          formData.append("design", validFiles[0]);

          console.log(formData)
          const uploadResponse = await axios.post(
            designUploadEndpoint,
            formData
          );

          if (!uploadResponse.data.designUrl) {
            throw new Error("Failed to upload design");
          }

          setUploadedFiles([
            {
              name: validFiles[0].name,
              designUrl: uploadResponse.data.designUrl,
            },
          ]);
          toast.success("File successfully uploaded.", {
            className: "custom-toast-success",
          });
        } catch (error) {
          console.error("Failed to upload design:", error.message);
          toast.error("Failed to upload design. Please try again.", {
            className: "custom-toast-error",
          });
        } finally {
          setLoadingUpload(false);
        }
      } else {
        toast.error("Invalid file format. Please upload valid format files.", {
          className: "custom-toast-error",
        });
      }
    }
  };

  const handleCart = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const designUrl = uploadedFiles[0]?.designUrl;

      if (!designUrl) {
        throw new Error("Design URL not found");
      }

      const baseUrl = `/api/v1`;

      // Retrieve visitorId from localStorage
      const userId = localStorage.getItem("userId");
     
      if (!userId) {
        throw new Error("user is null or undefined");
      }

      const cartEndpoint = `/carts/add/${userId}`;

      const data = {
        product: productId,
        quantity: quantity,
        price: price,
        files: [designUrl],
        additionalProps: selectedProps,
      };

      const response = await $http.patch(cartEndpoint, data);

      if (response.status) {
        toast.success("Items added to cart successfully!", {
          className: "custom-toast-success",
        });
        onClose();
        navigate("/cart");
      }
    } catch (error) {
      console.error("Failed to add items to cart:", error.message);
      toast.error("Failed to add items to cart. Please try again.", {
        className: "custom-toast-error",
      });
    } finally {
      setLoading(false);
    }
  };

  const isValidFile = (file) => {
    const allowedTypes = [
      "application/pdf",
      "image/png",
      "image/jpg",
      "image/vnd.adobe.photoshop",
      "application/postscript",
      "application/illustrator",
      "application/cdr",
    ];

    return allowedTypes.includes(file.type);
  };

  const handleDeleteFile = (index) => {
    const newUploadedFiles = [...uploadedFiles];
    newUploadedFiles.splice(index, 1);
    setUploadedFiles(newUploadedFiles);
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, [closeOnEscapeKeyDown]);

  return (
    <div
      className={`modal fixed z-[10000] left-0 top-0 right-0 bottom-0 bg-[#00000080] ${
        styles.flexCenter
      } opacity-0 min-h-screen pointer-events-none z-20 ${show ? "show" : ""}`}
      onClick={handleClick}
    >
      <div
        ref={modalContentRef}
        className=" w-[90%]  md:w-[70%] lg:w-[959px] flex flex-col items-center relative justify-center h-[471px] md:h-[535px] lg:h-[635px] modal-content bg-white py-[44px] px-[43px] shadow-loginCard "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full">
          <div className="flex items-end justify-end">
            <img
              src={closeIcon}
              alt=""
              onClick={onClose}
              className="absolute top-6 sm:top-10 md:right-6 right-4 lg:right-16 cursor-pointer"
            />
          </div>
          <form
            onSubmit={handleCart}
            className=" ss:w-[502px] lg:w-[602px] mx-auto "
          >
            <h3
              className={`${styles.heading3} sm:text-[25px] text-center py-[18px] sm:p-[24px] bg-[#f2f2f2] mb-[10px] sm:mb-[32px]`}
            >
              Upload your design
            </h3>
            <div>
              {!uploadedFiles.length ? (
                <div>
                  {loadingUpload ? (
                   <div className="flex items-center justify-center flex-col h-[315px]">
                     <FaSpinner
                      className="text-skyBlueText animate-spin"
                      size={80}
                    />
                   </div>
                  ):(
                    <div className="bg-[#f2f2f2]  border border-dashed border-skyBlueText relative flex items-center flex-col h-[315px] ">
                      <div className="h-full w-full ">
                        <input
                          type="file"
                          multiple
                          accept=".pdf,.cdr,.psd,.ai,.png,.jpg"
                          className="cursor-pointer w-full h-full absolute left-0 z-50 md:h-full opacity-0"
                          onChange={handleFileUpload}
                        />
                      </div>
                      <div className="absolute top-12  flex items-center flex-col gap-[40px]  ">
                        <img
                          src={uploadProductIcon}
                          alt=""
                          className="w-[48px] ss:w-[60px] sm:w-fit  mx-auto  "
                        />
                        <p
                          className={`font-nunito text-[14px] w-[175px] ss:text-[18px] ss:w-[393px] text-center `}
                        >
                          Drag and drop to upload or{" "}
                          <span className="underline hover:no-underline text-red font-bold ">
                            click here
                          </span>{" "}
                          to select files from your system
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className=" w-[90%] text-left ">
                  <p className="mb-[16px] text-[18px] text-black leading-[24px] font-semibold ">
                    Uploaded Files
                  </p>
                  {uploadedFiles.map((file, index) => (
                    <div
                      key={index}
                      className="flex flex-row items-center justify-between gap-[16px]  w-full "
                    >
                      <p className="font-nunito text-[16px] text-black opacity-[0.8] ">
                        {`${index + 1}. ${file.name}`}
                      </p>
                      <button
                        onClick={() => handleDeleteFile(index)}
                        className=""
                      >
                        <img src={deleteIcon} alt="" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {!uploadedFiles.length ? (
              ""
            ) : (
              <Button
                title={
                  loading ? (
                    <FaSpinner className="text-white animate-spin" size={30} />
                  ) : (
                    "Proceed to Cart"
                  )
                }
                type={"submit"}
                classname={
                  "bg-skyBlueText cursor-pointer mt-[24px] py-[16px] rounded-[4px] w-full text-white flex items-center justify-center "
                }
                onClick={handleCart}
              />
            )}
          </form>
        </div>
      </div>
      <ToastContainer toastClassName={({ type }) => `custom-toast-${type}`} />
    </div>
  );
};

export default Modal;
