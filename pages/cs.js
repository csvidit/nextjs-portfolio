import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/Navbar";
import VLink from "../components/VLink";
import AnchorLink from "../components/AnchorLink";
import NavLink from "../components/NavLink";
import Footer from "../components/Footer";
import HamburgerMenuContainer from "../components/HamburgerMenuContainer";
import ContentCard from "../components/ContentCard";
import ContentCardContainer from "../components/ContentCardContainer";

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
          <ContentCardContainer>
            <ContentCard accent="violet" href="/launchpad" title="New Poem">
              Check out my newest poem from the Journal series. This one is all
              about coffee and contemplation, just like the song from Nic
              Howell.
            </ContentCard>
            <ContentCard accent="blue" href="/launchpad" title="New Poem">
              Check out my newest poem from the Journal series. This one is all
              about coffee and contemplation, just like the song from Nic
              Howell.
            </ContentCard>
            <ContentCard accent="orange" href="/launchpad" title="New Poem">
              Check out my newest poem from the Journal series. This one is all
              about coffee and contemplation, just like the song from Nic
              Howell.
            </ContentCard>
            <ContentCard accent="blue" href="/launchpad" title="New Poem">
              Check out my newest poem from the Journal series. This one is all
              about coffee and contemplation, just like the song from Nic
              Howell.
            </ContentCard>
            <ContentCard accent="violet" href="/launchpad" title="New Poem">
              Check out my newest poem from the Journal series. This one is all
              about coffee and contemplation, just like the song from Nic
              Howell.
            </ContentCard>
            <ContentCard accent="blue" href="/launchpad" title="New Poem">
              Check out my newest poem from the Journal series. This one is all
              about coffee and contemplation, just like the song from Nic
              Howell.
            </ContentCard>
            <ContentCard accent="orange" href="/launchpad" title="New Poem">
              Check out my newest poem from the Journal series. This one is all
              about coffee and contemplation, just like the song from Nic
              Howell.
            </ContentCard>
            <ContentCard accent="blue" href="/launchpad" title="New Poem">
              Check out my newest poem from the Journal series. This one is all
              about coffee and contemplation, just like the song from Nic
              Howell.
            </ContentCard>
          </ContentCardContainer>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
