import '../styles/globals.css'
import { gsap } from "gsap";
// import { NextUIProvider } from '@nextui-org/react';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// function MyApp({ Component, pageProps }) {
//   return <NextUIProvider>
//   <Component {...pageProps} />
// </NextUIProvider>
// }

export default MyApp;
