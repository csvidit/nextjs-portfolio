import styles from "./Font.module.css";
import Link from "next/link";
import cs_styles from "./CS.module.scss";
import { motion } from "framer-motion";
import LittleV from "./LittleV.js";

const divStyles = "self-center font-semibold flex flex-row text-white p-2 border border-white rounded-lg text-center hover:border-lime-500";

const AnchorLink = (props) => {
    const href=props.href;
  return (
    <motion.div className={divStyles}>
      <Link href={href}>{props.children}</Link>
    </motion.div>
  );
};

export default AnchorLink;
