import { motion } from "framer-motion";
import Font from "./Font.module.css";

const divStyles = "flex flex-row text-xl";
const linkStyles = "flex flex-col self-center";
const linkLabelStyles = "flex flex-row space-x-2 self-center";

const ActionPrompt = (props) => {

  return (
    <motion.div className={"self-center flex flex-row text-xl space-x-2 text-slate-500 "+Font.clash}>
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
  );
};

export default ActionPrompt;