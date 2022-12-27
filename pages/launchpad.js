import Head from "next/head";
import JumboSubtitle from "../components/JumboSubtitle";
import JumboTitle from "../components/JumboTitle";
import { useSpring, animated } from "@react-spring/web";
import Subtitle2 from "../components/Subtitle2";
import LaunchpadLinksContainer from "../components/LaunchpadLinksContainer";
import LaunchpadLinkAll from "../components/LaunchpadLinkAll";
import LaunchpadLinkCS from "../components/LaunchpadLinkCS";
import JumboBox from "../components/JumboBox";

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
      <div className={headerContainerStyles}>
        <animated.div style={{ ...springs0 }} onClick={nonClick}>
          <JumboTitle>Launchpad</JumboTitle>
        </animated.div>
        {/* <animated.div style={{ ...springs1 }}>
          <Subtitle2>This world is massive!</Subtitle2>
        </animated.div> */}
        <animated.div style={{ ...springs1 }}>
          <LaunchpadLinksContainer>
          </LaunchpadLinksContainer>
          <JumboBox>Coding Projects</JumboBox>
        </animated.div>
      </div>
    </div>
  );
}

{/* <LaunchpadLinkAll link="/all">ALL</LaunchpadLinkAll>
            <LaunchpadLinkAll link="https://github.com/csvidit">CODING PROJECTS</LaunchpadLinkAll>
            <LaunchpadLinkAll link="/lit">LITERATURE</LaunchpadLinkAll>
            <LaunchpadLinkAll link="/acad">ACADEMIC PAPERS</LaunchpadLinkAll> */}
