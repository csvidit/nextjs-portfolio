import styles from "./Font.module.css";

const divStyles = "flex flex-row mr-10 text-2xl text-lime-400 uppercase"

const Subtitle2 = (props) =>
{
    return(
        <div>
            <h2 className={styles.clash_subtitle+" "+divStyles}>{props.children}</h2>
        </div>
    );
}

export default Subtitle2;