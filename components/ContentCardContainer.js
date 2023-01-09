import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";

import "keen-slider/keen-slider.min.css";

const ContentCardContainer = (props) => {

    // const [windowSize, setWindowSize] = useState(getWindowSize());

    // useEffect(() => {
    //     function handleWindowResize() {
    //       setWindowSize(getWindowSize());
    //     }
    
    //     window.addEventListener('resize', handleWindowResize);
    
    //     return () => {
    //       window.removeEventListener('resize', handleWindowResize);
    //     };
    //   }, []);

    // function getWindowSize() {
    //     const {innerWidth, innerHeight} = window;
    //     return {innerWidth, innerHeight};
    //   }

    // function numSlides()
    // {
    //     if(window.innerWidth < 480)
    //     {
    //         return 1;
    //     }
    //     else
    //     {
    //         return 3.5
    //     }
    // };

  const [sliderRef] = useKeenSlider({
    loop: false,
    mode: "free-snap",
    slides: {
    //   perView: windowSize.innerWidth < 480? 1:3.5,
    perView: 3.5,
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      {props.children}
    </div>
  );
};

export default ContentCardContainer;
