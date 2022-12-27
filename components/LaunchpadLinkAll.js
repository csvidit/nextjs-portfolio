import styles from "./Font.module.css";
import { useSpring, animated } from "@react-spring/web";
import { motion } from "framer-motion";
import Link from "next/link";

const divStyles =
  "flex flex-row w-36 h-16 my-5 xl:w-72 xl:h-32 text-2xl text-lime-400 border border-1 border-lime-400 uppercase hover:text-black hover:bg-lime-400";

const btnStyles =
  "w-full h-full flex flex-col justify-center text-sm xl:text-2xl";

const color_all = "text-lime-400";
const color_all_muted = "text-lime-600";
const color_lit = "text-red-400";
const color_lit_muted = "text-red-600";

const LaunchpadLinkAll = (props) => {
  const link = props.link;

  return (
    <motion.div className={divStyles}>
      <Link href={link} className={styles.clash_btn + " " + btnStyles}>
        <p className="justify-center self-center">{props.children}</p>
      </Link>
    </motion.div>
  );
};

export default LaunchpadLinkAll;
