import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Poster.css'

const Poster = () => {
    const images = [
        "src/assets/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA1L2pvYjE4NzItYmFja2dyb3VuZC1ib29tLTAzLTAxai5qcGc.webp",
        "src/assets/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA1L2pvYjE4NzItYmFja2dyb3VuZC1ib29tLTAzLTAxai5qcGc.webp",
        "src/assets/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA1L2pvYjE4NzItYmFja2dyb3VuZC1ib29tLTAzLTAxai5qcGc.webp",
        "src/assets/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA1L2pvYjE4NzItYmFja2dyb3VuZC1ib29tLTAzLTAxai5qcGc.webp",
        "src/assets/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA1L2pvYjE4NzItYmFja2dyb3VuZC1ib29tLTAzLTAxai5qcGc.webp",
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        arrows: false,
        customPaging: (i) => (
            <div
                className="w-3 h-3 rounded-full transition duration-300"
                style={{ margin: '0 5px' }}
            />
        ),
        dotsClass: "slick-dots flex justify-center mb-4",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="w-full h-screen p-6 flex items-center justify-center">
            <div className="w-full max-w-4xl overflow-hidden rounded-lg shadow-lg">
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className="flex justify-center items-center">
                            <img
                                src={image}
                                alt={`Poster ${index + 1}`}
                                className="w-full h-auto object-cover rounded-md"
                                style={{ maxHeight: '80vh' }}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Poster;
