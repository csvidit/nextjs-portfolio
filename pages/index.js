import Head from "next/head";
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
  "border-slate-800 border-t p-2 text-center text-slate-800 absolute bottom-0 w-full";

export default function Home() {
  return (
    <div className={mainContainerStyles}>
      <div className={headerContainerStyles}>
        <Head></Head>
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: -35 }}
          transition={{ ease: "anticipate", type: "spring" }}
        >
          <JumboSubtitle>The world of</JumboSubtitle>
          <JumboTitle>Vidit Khandelwal</JumboTitle>
        </motion.div>
        <motion.div
          animate={{ opacity: 1, skewX: 0, skewY: 0 }}
          initial={{ opacity: 0, skewX: -12, skewY: -12 }}
          transition={{ type: "spring", delay: 0.25 }}
        >
          <MainLink link="/launchpad">Let's dive in</MainLink>
        </motion.div>
        <ButtonContainer></ButtonContainer>
      </div>
      <motion.div className={footerContainerStyles} whileHover={{color: "#64748B", borderTopColor: "#64748B"}}>
        <motion.div>
          <p>&copy; 2022 Vidit Khandelwal. All rights reserved</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
