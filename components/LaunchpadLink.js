import styles from "./Font.module.css";
import { useSpring, animated } from "@react-spring/web";

const divStyles =
  "flex flex-row pt-5 pb-5 pl-5 pr-5 text-2xl text-lime-400 uppercase";

const color_all = "text-lime-400";
const color_all_muted = "text-lime-600";
const color_lit = "text-red-400";
const color_lit_muted = "text-red-600";

const LaunchpadLink = (props) => {
  return (
    <div className={divStyles}>
      <animated.div>
        <p className={styles.clash_subtitle + " " + divStyles}>
          {props.children}
        </p>
      </animated.div>
    </div>
  );
};

export default LaunchpadLink;
