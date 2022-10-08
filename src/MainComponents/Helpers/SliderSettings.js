import React from "react";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        onClick={onClick}
        />
    );
}

const SliderSettings = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 7.15,
    slidesToScroll: 6,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
        },

        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ],

    nextArrow: <SampleNextArrow className = "btns" />,
    prevArrow: <SamplePrevArrow className = "btns" />
};

export default SliderSettings;
