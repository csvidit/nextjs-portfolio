import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const ContentCardContainer = (props) => {

  const [sliderRef] = useKeenSlider({
    loop: false,
    mode: "free-snap",
    slides: {
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
