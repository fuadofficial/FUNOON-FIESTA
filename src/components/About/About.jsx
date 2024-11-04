import React from 'react'

const About = () => {
    return (
        <section className=''>
            <h1 className='text-6xl font-bold text-center'>Funoon fiesta</h1>
            <div className=" flex justify-center items-center w-full mt-4">
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
                    <img src="src/assets/todo list image.png" alt="image" className='w-32 h-32' />
                </div>
            </div>
            <div className="flex w-40 gap-10 rounded-lg items-center justify-center">
                <img src="src/assets/todo list image.png" alt="" />
                <img src="src/assets/todo list image.png" alt="" />
                <img src="src/assets/todo list image.png" alt="" />
                <img src="src/assets/todo list image.png" alt="" />
                <img src="src/assets/todo list image.png" alt="" />
            </div>

        </section>
    )
}

export default About