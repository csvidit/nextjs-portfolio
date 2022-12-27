import styles from "./Font.module.css";
import Link from "next/link";
import cs_styles from "./CS.module.scss";
import { motion } from "framer-motion";
import LittleV from "./LittleV.js";

const divStyles = "self-center font-semibold";
const linkStyles = "flex flex-row space-x-1 self-center";
const labelStyles = "text-xs self-center flex flex-row";

const VLink = (props) => {
  return (
    <motion.div className={divStyles}>
      <Link href="/launchpad" className={linkStyles}>
        <LittleV></LittleV>
        <p className={labelStyles}>{props.children}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="currentColor"
          class="bi bi-arrow-up-right self-center"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
          />
        </svg>
      </Link>
    </motion.div>
  );
};

export default VLink;
