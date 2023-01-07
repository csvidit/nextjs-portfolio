import { motion, useScroll } from "framer-motion";

const LaunchpadBoxesContainer = (props) => {
  return <motion.div id="main" className="w-full">{props.children}</motion.div>;
};

export default LaunchpadBoxesContainer;
