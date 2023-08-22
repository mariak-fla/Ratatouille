import React from "react";

const Hero = () => {
    return (
        <div className="max-w-7xl mx-auto p-4">
            <div className="max-h-[60vh] relative">
                {/* Overlay */}
                <div className="absolute w-full h-full text-slate-200 max-h-[60vh] bg-black/50 flex flex-col justify-center rounded-tr-3xl rounded-bl-3xl">
                    <h1 className="px-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin">Only the <span className="font-bold text-amber-400">best</span></h1>
                    <h1 className="px-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin">from our <span className="font-bold text-amber-400">top chef</span></h1>
                </div>
                <img className="w-full h-[60vh] object-cover rounded-tr-3xl rounded-bl-3xl" src="https://imgur.com/yCUCLyh.jpg" alt="" />
            </div>
        </div>
    )
}

export default Hero