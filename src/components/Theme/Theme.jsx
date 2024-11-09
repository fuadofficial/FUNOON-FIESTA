import React, { useState, useEffect } from 'react';

const images = [
    'https://via.placeholder.com/800x400?text=Slide+1',
    'https://via.placeholder.com/800x400?text=Slide+2',
    'https://via.placeholder.com/800x400?text=Slide+3',
];

const Theme = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically move to the next slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    // Go to the next slide
    const goToNextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    // Go to the previous slide
    const goToPreviousSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };
    return (
        <div className="relative max-w-full mx-auto mt-10 sm:max-w-2xl lg:max-w-4xl">
            {/* Slider images */}
            <div className="overflow-hidden rounded-lg">
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="w-full h-40 sm:h-64 md:h-80 lg:h-96 object-cover transition-transform duration-500"
                />
            </div>

            {/* Previous and Next Buttons */}
            <button
                onClick={goToPreviousSlide}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 bg-black text-white rounded-full hover:bg-gray-700 sm:left-4 md:left-6 lg:left-8"
            >
                ❮
            </button>
            <button
                onClick={goToNextSlide}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 bg-black text-white rounded-full hover:bg-gray-700 sm:right-4 md:right-6 lg:right-8"
            >
                ❯
            </button>

            {/* Indicators */}
            <div className="flex justify-center mt-2 space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-black' : 'bg-gray-300'
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Theme;


