import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Font from "../components/Font.module.css";
import Button from "../components/Button.js";
import JumboTitle from "../components/JumboTitle";
import JumboSubtitle from "../components/JumboSubtitle";
import MainLink from "../components/MainLink";
import JumboV from "../components/AnimatedJumboV";
import { motion, useSpring } from "framer-motion";
import Footer from "../components/Footer";

const mainContainerStyles =
  "w-screen h-screen flex flex-col space-y-6 justify-center";

const mainContentStyles =
  "flex flex-row justify-between ml-5 xl:ml-20 xl:mr-20";

const footerContainerStyles =
  "flex flex-row space-x-1 justify-center border-slate-800 border-t p-2 text-center text-slate-800 absolute bottom-0 w-full";

const secondaryFooterStyles = "text-black";

const footerDividerStyles = "border-r border-black";

export default function Home() {
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
    <div className={mainContainerStyles}>
      <Head></Head>
      <div className={mainContentStyles}>
        <motion.div className="self-center">
          <motion.div
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -50, opacity: 0 }}
            transition={{ ease: "anticipate", type: "spring" }}
          >
            <p className={"text-red-600 font-light mb-6 "+Font.clash}>STILL UNDER DEVELOPMENT</p>
            <JumboSubtitle>The world of</JumboSubtitle>
            <JumboTitle spaced="true">Vidit Khandelwal</JumboTitle>
          </motion.div>
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ type: "spring", delay: 0.4 }}
          >
            <MainLink href="/launchpad" animate="true">
              Let's dive in
            </MainLink>
          </motion.div>
        </motion.div>
        <motion.div className="self-center"></motion.div>
      </div>
      <Footer></Footer>
    </div>
  );
}
