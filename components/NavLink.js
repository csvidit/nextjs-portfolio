import styles from "./Font.module.css";
import Link from "next/link";
import cs_styles from "./CS.module.css";
import { motion } from "framer-motion";

const divStyles = "self-center font-light text-md flex flex-row text-white";

const NavLink = (props) => {
    const href=props.href;
  return (
    <motion.div className={divStyles}>
      <Link href={href}>{props.children}</Link>
    </motion.div>
  );
};

export default NavLink;
