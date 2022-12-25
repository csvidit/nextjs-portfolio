const divStyles = "flex flex-col xl:flex-row xl:space-x-5 justify-between mt-5 mb-5 xl:mt-10 xl:mb-10"

const LaunchpadLinksContainer = (props) => {
    return (
        <div className={divStyles}>{props.children}</div>
    );
}

export default LaunchpadLinksContainer;