import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "../components/Button.js";
import JumboTitle from "../components/JumboTitle";
import JumboSubtitle from "../components/JumboSubtitle";
import ButtonContainer from "../components/ButtonContainer";
import MainLink from "../components/MainLink";
import JumboV from "../components/JumboV";

const mainContainerStyles =
  "w-screen h-screen flex flex-col space-y-6 justify-center";

const headerContainerStyles = "ml-20";

export default function Home() {
  return (
    <div className={mainContainerStyles}>
      <div className={headerContainerStyles}>
        <Head></Head>
        <JumboSubtitle>Welcome to the world of</JumboSubtitle>
        <JumboTitle>Vidit Khandelwal</JumboTitle>
        <MainLink label="Let's jump in" link="/home"></MainLink>
        <ButtonContainer>
        </ButtonContainer>
      </div>
    </div>
  );
}
