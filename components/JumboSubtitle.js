import styles from "./Font.module.css";

const divStyles = "flex flex-row mr-10 text-3xl text-lime-400 uppercase"

const JumboSubtitle = (props) =>
{
    return(
        <div>
            <h2 class={styles.clash_subtitle+" "+divStyles}>{props.children}</h2>
        </div>
    );
}

export default JumboSubtitle;