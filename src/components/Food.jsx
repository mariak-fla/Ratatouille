import React, { useState } from "react";
import { menu } from '../data/menu'
import { LuRat } from 'react-icons/lu'

const Food = () => {
    const [foods, setFoods] = useState(menu)

    // filter food type
    const filterType = (category) => {
        setFoods(
            menu.filter((item) => {
                return item.category === category
            })
        )
    }

    // filter food price range
    const filterPrice = (price) => {
        setFoods(
            menu.filter((item) => {
                return item.price === price
            })
        )
    }

    return (
        <div className="max-w-7xl m-auto px-4 py-12">
            <h1 className="text-slate-800 text-4xl text-center flex justify-center gap-5 items-center mb-2 font-light">Chef's Selection <LuRat size={30} className="stroke-slate-800 stroke-[1.4]" /></h1>

            {/* Filters */}
            <div className="flex flex-col lg:flex-row justify-between">
                {/* filter by type */}
                <div>
                    <p className="text-slate-700 font-semibold">Food type</p>
                    <div className="flex justify-between flex-wrap">
                        <button onClick={() => setFoods(menu)} className="border-slate-600 text-slate-600 bg-transparent rounded-full hover:bg-slate-600 hover:text-slate-50 duration-300 m-1">All</button>
                        <button onClick={() => filterType('burger')} className="border-slate-600 text-slate-600 bg-transparent rounded-full hover:bg-slate-600 hover:text-slate-50 duration-300 m-1">Burgers</button>
                        <button onClick={() => filterType('salad')} className="border-slate-600 text-slate-600 bg-transparent rounded-full hover:bg-slate-600 hover:text-slate-50 duration-300 m-1">Salads</button>
                        <button onClick={() => filterType('pizza')} className="border-slate-600 text-slate-600 bg-transparent rounded-full hover:bg-slate-600 hover:text-slate-50 duration-300 m-1">Pizza</button>
                        <button onClick={() => filterType('chicken')} className="border-slate-600 text-slate-600 bg-transparent rounded-full hover:bg-slate-600 hover:text-slate-50 duration-300 m-1">Chicken</button>
                    </div>
                </div>

                {/* filter by price */}
                <div>
                    <p className="text-slate-700 font-semibold">Price range</p>
                    <div className="flex justify-between max-w-sm w-full">
                        <button onClick={() => filterPrice('$')} className="border-slate-600 text-slate-600 bg-transparent rounded-full hover:bg-slate-600 hover:text-slate-50 duration-300 m-1">$</button>
                        <button onClick={() => filterPrice('$$')} className="border-slate-600 text-slate-600 bg-transparent rounded-full hover:bg-slate-600 hover:text-slate-50 duration-300 m-1">$$</button>
                        <button onClick={() => filterPrice('$$$')} className="border-slate-600 text-slate-600 bg-transparent rounded-full hover:bg-slate-600 hover:text-slate-50 duration-300 m-1">$$$</button>
                        <button onClick={() => filterPrice('$$$$')} className="border-slate-600 text-slate-600 bg-transparent rounded-full hover:bg-slate-600 hover:text-slate-50 duration-300 m-1">$$$$</button>
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                {foods.map((item, index) => (
                    <div key={index} className="border-slate-50 shadow-lg rounded-ss-2xl rounded-ee-2xl hover:scale-105 duration-300">
                        <img src={item.image} alt={item.name} className="rounded-ss-2xl w-full h-52 object-cover" />
                        <div className="flex justify-between mx-3 my-4">
                            <p className="font-heading text-slate-600">{item.name}</p>
                            <p>
                                <span className="bg-slate-600 text-slate-50 px-3 rounded-full text-sm">{item.price}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Food