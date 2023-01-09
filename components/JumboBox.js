import { motion } from "framer-motion";
import font from "./Font.module.css";
import JumboTitle from "./JumboTitle";
import JumboBoxButton from "./JumboBoxButton";
import JumboCSP from "./JumboCSP";
import React from "react";

const divStyles =
  "flex flex-row justify-between ml-5 mr-5 xl:ml-20 xl:mr-20 self-center h-96 border border-lime-500 rounded-xl";

const JumboBox = (props) => {
  const title = props.children
  const href = props.href
  const linkLabel = props.linkLabel
  const accent = props.accent
  const img = props.img
  const description = props.description

  const variants1 = {
    hover: {
      backgroundColor: accent,
      borderColor: "#FFFFFF",
      transition: { type: "spring", ease: "easeInOut", duration: 0.5 },
    },
  };

  const variants2 = {
    hover: {
      color: "#FFFFFF",
      transition: { type: "spring", ease: "easeInOut", duration: 0.5 },
    },
  };

  const variants3 = {
    hover: {
      animate: {
        rotate: [0, 90, 0],
        transition: { repeat: 2, duration: 1.5 },
      },
      color: "#FFFFFF",
      fill: "#FFFFFF",
      opacity: 1,
      visibility: "visible",
      transition: { type: "spring", ease: "easeInOut", duration: 0.5 },
    },
  };

  const variants5 = {
    hover: {
      opacity: 1,
      transition: { type: "spring", ease: "easeInOut", duration: 0.5 },
    },
  };

  return (
    <div>
    <motion.div
      id="main_container"
      className={divStyles}
      whileHover="hover"
      variants={variants1}
    >
      <motion.div className="self-center opacity-0" variants={variants3}>
        {/* <JumboCSP></JumboCSP> */}
      </motion.div>
      <motion.div
        id="content_container"
        className="flex flex-col justify-between p-5"
      >
        <motion.div className="flex flex-col space-y-1" variants={variants2}>
          <motion.p
            variants={variants2}
            className={font.clash_title + " text-right text-6xl text-lime-400"}
          >
            {title}
          </motion.p>
          <motion.div
            className="flex flex-row text-right opacity-0"
            variants={variants5}
          >
            <motion.p className="text-right font-extralight">
              {description}
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.div className="flex flex-row justify-end">
          <JumboBoxButton href={`${href}`} accent={`${accent}`}>{linkLabel}</JumboBoxButton>
        </motion.div>
      </motion.div>
    </motion.div>
    </div>
  );
};

export default JumboBox;
