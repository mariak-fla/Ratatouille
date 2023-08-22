import React, { useEffect, useState } from "react";
import { LuCoins, LuHeart, LuHelpCircle, LuMenu, LuSearch, LuShoppingBag, LuShoppingCart, LuUserPlus, LuUtensilsCrossed, LuWallet, LuX } from "react-icons/lu";

const Navbar = () => {
    const [nav, setNav] = useState(false)

    useEffect(() => {
        if (nav) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
      }, [nav]);    

    return (
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
            {/* left */}
            <div className="flex items-center">
                <div onClick={() => setNav(!nav)} className="cursor-pointer">
                    <LuMenu size={30} className="text-slate-900" />
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl px-4 text-slate-900 font-light">
                    <span className="font-bold">rat</span>atouille
                </h1>
                <div className="hidden lg:flex items-center bg-slate-200 rounded-full p-1 text-sm">
                    <p className="bg-slate-900 text-slate-50 rounded-full px-2 py-0.5">Delivery</p>
                    <p className="px-2 py-0.5">Pickup</p>
                </div>
            </div>

            {/* search */}
            <div className="bg-slate-200 rounded-full flex items-center px-2 w-52 sm:w-96 lg:w-[500px]">
                <LuSearch size={20} />
                <input className="bg-transparent px-2 py-0.5 focus:outline-none w-full" type="text" placeholder="Find your favorite dishes!" />
            </div>

            {/* cart */}
            <button className="bg-slate-900 text-slate-50 hidden md:flex items-center gap-2 px-4 py-0.5 rounded-full hover:bg-slate-700 border-none duration-300">
                <LuShoppingCart size={20} />
                Cart
            </button>

            {/* mobile menu */}

            {/* overlay */}
            {nav ? <div className="bg-black/75 fixed w-full h-screen z-10 top-0 left-0 duration-75 backdrop-blur-sm"></div> : ''}

            {/* side drawer menu */}
            <div className={nav ? "fixed top-0 left-0 w-80 h-screen bg-slate-50 z-10 duration-300" : "fixed top-0 left-[-100%] w-80 h-screen bg-slate-50 z-10 duration-300"}>
                <LuX 
                    onClick={() => setNav(!nav)}
                    size={20} 
                    className="absolute right-4 top-4 cursor-pointer text-slate-900 hover:text-red-500 duration-200" />
                <h2 className="text-slate-900 text-2xl px-4 py-2 font-heading font-light">
                    <span className="font-bold">rat</span>atouille
                </h2>
                <nav>
                    <ul className="flex flex-col mx-4 my-4 text-slate-800">
                        <li className="text-lg py-4 flex items-center gap-4 cursor-pointer hover:text-slate-500 duration-200"><LuShoppingBag size={21} /> Orders</li>
                        <li className="text-lg py-4 flex items-center gap-4 cursor-pointer hover:text-slate-500 duration-200"><LuHeart size={21} /> Favorites</li>
                        <li className="text-lg py-4 flex items-center gap-4 cursor-pointer hover:text-slate-500 duration-200"><LuWallet size={21} /> Wallet</li>
                        <li className="text-lg py-4 flex items-center gap-4 cursor-pointer hover:text-slate-500 duration-200"><LuCoins size={21} /> Promotions</li>
                        <li className="text-lg py-4 flex items-center gap-4 cursor-pointer hover:text-slate-500 duration-200"><LuUtensilsCrossed size={21} /> Recommended</li>
                        <li className="text-lg py-4 flex items-center gap-4 cursor-pointer hover:text-slate-500 duration-200"><LuUserPlus size={21} /> Invite friends</li>
                        <li className="text-lg py-4 flex items-center gap-4 cursor-pointer hover:text-slate-500 duration-200"><LuHelpCircle size={21} /> Help</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar