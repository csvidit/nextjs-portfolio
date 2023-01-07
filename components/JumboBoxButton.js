import { motion } from "framer-motion";
import font from "./Font.module.css";
import cs from "./CS.module.scss";
import Link from "next/link";

const JumboBoxButton = (props) => {
  const href = props.href;
  const accent = props.accent;

  const variants4 = {
    hover: {
      opacity: 1,
      backgroundColor: "#FFFFFF",
      color: accent,
      visibility: "visible",
      transition: { type: "spring", ease: "easeInOut", duration: 0.5 },
    },
  };

  const variants6 = {
    hover: {
      marginRight: "1rem",
      marginLeft: "1rem",
    },
  };

  //   whileHover={{marginRight: "1rem",
  //     marginLeft: "1rem"}}

  return (
    <Link href={href} className="flex flex-row hover:space-x-3">
      <motion.div className="">
        <motion.div
          variants={variants4}
          className={
            "invisible flex max-w-xs shrink-0 basis-full flex-row border-2 border-white bg-black p-5 text-xl opacity-0 " +
            font.clash
          }
        >
          <motion.div className="flex flex-row space-x-1">
            <motion.div class="flex">{props.children}</motion.div>
            <motion.div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-up-right self-center"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default JumboBoxButton;
