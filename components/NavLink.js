import styles from "./Font.module.css";
import Link from "next/link";
import cs_styles from "./CS.module.css";
import { motion } from "framer-motion";

const divStyles = "self-center font-light text-md flex flex-row text-white";
const linkStyles = "flex flex-col space-y-1 self-center";
const linkLabelStyles = "flex flex-row space-x-2 self-center";

const NavLink = (props) => {
    const href=props.href;
  return (
    <motion.div className={divStyles}>
      <motion.div
        initial={false}
        animate={{ x: 0, skewX: 0, color: "#64748B", fill: "#64748B"}}
        whileHover={{ x: 10, skewX: -10, color: "#FFFFFF", fill: "#FFFFFF"}}
        className={linkStyles}
      >
        <Link href={href} className={linkStyles}>
          <motion.div className={linkLabelStyles}>
            <motion.p className="self-center">{props.children}</motion.p>
          </motion.div>
          <motion.div
            className={linkUnderlineStyles}
            animate={{ width: [125, 75, 125] }}
            transition={{repeat: Infinity, duration: 1.5}}
          ></motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default NavLink;
