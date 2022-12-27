import styles from "./Font.module.css";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const divStyles = "flex flex-row text-xl";
const linkStyles = "flex flex-col self-center";
const linkLabelStyles = "flex flex-row space-x-2 self-center";
const linkUnderlineStyles = "border-b border-slate-500 self-center";

const MainLink = (props) => {
  const link = props.link;
  const label = props.label;

  const linkLabelVariants = {
    animate: { x: 0, skewX: 0, color: "#64748B", fill: "#64748B" },
    hover: { x: 10, skewX: -10, color: "#FFFFFF", fill: "#FFFFFF" },
  };

  const linkUnderlineVariants = {
    animate: {
      width: [125, 75, 125],
      transition: { repeat: Infinity, duration: 1.5 },
    },
    hover: { width: 125, borderBottomColor: "#0ea5e9" },
  };

  return (
    <motion.div className={styles.clash_title + " " + divStyles} animate="animate" whileHover="hover">
      <motion.div
        initial={false}
        variants={linkLabelVariants}
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
        </Link>
        <motion.div
          className={linkUnderlineStyles}
          variants={linkUnderlineVariants}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MainLink;
