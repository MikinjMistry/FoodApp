import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useRestaurentMenu from '../utils/useRestaurentMenu';

import RestaurentCategory from './RestaurentCategory';
import { useState } from 'react';

const RestaurentMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurentMenu(resId)
    const [activeIndex, setActiveIndex] = useState(null)

    if (!resInfo)
        return (<div className='min-h-screen mt-20 px-11'><Shimmer /></div>)

    const { id, name, sla, avgRating, cuisines } = resInfo?.cards[2]?.card?.card?.info
    const cards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    return (<div className="min-h-screen mt-20 px-60">
        <div className='info'>
            <h1 className='text-xl mb-5 font-bold'>{name}</h1>
            <div className='border border-solid border-gray-400 rounded-lg p-5 my-3 shadow-lg shadow-gray-400'>
                <p className='text-lg'>🌟 {avgRating}</p>
                <p className='text-lg'>{cuisines.join(", ")}</p>
                <p className='text-lg'>{sla.slaString.toLowerCase()}</p>
            </div>
            <div>
                {
                    cards.map((card, i) => {
                        return card.card.card['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" &&
                            <RestaurentCategory key={card?.card?.card?.title} category={card?.card?.card} show={activeIndex == i} setActiveIndex={() => {
                                setActiveIndex(activeIndex == i ? null : i)
                            }} />
                    })
                }
            </div>
        </div>
        <div className='menu'>

        </div>
    </div>)
}
export default RestaurentMenu