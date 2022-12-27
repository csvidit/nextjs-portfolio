import styles from "./Font.module.css";
import Link from "next/link";
import cs_styles from "./CS.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import VLink from "./VLink"

let divStyles = "flex flex-row border-b-2";
let linkContainerStyles =
  "flex flex-col w-screen h-screen bg-red-500";

  // mt-4 mb-4 xl:ml-20 xl:mr-20

//Navbar inspired by https://codesandbox.io/s/github/nefejames/framer-motion-navbar

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const iconVariants = {
    opened: { rotate: 135 },
    closed: { rotate: 0 },
  };

  const menuVariants = {
    opened: {
      top: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      top: "-90vh",
    },
  };

  if (props.type === "LIT") {
    divStyles += " border-red-500";
  } else if (props.type === "CS") {
    divStyles += " " + cs_styles.cs_border_t;
  }

  return (
    <motion.div className={divStyles}>
      <motion.div
        className={linkContainerStyles}
        initial={false}
        variants={menuVariants}
        animate={isOpen ? "opened" : "closed"}
      >
        <motion.div>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-plus-lg self-center"
            viewBox="0 0 16 16"
            variants={iconVariants}
            animate={isOpen ? "opened" : "closed"}
            whileHover={{ scale: 1.4 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <path
              fillRule="evenodd"
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
            />
          </motion.svg>
        </motion.div>
        {props.children}
      </motion.div>
      <VLink>launchpad</VLink>
    </motion.div>
  );
};

export default Navbar;
