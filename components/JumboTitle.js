import styles from "./Font.module.css";
import { motion } from "framer-motion";

let divStyles = "flex flex-row text-6xl text-lime-400";

const JumboTitle = (props) => {
  const spaced = props.spaced;
  if (spaced) {
    divStyles += " mt-3 mb-3";
  }

  return (
    <div className={divStyles}>
      <motion.div>
        <h1 className={styles.clash_title + " " + divStyles}>
          {props.children}
        </h1>
      </motion.div>
    </div>
  );
};

export default JumboTitle;
