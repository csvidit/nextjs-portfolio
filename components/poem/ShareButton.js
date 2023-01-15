import icons, { BsTwitter, BsWhatsapp } from "react-icons/bs";
import _ from "lodash";

const ShareButton = (props) => {
  const type = props.type;
  const contentTitle = props.contentTitle;
  const href = props.href;
  if (type === "twitter") {
    return (
      <a
        className="rounded-full bg-slate-600 text-slate-400 hover:bg-slate-400 hover:text-slate-600"
        href={_.join(
          _.split(
            "https://twitter.com/intent/tweet?text=Check out " +
              contentTitle +
              ", a poem by Vidit Khandelwal.&url=" +
              href,
            " "
          ),
          "+"
        )}
        target="_blank"
        rel="noreferrer"
      >
        <BsTwitter value={{ size: "24px" }} />
      </a>
    );
  } else if (type === "whatsapp") {
    <a
      className="rounded-full bg-slate-600 text-slate-400 hover:bg-slate-400 hover:text-slate-600"
      href={_.join(
        _.split(
          "https://api.whatsapp.com/send?text=Check out" +
            contentTitle +
            ", a poem by Vidit Khandelwal.&url=" +
            href,
          " "
        ),
        "+"
      )}
      target="_blank"
      rel="noreferrer"
    >
      <BsWhatsapp value={{ size: "24px" }} />
    </a>;
  }
};

export default ShareButton;
