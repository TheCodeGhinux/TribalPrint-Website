import React, { useState, useEffect } from "react";

const LazyLoadedImage = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulate a 2-second delay

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="h-[220px] flex w-full items-center justify-center font-semibold bg-lightBlue">
          Loading...
        </div>
      ) : (
        <div className="h-[270px] overflow-hidden flex items-center justify-center  ">
          <img src={src} alt={alt} className="w-full h-full object-cover " />
        </div>
      )}
    </div>
  );
};

export default LazyLoadedImage;
