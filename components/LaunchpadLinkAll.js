import styles from "./Font.module.css";
import { useSpring, animated } from "@react-spring/web";
import Link from "next/link"

const divStyles =
  "flex flex-row w-72 h-32 text-2xl text-lime-400 uppercase border border-1 border-lime-400 hover:text-black hover:bg-lime-400";

const btnStyles = "w-full h-full flex flex-col justify-center"

const color_all = "text-lime-400";
const color_all_muted = "text-lime-600";
const color_lit = "text-red-400";
const color_lit_muted = "text-red-600";

const LaunchpadLinkAll = (props) => {
  return (
      <animated.div className={divStyles}>
        <Link href="/all" className={styles.clash_btn+" "+btnStyles}>
          <p className="justify-center self-center">{props.children}</p>
        </Link>
      </animated.div>
  );
};

export default LaunchpadLinkAll;
