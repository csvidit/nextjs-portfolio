import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import JumboBox from "./JumboBox";
import React, { Component } from "react";
import Slider from "react-slick";

export default class LaunchpadSlider extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
    //   speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      cssEase: "linear",
      arrows: false,
    };
    return (
      <div className="">
        <Slider {...settings}>
          <JumboBox href="/cs" description="Check out all my coding projects across languages, with demo
              videos, screenshots, snippet discussions, and more." accent="#2200c9" linkLabel="Let's go!">Coding Projects</JumboBox>
          <JumboBox href="/lit" description="Read all my original creative literature in English." accent="#FF5200" linkLabel="Go to LIT. Portfolio">Literature</JumboBox>
          <JumboBox>Academic Papers</JumboBox>
        </Slider>
      </div>
    );
  }
};
