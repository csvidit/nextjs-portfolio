import styles from "./Font.module.css";
import { useSpring, animated } from "react-spring";

// const animation = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

const divClasses =
  "transition ease-in-out hover:bg-lime-400 text-lime-400 hover:text-slate-900 uppercase border-b-2 border-lime-400 flex flex-row p-2 w-40 justify-center";

const Button = (props) => {
  return (
    <a href={props.link}>
      <div className={styles.clash_btn + " " + divClasses}>
        <p className="">{props.label}</p>
      </div>
    </a>
  );
};

export default Button;
