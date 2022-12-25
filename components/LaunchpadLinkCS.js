import fontStyles from "./Font.module.css";
import { useSpring, animated } from "@react-spring/web";
import Link from "next/link"

const divStyles =
  "flex flex-row w-72 h-32 text-2xl cs-text uppercase border border-1 border-lime-400 hover:text-black hover:cs-bg";

const btnStyles = "w-full h-full flex flex-col justify-center"

const LaunchpadLinkCS = (props) => {
  return (
      <animated.div className={divStyles+" "+colors.cs_text}>
        <Link href="/all" className={fontStyles.clash_btn+" "+btnStyles}>
          <p className="justify-center self-center">ALL</p>
        </Link>
      </animated.div>
  );
};

export default LaunchpadLinkCS;
