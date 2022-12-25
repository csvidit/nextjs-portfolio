import styles from "./Font.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

const divStyles = "flex flex-row text-xl";
const linkStyles = "flex flex-col space-y-1 self-center";
const linkLabelStyles = "flex flex-row space-x-2 self-center";
const linkUnderlineStyles = "border-b border-slate-500 self-center";

const MainLink = (props) => {
  const link = props.link;
  const label = props.label;

  return (
    <motion.div className={styles.clash_title + " " + divStyles}>
      <motion.div
        initial={false}
        animate={{ x: 0, skewX: 0, color: "#64748B", fill: "#64748B"}}
        whileHover={{ x: 10, skewX: -10, color: "#FFFFFF", fill: "#FFFFFF"}}
        className={linkStyles}
      >
        <Link href={link} className={linkStyles}>
          <motion.div className={linkLabelStyles}>
            <motion.p className="self-center">{props.children}</motion.p>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              className="bi bi-arrow-right self-center"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </motion.svg>
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

export default MainLink;
