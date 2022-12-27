import styles from "./Font.module.css";
import { motion } from "framer-motion";

const divStyles = "flex flex-row text-6xl text-lime-400 mt-3 mb-3";

const JumboTitle = (props) => {

    return (
      <div className={divStyles}>
        <motion.div>
          <h1 className={styles.clash_title + " " + divStyles}>{props.children}</h1>
        </motion.div>
      </div>
    );
};

export default JumboTitle;
