import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Poster.css';

const Poster = () => {
    const navigate = useNavigate();

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
            <button
                className="w-3 h-3 bg-gray-300 rounded-full transition duration-300 ease-in-out slick-dot" 
                style={{ color: "transparent" }}
            />
        ),
        dotsClass: "slick-dots flex justify-center mb-4 space-x-2",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                },
            },
        ],
    };

    const handleButtonClick = () => {
        navigate('/results');
    };

    return (
        <div className="flex items-center flex-col justify-center w-full h-screen overflow-hidden p-4">
            <div className="w-full max-w-5xl overflow-hidden rounded-lg p-2">
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className="flex justify-center items-center px-2">
                            <img
                                src={image}
                                alt={`Poster ${index + 1}`}
                                className="w-full h-[300px] md:w-[300px] md:h-[300px] object-cover rounded-md border border-gray-300"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
            <button 
                onClick={handleButtonClick}
                className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-lg transition duration-300 ease-in-out transform hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                More Results
            </button>
        </div>
    );
};

export default Poster;
