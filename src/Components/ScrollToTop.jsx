import React from 'react'
import { useEffect, useState } from "react";
import { arrowUp } from '../Assets';


const ScrollToTop = () => {
     // show text on hover
	const [showBTT, setShowBTT] = useState(false);
	const handleMouseOver = () => {
		setShowBTT(true);
	}
	const handleMouseOut = () => {
		setShowBTT(false);
	}

	// add scroll to top feature
	const [displayArrow, setDisplayArrow] = useState(false);

	const scrollUp = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	const listenToScroll = () => {
		if (
			document.body.scrollTop > 50 ||
			document.documentElement.scrollTop > 50
		) {
			setDisplayArrow(true);
		} else {
			setDisplayArrow(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", listenToScroll);
		return () => window.removeEventListener("scroll", listenToScroll);
	}, []);


  return (
    <div>
        {displayArrow && (
            <div className="flex gap-4 items-center p-2 fixed z-20 bottom-[40px] right-[25px] lg:right-[35px] z-10 bg-gray shadow-scrollBtn rounded-full cursor-pointer" onClick={scrollUp} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <div className="text-white">
                    <img src={arrowUp} alt="arrow" className="w-[27px]"/>
                </div>
            </div>
        )}
    </div>
  )
}
 
export default ScrollToTop;