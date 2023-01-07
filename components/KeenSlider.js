import "keen-slider/keen-slider.min.css";
import JumboBox from "./JumboBox";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module

export default () => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log("slide changed");
      },
    },
    [
      // add plugins here
    ]
  );

  return (
    <div ref={sliderRef} className="keen-slider">
      <JumboBox>Coding Projects</JumboBox>
      <JumboBox>Coding Projects</JumboBox>
      <JumboBox>Coding Projects</JumboBox>
    </div>
  );
};
