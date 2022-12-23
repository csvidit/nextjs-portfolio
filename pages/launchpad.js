import Head from "next/head";
import JumboSubtitle from "../components/JumboSubtitle";
import JumboTitle from "../components/JumboTitle";
import { useSpring, animated } from "@react-spring/web";
import Subtitle2 from "../components/Subtitle2";
import LaunchpadLinksContainer from "../components/LaunchpadLinksContainer";
import LaunchpadLinkAll from "../components/LaunchpadLinkAll";
import LaunchpadLinkCS from "../components/LaunchpadLinkCS";

const mainContainerStyles =
  "w-screen h-screen flex flex-col space-y-6 justify-center";

const headerContainerStyles = "ml-20 mr-20";

export default function Launchpad() {
  const [springs0, api0] = useSpring(() => ({
    from: { y: -50 },
    to: { y: 0 },
  }));
  const [springs1, api1] = useSpring(() => ({
    from: { y: 50 },
    to: { y: 0 },
  }));
  //   const springs0 = useSpring({ from: { y: -50 }, to: { y: 0 } });
  //   const springs1 = useSpring({ from: { y: 50 }, to: { y: 0 } });
  const nonClick = () => {
    api0.start({
      from: {
        x: 0,
      },
      to: {
        x: 25,
      },
    });
  };

  return (
    <div className={mainContainerStyles}>
      <Head></Head>
      <div className={headerContainerStyles}>
        <animated.div style={{ ...springs0 }} onClick={nonClick}>
          <JumboTitle>Launchpad</JumboTitle>
        </animated.div>
        {/* <animated.div style={{ ...springs1 }}>
          <Subtitle2>This world is massive!</Subtitle2>
        </animated.div> */}
        <animated.div style={{ ...springs1 }}>
          <LaunchpadLinksContainer>
            <LaunchpadLinkAll>ALL</LaunchpadLinkAll>
            <LaunchpadLinkAll>CODING PROJECTS</LaunchpadLinkAll>
            <LaunchpadLinkAll>LITERATURE</LaunchpadLinkAll>
            <LaunchpadLinkAll>ACADEMIC PAPERS</LaunchpadLinkAll>
          </LaunchpadLinksContainer>
        </animated.div>
      </div>
    </div>
  );
}
