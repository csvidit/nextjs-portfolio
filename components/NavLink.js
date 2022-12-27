import styles from "./Font.module.css";
import Link from "next/link";
import cs_styles from "./CS.module.scss";
import { motion } from "framer-motion";

const divStyles = "self-center font-light text-md flex flex-row text-white";
const linkStyles = "flex flex-col space-y-1 self-center";
const linkLabelStyles = "flex flex-row space-x-2 self-center";
const linkUnderlineStyles = "";

const NavLink = (props) => {
    const href=props.href;

    const linkVariants = {
      opened: {
          opacity: 1,
          y: 50,
        },
        closed: {
          opacity: 0,
          y: 0,
        },
  }

  return (
    <motion.div className={divStyles}>
      <motion.div
        variants={linkVariants}
        className={linkStyles}
      >
        <Link href={href} className={linkStyles}>
          <motion.div className={linkLabelStyles}>
            <motion.p className="self-center">{props.children}</motion.p>
          </motion.div>
          <motion.div
          ></motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default NavLink;

            // className={linkUnderlineStyles}
            // animate={{ width: [125, 75, 125] }}
            // transition={{repeat: Infinity, duration: 1.5}}
