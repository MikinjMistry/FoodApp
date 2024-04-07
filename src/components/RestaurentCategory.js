import { useState } from 'react';
import MenuItems from './MenuItems';

const RestaurentCategory = (props) => {
    const { category, show, setActiveIndex } = props;

    const handleToggle = () => {
        setActiveIndex()
    }

    return <div className='py-5'>
        <div className=' bg-gray-100 p-2 shadow-lg shadow-gray-300'>
            <div className='flex justify-between cursor-pointer' onClick={handleToggle}>
                <label className='text-xl font-bold cursor-pointer'>{category['title']} ({category.itemCards.length})</label>
                <span>{show ? "⬆️" : "⬇️"}</span>
            </div>
            {show && <MenuItems itemCards={category.itemCards} />}

        </div>
    </div>
}

export default RestaurentCategory;
