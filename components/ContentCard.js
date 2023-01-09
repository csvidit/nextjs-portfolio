import Link from "next/link";
import { Component } from "react";
import { render } from "react-dom";
import Tilt from "react-parallax-tilt";

class ContentCard extends Component{
  constructor(props)
  {
    super(props)
  this.title = props.title; //Title of the card
  this.description = props.children; // 1-2 line description
  this.href = props.href; //href for the card. Leave empty for no click action
   this.accent = props.accent; //tailwindcss color for background of the card
  this.gradient = "";
  }
  

  

  render()
  {
    if (this.accent === "orange") {
      this.gradient = "bg-gradient-to-br from-amber-500 to-red-700";
    } else if (this.accent === "blue") {
      this.gradient = "bg-gradient-to-br from-sky-500 to-blue-800";
    } else if (this.accent === "purple") {
      this.gradient = "bg-gradient-to-br from-purple-600 to-fuchsia-900";
    } else if (this.accent === "violet") {
      this.gradient = "bg-gradient-to-br from-violet-700 to-indigo-900";
    }
    return (
      <div className="keen-slider__slide w-80 h-80 flex flex-col justify-center">
        <Tilt
          tiltReverse={true}
          className="parallax-effect h-80 w-80 self-center"
          perspective={1000}
        >
          <Link href={this.href} className="h-80 w-80">
            <div
              className={
                "flex h-60 w-80 flex-col justify-between space-y-1 rounded-xl  p-5 " +
                this.gradient
              }
            >
              <h3 className="flex flex-row text-3xl font-bold">{this.title}</h3>
              <h3 className="flex flex-row text-lg font-light text-white">
                {this.description}
              </h3>
            </div>
          </Link>
        </Tilt>
      </div>
    );
  }
};

export default ContentCard;
