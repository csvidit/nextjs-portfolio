import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import JumboBox from "./JumboBox";

const KeenSliderContainer = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
  });

  return (
    <div ref={sliderRef} className="keen-slider">
    <div><JumboBox>Coding Projects</JumboBox></div>
    <div><JumboBox>Literature</JumboBox></div>
    <div><JumboBox>Academic Papers</JumboBox></div>
    <div><JumboBox>Other</JumboBox></div>
    </div>
  );
};

export default KeenSliderContainer;
