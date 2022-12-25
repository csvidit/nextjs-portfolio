import styles from "./Font.module.css";
import Link from "next/link";
import cs_styles from "./CS.module.css"

let divStyles = "flex flex-row space-x-3 border-b-2";
let linkContainerStyles = "flex flex-row w-full justify-between mt-4 mb-4 xl:ml-20 xl:mr-20"

const Navbar = (props) => {

    if(props.type === "LIT")
    {
        divStyles+=" border-red-500"
    }
    else if(props.type === "CS")
    {
        divStyles+=" "+cs_styles.cs_border_t
    }

  return (<div className={divStyles}><div className={linkContainerStyles}>{props.children}</div></div>);
};

export default Navbar;
