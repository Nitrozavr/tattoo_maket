import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PictureWork_1 from "../img/work_picture/work_picture-1.jpg"
import PictureWork_2 from "../img/work_picture/work_picture-2.jpg"
import PictureWork_3 from "../img/work_picture/work_picture-3.jpg"
import PictureWork_4 from "../img/work_picture/work_picture-4.jpg"
import PictureWork_5 from "../img/work_picture/work_picture-5.jpg"
import PictureWork_6 from "../img/work_picture/work_picture-6.jpg"
import PictureWork_7 from "../img/work_picture/work_picture-7.jpg"
import PictureWork_8 from "../img/work_picture/work_picture-8.jpg"
import PictureWork_9 from "../img/work_picture/work_picture-9.JPG"
import PictureWork_10 from "../img/work_picture/work_picture-10.jpg"
import PictureWork_11 from "../img/work_picture/work_picture-11.jpg"

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
            <img className="gridBlock_picture" src={PictureWork_1}></img>
        </div>
        <div>
            <img className="gridBlock_picture" src={PictureWork_2}></img>
        </div>
        <div>
            <img className="gridBlock_picture" src={PictureWork_3}></img>
        </div>
        <div>
            <img className="gridBlock_picture" src={PictureWork_4}></img>
        </div>
        <div>
            <img className="gridBlock_picture" src={PictureWork_5}></img>
        </div>
        <div>
            <img className="gridBlock_picture" src={PictureWork_6}></img>
        </div>
        <div>
            <img className="gridBlock_picture" src={PictureWork_7}></img>
        </div>
        <div>
            <img className="gridBlock_picture" src={PictureWork_8}></img>
        </div>
        <div>
            <img className="gridBlock_picture" src={PictureWork_9}></img>
        </div>
        <div>
            <img className="gridBlock_picture" src={PictureWork_10}></img>
        </div>
        <div>
            <img className="gridBlock_picture" src={PictureWork_11}></img>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;