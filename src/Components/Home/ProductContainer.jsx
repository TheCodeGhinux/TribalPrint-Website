import { NavLink, useParams } from "react-router-dom";
import styles from "../../style";
import { Suspense, lazy } from "react";

const LazyLoadedImage = lazy(() => import("../../Utils/LazyLoadedImage"));

const ProductContainer = ({ path, image, name, price, quantity, title, description }) => {
  return (
    <NavLink 
    to={`/all-products/${path}`}
    >
      <div
        className={`${styles.image} shadow-card   bg-white  pt-[16px] px-[16px] md:w-[283px] xs:w-[290px]  lg:w-[264px] xlg:w-[274px]  xl:w-[294px] pb-[16px] md:pb-[32px] `}
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
        <div>
          <h2 className={`${styles.heading4} mb-2 text-black font-normal`}>
            {name}
          </h2>
          <h3>
            <span className="block">{title}</span>
            <span>{description}</span>
          </h3>
          
        </div>
      </div>
    </NavLink>
  );
};

export default ProductContainer;
