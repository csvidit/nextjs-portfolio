import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "../components/Button.js";
import JumboTitle from "../components/JumboTitle";
import JumboSubtitle from "../components/JumboSubtitle";
import ButtonContainer from "../components/ButtonContainer";
import MainLink from "../components/MainLink";
import JumboV from "../components/JumboV";
import Navbar from "../components/Navbar";
import VLink from "../components/VLink";
import AnchorLink from "../components/AnchorLink";
import NavLink from "../components/NavLink";

const mainContainerStyles = "w-screen h-screen flex flex-col space-y-6";

const headerContainerStyles = "";

const mainContentStyles = "ml-5 xl:ml-20 xl:mr-20";

export default function Home() {
  return (
    <div className={mainContainerStyles}>
      <div className={headerContainerStyles}>
        <Head></Head>
        <Navbar type="LIT">
          <AnchorLink href="/lit">LIT. Home</AnchorLink>
          <NavLink href="/lit/poems">Poems</NavLink>
          <NavLink href="/lit/poems">Short Stories</NavLink>
          <VLink>launchpad</VLink>
        </Navbar>
        <div className={mainContentStyles}>
        </div>
      </div>
    </div>
  );
}
