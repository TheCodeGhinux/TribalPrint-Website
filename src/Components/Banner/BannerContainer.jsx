import { NavLink, useParams } from "react-router-dom";
import styles from "../../style";
import { Suspense, lazy } from "react";

const LazyLoadedImage = lazy(() => import("../../Utils/LazyLoadedImage"));

const BannerContainer = ({ image, name, price, productId, content, quantity }) => {
  const { id } = useParams();
  return (
    <NavLink
      to={`/all-products/${id}/upload/${productId}`}
      className={`${styles.image} shadow-card bg-white md:h-fit w-[311px] px-[16px] pt-[16px] md:w-[304px] pb-[24px] md:pb-[32px] `}
    >
      <Suspense
        fallback={
          <div className="h-[220px] mb-[16px] flex w-full items-center justify-center bg-lightBlue">
            Loading...
          </div>
        }
      >
        <div className="mb-[16px] ">
          <LazyLoadedImage src={image} alt="" />
        </div>
      </Suspense>
      <div className="flex flex-col gap-[16px]">
        <h4 className={`${styles.heading4} text-black font-normal`}>{name}</h4>
        <p className="flex flex-row gap-[8px] ">
          <span className="font-nunito text-black leading-[24px] font-normal text-[16px] ">
            ₦{price}
          </span>
          <span className="font-nunito text-gray text-[14px] font-normal " > per {quantity} </span>
        </p>
        <p className="font-nunito text-gray text-[14px] ">{content}</p>
      </div>
    </NavLink>
  );
};

export default BannerContainer;
