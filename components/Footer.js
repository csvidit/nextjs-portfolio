import { motion } from "framer-motion";
import Link from "next/link";

const footerContainerStyles =
  "flex flex-row space-x-1 justify-center border-slate-800 border-t p-2 text-center text-slate-800 absolute bottom-0 w-full";

const secondaryFooterStyles = "text-black";

const footerDividerStyles = "border-r border-black";

const Footer = () => {
  const primaryFooterVariants = {
    hover: {
      color: "#64748B",
      borderTopColor: "#64748B",
      borderRightColor: "#64748B",
    },
  };

  const secondaryFooterVariants = {
    hover: { color: "#0ea5e9", display: "flex" },
  };

  return (
    <motion.div whileHover="hover">
      <motion.div className={footerContainerStyles}>
        <motion.div layout variants={primaryFooterVariants}>
          <p className="text-sm xl:text-base">&copy; 2022 Vidit Khandelwal</p>
        </motion.div>
        <motion.div
          layout
          className={footerDividerStyles}
          variants={primaryFooterVariants}
        ></motion.div>
        <motion.div
          layout
          className="text-sm xl:text-base hidden flex-row space-x-1 text-black"
          variants={secondaryFooterVariants}
        >
          <Link href="https://github.com/csvidit/nextjs-main-landing">
            <p>Read more</p>
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="currentColor"
            class="bi bi-arrow-up-right self-center"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
            />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
