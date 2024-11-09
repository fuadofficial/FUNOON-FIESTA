import React from 'react'

const Programs = () => {
    return (
        <div className='px-40 py-10'>
            <div className="display-section bg-gray-400 flex items-center justify-between py-3 px-10 rounded-lg">
                <div className="content flex gap-3">
                    <div className="img w-32 bg-red-600 rounded-3xl">
                        <img src="src/assets/png/image.png" alt="" />
                    </div>
                    <div className="text">
                        <h1>04</h1>
                        <h1>DAYS</h1>
                    </div>
                </div>
                <div className="content flex gap-3">
                    <div className="img w-32 bg-red-600 rounded-3xl">
                        <img src="src/assets/png/image (1).png" alt="" />
                    </div>
                    <div className="text">
                        <h1>100</h1>
                        <h1>EVENTS</h1>
                    </div>
                </div>
                <div className="content flex gap-3">
                    <div className="img w-32 bg-red-600 rounded-3xl">
                        <img src="src/assets/png/user.webp" alt="" />
                    </div>
                    <div className="text">
                        <h1>1300+</h1>
                        <h1>STUDENTS</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Programs