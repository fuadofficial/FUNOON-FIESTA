import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Poster.css';

const Poster = () => {
    const images = [
        "src/assets/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA1L2pvYjE4NzItYmFja2dyb3VuZC1ib29tLTAzLTAxai5qcGc.webp",
        "src/assets/download (1).jpeg",
        "src/assets/download.jpeg",
        "src/assets/images (1).jpeg",
        "src/assets/images.jpeg",
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: '0',
        focusOnSelect: true,
        arrows: false,
        customPaging: (i) => (
            <div className="custom-dot" />
        ),
        dotsClass: "slick-dots custom-dots",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                },
            },
        ],
    };

    return (
        <div className="slider-container">
            <div className="slider-wrapper">
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className="image-slide">
                            <img
                                src={image}
                                alt={`Poster ${index + 1}`}
                                className="poster-image"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Poster;
