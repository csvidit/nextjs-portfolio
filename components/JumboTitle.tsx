import styles from "./Font.module.css";
import { motion } from "framer-motion";
import React from "react";

let divStyles = "flex flex-row text-6xl";

const JumboTitle = (props) => {
  const spaced = props.spaced;
  const color = props.color;
  if (spaced) {
    divStyles += " mt-3 mb-3 ";
  }
  if(color === "lime")
  {
    divStyles += " text-lime-400 ";
  }
  else
  {
    divStyles += " text-white ";
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
