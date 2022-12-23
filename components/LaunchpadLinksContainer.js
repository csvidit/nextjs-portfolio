const divStyles = "flex flex-row space-x-5 justify-between mt-10 mb-10"

const LaunchpadLinksContainer = (props) => {
    return (
        <div className={divStyles}>{props.children}</div>
    );
}

export default LaunchpadLinksContainer;