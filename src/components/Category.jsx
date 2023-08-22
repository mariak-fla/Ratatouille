import React from 'react';
import { categories } from '../data/menu';

const Category = () => {
    return (
        <div className='max-w-7xl px-4 py-12 mx-auto'>
            <h1 className='text-4xl text-slate-800 font-light'>Most Searched</h1>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
                {categories.map((item, index) => (
                    <div key={index} className='bg-slate-200 rounded-lg p-4 flex justify-between items-center'>
                        <h2 className='font-heading sm:text-xl text-slate-600'>{item.name}</h2>
                        <img className='w-20' src={item.image} alt={item.name} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category