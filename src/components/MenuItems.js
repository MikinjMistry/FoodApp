const MenuItems = (props) => {
    const { itemCards } = props
    console.log("itemCards:", itemCards)
    return (<div className="mt-4">
        {
            itemCards.map((card) => {
                return <div key={card.card.info.id} className="flex justify-between py-4 border-b border-b-gray-700">
                    <div className="w-10/12">
                        <p className="text-lg font-bold">{card.card.info.name}</p>
                        <p>₹ {((card.card.info.price || card.card.info.defaultPrice) / 100).toFixed(2)}</p>
                        <p>⭐{card.card.info.ratings.aggregatedRating.rating} {card.card.info.ratings.aggregatedRating.ratingCountV2 && "(" + card.card.info.ratings.aggregatedRating.ratingCountV2 + ")"} </p>
                        <p className="text-sm my-2">{card.card.info.description}</p>
                    </div>
                    <div className="w-40 h-40 p-4 relative">
                        <img className="w-full h-full rounded-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+card.card.info.imageId} />
                        <button className="px-2 py-1 absolute left-14 bottom-1 bg-black text-white text-xs rounded-md">Add</button>
                    </div>
                </div>
            })
        }
    </div>)
}

export default MenuItems;