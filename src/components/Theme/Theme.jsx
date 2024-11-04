import React from 'react';

const Theme = () => {
    return (
        <section className="flex justify-center items-center min-h-screen px-6 py-10">
            <div className="top-div flex flex-col md:flex-row justify-center items-center w-full max-w-4xl bg-white rounded-lg overflow-hidden">
                <div className="home-content w-full md:w-1/2 md:mr-8 mb-6 md:mb-0 text-gray-700 p-4">
                    <p className="text-lg leading-relaxed md:text-xl">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga blanditiis incidunt,
                        adipisci inventore veniam aspernatur modi cum! Corporis nesciunt nihil repellat deleniti optio non,
                        recusandae totam nemo, magni, voluptatem cum laboriosam eligendi? Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Fuga blanditiis incidunt, adipisci inventore veniam aspernatur modi cum! Corporis nesciunt
                        nihil repellat deleniti optio non, recusandae totam nemo, magni, voluptatem cum laboriosam eligendi?
                    </p>
                </div>
                <div className="home-img w-full md:w-1/2 flex justify-center">
                    <img 
                        src="src/assets/todo list image.png" 
                        alt="image" 
                        className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-lg border border-gray-300 shadow-sm" 
                    />
                </div>
            </div>
        </section>
    );
};

export default Theme;
