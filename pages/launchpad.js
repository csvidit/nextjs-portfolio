import Head from "next/head";
import JumboTitle from "../components/JumboTitle";
import { useSpring, animated } from "@react-spring/web";
import LaunchpadLinksContainer from "../components/LaunchpadLinksContainer";
import JumboBox from "../components/JumboBox";
import LaunchpadBoxesContainer from "../components/LaunchpadBoxesContainer";
import LaunchpadSlider from "../components/LaunchpadSlider";
import KeenSlider from "../components/KeenSlider";
import KeenSliderContainer from "../components/KeenSliderContainer";
import ActionPrompt from "../components/ActionPrompt";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

const mainContainerStyles =
  "w-screen h-screen flex flex-col space-y-6 justify-center";

const headerContainerStyles = "ml-5 mr-5 xl:ml-20 xl:mr-20";

export default function Launchpad() {
  const [springs0, api0] = useSpring(() => ({
    from: { y: -50 },
    to: { y: 0 },
  }));
  const [springs1, api1] = useSpring(() => ({
    from: { y: 50 },
    to: { y: 0 },
  }));

  const nonClick = () => {
    api0.start({
      from: {
        opacity: 1,
      },
      to: {
        opacity: 0,
      },
    });
  };

  return (
    <div className={mainContainerStyles}>
      <Head></Head>
      <div className="{headerContainerStyles}">
        <animated.div className="ml-5 mr-5 xl:ml-20 xl:mr-20" style={{ ...springs0 }} onClick={nonClick}>
          <JumboTitle spaced="false">Launchpad</JumboTitle>
          <ActionPrompt className="mb-6">Swipe through the boxes below</ActionPrompt>
        </animated.div>
        <animated.div style={{ ...springs1 }}>
          <LaunchpadBoxesContainer>
            <LaunchpadSlider></LaunchpadSlider>
          </LaunchpadBoxesContainer>
        </animated.div>
      </div>
    </div>
  );
}

{
  /* <LaunchpadLinkAll link="/all">ALL</LaunchpadLinkAll>
            <LaunchpadLinkAll link="https://github.com/csvidit">CODING PROJECTS</LaunchpadLinkAll>
            <LaunchpadLinkAll link="/lit">LITERATURE</LaunchpadLinkAll>
            <LaunchpadLinkAll link="/acad">ACADEMIC PAPERS</LaunchpadLinkAll> */
}
