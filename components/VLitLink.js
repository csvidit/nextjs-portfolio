import styles from "./Font.module.css";
import Link from "next/link";
import cs_styles from "./CS.module.scss";
import { motion } from "framer-motion";
import LittleV from "./LittleV.js";

const divStyles = "font-semibold flex flex-row space-x-1";
const dividerStyles =
  "flex flex-col justify-center self-center border-l-1 border-slate-500";

const VLitLink = (props) => {
  return (
    <motion.div className={divStyles}>
      <Link href="/">
        <LittleV></LittleV>
      </Link>
      <div className={dividerStyles}></div>
      <Link href="/lit">LIT.</Link>
    </motion.div>
  );
};

export default VLitLink;
