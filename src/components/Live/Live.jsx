import React from 'react';

const Live = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 py-10">
            <h1 className="text-2xl font-bold mb-4">Live Streams</h1>

            {/* YouTube Live Video */}
            <div className="mb-8 w-full max-w-4xl">
                <h2 className="text-xl font-semibold mb-2">YouTube Live</h2>
                <iframe
                    className="w-full h-64 md:h-80"
                    src="https://www.youtube.com/embed/JWMC0CMAYkQ?si=Ynxk_ORnHB14HU8I"
                    title="YouTube Live Stream"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            {/* Facebook Live Video */}
            <div className="w-full max-w-4xl">
                <h2 className="text-xl font-semibold mb-2">Facebook Live</h2>
                <iframe
                    className="w-full h-64 md:h-80"
                    src="https://www.facebook.com/plugins/video.php?height=346&href=https%3A%2F%2Fwww.facebook.com%2Fjamianooriyya%2Fvideos%2F1352353332308971%2F&show_text=false&width=560&t=0"
                    width="500"
                    height="280"
                    title="Facebook Live Stream"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default Live;




