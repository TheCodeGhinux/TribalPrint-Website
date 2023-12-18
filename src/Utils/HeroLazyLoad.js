import React, { useState, useEffect } from "react";
import { artboardLazy } from "../Assets";

const HeroLazyLoad = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="custom-spin">
      {isLoading ? (
       <img src={artboardLazy} 
       className={`w-[320px]  ss:w-[550px]   md:w-full lg:w-[542px]`}
       alt=""
       />
      ) : (
        <img src={src} alt={alt} 
        className={` w-full ss:w-[500px] md:w-full lg:w-[542px]`} />
      )}
    </div>
  );
};

export default HeroLazyLoad;
