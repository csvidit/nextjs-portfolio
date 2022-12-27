import { motion } from "framer-motion";
import LaunchpadLinkAll from "./LaunchpadLinkAll";
import font from "./Font.module.css";
import JumboTitle from "./JumboTitle";
import cs from "./CS.module.scss";
import Link from "next/link";
import JumboBoxButton from "./JumboBoxButton";
import JumboCSP from "./JumboCSP";

const divStyles =
  "flex flex-row justify-between w-full h-96 p-10 border border-lime-500 rounded-xl";

const JumboBox = (props) => {
  const title = props.children;

  const variants1 = {
    hover: {
      backgroundColor: cs.cs_blue,
      borderColor: "#FFFFFF",
      transition: { type: "spring", ease: "easeInOut", duration: 0.25 },
    },
  };

  const variants2 = {
    hover: {
      color: "#FFFFFF",
      transition: { type: "spring", ease: "easeInOut", duration: 0.25 },
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
    <motion.div
      id="main_container"
      className={divStyles}
      whileHover="hover"
      variants={variants1}
    >
      <motion.div className="self-center opacity-0" variants={variants3}>
        <JumboCSP></JumboCSP>
      </motion.div>
      <motion.div
        id="content_container"
        className="flex flex-col justify-between"
      >
        <motion.div className="flex flex-col space-y-1" variants={variants2}>
          <motion.p
            variants={variants2}
            className={
              font.clash_title + " mt-3 mb-3 text-right text-6xl text-lime-400"
            }
          >
            {title}
          </motion.p>
          <motion.div className="flex flex-row opacity-0" variants={variants5}>
            <motion.p className="font-extralight">
              Check out all my coding projects across languages, with demo
              videos, screenshots, snippet discussions, and more.
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.div className="flex flex-row justify-end">
          <JumboBoxButton href="/cs">Let's go!</JumboBoxButton>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default JumboBox;
