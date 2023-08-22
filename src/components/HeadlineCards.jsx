import React from "react";

const HeadlineCards = () => {
    return (
        <div className="max-w-7xl mx-auto p-4 my-12 grid md:grid-cols-3 gap-6">
            {/* Card */}
            <div className="rounded-xl relative">
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/60 rounded-xl text-slate-50">
                    <p className="font-heading lg:text-xl font-bold text-lg px-2 pt-4 text-center">Breakfast o' clock!</p>
                    <p className="px-2 text-center text-sm">Everyday, 7am-11am</p>
                    <button className="border-slate-50 bg-white/25 backdrop-blur-sm text-slate-50 hover:bg-transparent hover:tracking-wider duration-300 w-3/6 rounded-full absolute bottom-4 left-1/4 text-sm">Order Now</button>
                </div>

                <img className="rounded-xl max-h-40 md:max-h-52 w-full object-cover" src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg" alt="Breakfast promotion card." />
            </div>
            
            {/* Card */}
            <div className="rounded-xl relative">
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/60 rounded-xl text-slate-50">
                    <p className="font-heading lg:text-xl font-bold text-lg px-2 pt-4 text-center">Delicious meals</p>
                    <p className="px-2 text-center text-sm">Added to our menu weekly</p>
                    <button className="border-slate-50 bg-white/25 backdrop-blur-sm text-slate-50 hover:bg-transparent hover:tracking-wider duration-300 w-3/6 rounded-full absolute bottom-4 left-1/4 text-sm">Order Now</button>
                </div>

                <img className="rounded-xl max-h-40 md:max-h-52 w-full object-cover" src="https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg" alt="Meal promotion card." />
            </div>

            {/* Card */}
            <div className="rounded-xl relative">
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/60 rounded-xl text-slate-50">
                    <p className="font-heading lg:text-xl font-bold text-lg px-2 pt-4 text-center">Fine desserts</p>
                    <p className="px-2 text-center text-sm">Treat yourself</p>
                    <button className="border-slate-50 bg-white/25 backdrop-blur-sm text-slate-50 hover:bg-transparent hover:tracking-wider duration-300 w-3/6 rounded-full absolute bottom-4 left-1/4 text-sm">Order Now</button>
                </div>

                <img className="rounded-xl max-h-40 md:max-h-52 w-full object-cover" src="https://images.pexels.com/photos/219293/pexels-photo-219293.jpeg" alt="Dessert promotion card." />
            </div>
        </div>
    )
}

export default HeadlineCards