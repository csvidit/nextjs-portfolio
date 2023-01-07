import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/Navbar";
import VLink from "../components/VLink";
import AnchorLink from "../components/AnchorLink";
import NavLink from "../components/NavLink";
import Footer from "../components/Footer";
import HamburgerMenuContainer from "../components/HamburgerMenuContainer";

const mainContainerStyles = "w-screen h-screen flex flex-col space-y-6";

const headerContainerStyles = "";

const mainContentStyles = "ml-5 xl:ml-20 xl:mr-20";

export default function Home() {
  return (
    <div className={mainContainerStyles}>
      <div className={headerContainerStyles}>
        <Head></Head>
        <div id="navbar">
            <HamburgerMenuContainer></HamburgerMenuContainer>
        </div>
        <div className={mainContentStyles}>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
