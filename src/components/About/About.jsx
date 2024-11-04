import React from 'react';

const About = () => {
    return (
        <section className=''>
            <h1 className='text-6xl font-bold text-center'>Funoon Fiesta</h1>
            <div className="flex justify-center items-center w-full mt-4">
                <div className="home-content w-1/2 p-10">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Fuga blanditiis incidunt, adipisci inventore veniam aspernatur
                        modi cum! Corporis nesciunt nihil repellat deleniti optio non,
                        recusandae totam nemo, magni, voluptatem cum laboriosam eligendi?
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Fuga blanditiis incidunt, adipisci inventore veniam aspernatur
                        modi cum! Corporis nesciunt nihil repellat deleniti optio non,
                        recusandae totam nemo, magni, voluptatem cum laboriosam eligendi?</p>
                </div>
                <div className="home-img border-black">
                    <img src="src/assets/todo list image.png" alt="image" className='w-82 h-52' />
                </div>
            </div>

            <div className="flex justify-between w-full px-40 my-10 space-x-2">
                <img src="src/assets/todo list image.png" className="w-40 h-40 rounded-lg" />
                <img src="src/assets/todo list image.png" className="w-40 h-40 rounded-lg" />
                <img src="src/assets/todo list image.png" className="w-40 h-40 rounded-lg" />
                <img src="src/assets/todo list image.png" className="w-40 h-40 rounded-lg" />
                <img src="src/assets/todo list image.png" className="w-40 h-40 rounded-lg" />
            </div>
        </section>
    );
}

export default About;
