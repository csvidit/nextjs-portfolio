import Head from "next/head";
import Link from "next/link"
import Image from "next/image";
import styles from "../styles/Home.module.css";
import font from "../components/Font.module.css";
import Button from "../components/Button.js";
import JumboTitle from "../components/JumboTitle";
import JumboSubtitle from "../components/JumboSubtitle";
import ButtonContainer from "../components/ButtonContainer";
import MainLink from "../components/MainLink";
import JumboV from "../components/JumboV";
import { motion, useSpring } from "framer-motion";
import { easeIn } from "popmotion";

const mainContainerStyles =
  "w-screen h-screen flex flex-col space-y-6 justify-center";

const headerContainerStyles = "ml-5 xl:ml-20 xl:mr-20";

const footerContainerStyles =
  "flex flex-row space-x-1 justify-center border-slate-800 border-t p-2 text-center text-slate-800 absolute bottom-0 w-full";

const secondaryFooterStyles = "text-black";

const footerDividerStyles = "border-r border-black"

export default function Home() {

  const primaryFooterVariants = {
    hover: { color: "#64748B", borderTopColor: "#64748B", borderRightColor: "#64748B"},
  };

  const secondaryFooterVariants = {
    hover: { color: "#0ea5e9" },
  };

  return (
    <div className={mainContainerStyles}>
      <div className={headerContainerStyles}>
        <Head></Head>
        <motion.div
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -50, opacity: 0 }}
          transition={{ ease: "anticipate", type: "spring" }}
        >
          <JumboSubtitle>The world of</JumboSubtitle>
          <JumboTitle>Vidit Khandelwal</JumboTitle>
        </motion.div>
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ type: "spring", delay: 0.4 }}
        >
          <MainLink link="/launchpad">Let's dive in</MainLink>
        </motion.div>
        <ButtonContainer></ButtonContainer>
      </div>
      <motion.div whileHover="hover">
        <motion.div className={footerContainerStyles}>
          <motion.div variants={primaryFooterVariants}>
            <p>&copy; 2022 Vidit Khandelwal. All rights reserved</p>
          </motion.div>
          <motion.div className={footerDividerStyles} variants={primaryFooterVariants}>

          </motion.div>
          <motion.div
            className="flex flex-row space-x-1 text-black"
            variants={secondaryFooterVariants}
          >
            <Link href="https://github.com/csvidit/nextjs-main-landing"><p>Read more</p></Link>
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
    </div>
  );
}
