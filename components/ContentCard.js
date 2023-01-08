import Link from "next/link";
import Tilt from "react-parallax-tilt";

const ContentCard = (props) => {
  const title = props.title; //Title of the card
  const description = props.children; // 1-2 line description
  const href = props.href; //href for the card. Leave empty for no click action
  const accent = props.accent; //tailwindcss color for background of the card
  let gradient = "";

  if (accent === "orange") {
    gradient = "bg-gradient-to-br from-amber-500 to-red-700";
  } else if (accent === "blue") {
    gradient = "bg-gradient-to-br from-sky-500 to-blue-700";
  } else if (accent === "purple") {
    gradient = "bg-gradient-to-br from-purple-600 to-fuchsia-900";
  } else if (accent === "violet") {
    gradient = "bg-gradient-to-br from-violet-700 to-indigo-800";
  }

  return (
    <div className="keen-slider__slide w-80 h-80 flex flex-col justify-center">
      <Tilt
        tiltReverse={true}
        className="parallax-effect h-80 w-80 self-center"
        perspective={1000}
      >
        <Link href={href} className="h-80 w-80">
          <div
            className={
              "flex h-60 w-80 flex-col justify-between space-y-1 rounded-xl  p-5 " +
              gradient
            }
          >
            <h3 className="flex flex-row text-3xl font-bold">{title}</h3>
            <h3 className="flex flex-row text-lg font-light text-white">
              {description}
            </h3>
          </div>
        </Link>
      </Tilt>
    </div>
  );
};

export default ContentCard;
