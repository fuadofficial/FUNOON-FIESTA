import React, { useState, useEffect } from 'react';

const About = () => {
    const images = [
        "src/assets/todo list image.png",
        "src/assets/todo list image.png",
        "src/assets/todo list image.png",
        "src/assets/todo list image.png",
        "src/assets/todo list image.png",
        "src/assets/todo list image.png",
        "src/assets/todo list image.png",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section className="flex flex-col items-center justify-center min-h-screen w-full px-5">
            <div className=" mb-6">
                <h1 className="font-extrabold text-6xl">Funoon Fiesta</h1>
            </div>
            
            <div className="about-content flex flex-col lg:flex-row justify-center items-center w-full lg:w-1/2 mb-10 space-y-6 lg:space-y-0 lg:space-x-6">
                <p className="text-center max-w-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas est ullam quod dolorem tempore sapiente itaque, repudiandae culpa eligendi aperiam vitae quisquam deleniti, soluta optio corporis iusto vel alias.
                </p>
                <img src="src/assets/todo list image.png" alt="Todo List Example" className="w-full lg:w-2/3 rounded-lg about-main-image" />
            </div>

            <div className="slider w-full lg:w-1/2 mx-auto">
                <div className="relative overflow-hidden w-full h-52">
                    <div
                        className="flex gap-x-4 transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * (100 + 1)}%)` }} // Adjusting for gap between images
                    >
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-44 object-cover rounded-lg"
                            />
                        ))}
                    </div>
                </div>

                <div className="flex justify-center space-x-2 mt-4">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'
                                }`}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
