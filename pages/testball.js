import Head from "next/head";
import Ball from "../components/Ball.js"
const mainContainerStyles =
  "w-screen h-screen flex flex-col space-y-6 justify-center";

const headerContainerStyles = "ml-5 mr-5 xl:ml-20 xl:mr-20";

export default function Testball() {

  return (
    <div className={mainContainerStyles}>
      <Head></Head>
      <div className={headerContainerStyles}>

      </div>
    </div>
  );
}
