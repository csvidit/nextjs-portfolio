import styles from "./Font.module.css";
import { motion } from "framer-motion";

const divStyles = "flex flex-row text-6xl text-lime-400 mt-6 mb-6";

const JumboTitle = (props) => {
  return (
    <div>
      <motion.div>
        <h1 class={styles.clash_title + " " + divStyles}>{props.children}</h1>
      </motion.div>
    </div>
  );
};

export default JumboTitle;
