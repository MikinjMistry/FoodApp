import { RES_IMG_URL } from "./../utils/constant"
import { useNavigate } from "react-router-dom";

const RestaurentCard = (props) => {
    const { restaurent, myclass } = props;
    const navigate = useNavigate()

    const handleResCardClick = (resId) => {
        navigate('/restaurents/' + resId)
    }

    const { name, cloudinaryImageId, cuisines, avgRating, sla, id, aggregatedDiscountInfoV3 } = restaurent.info;
    return <div className={`rounded-md p-3 cursor-pointer shadow-gray-200 shadow-lg hover:shadow-gray-300 ${myclass?myclass:'w-1/4'}`} onClick={() => {
        handleResCardClick(id)
    }}>
        <div className="w-full h-40 relative">
            <img className="rounded-md min-w-full h-full " src={RES_IMG_URL + cloudinaryImageId} />
            {aggregatedDiscountInfoV3?.header && <lable className="absolute bottom-1 left-1 bg-slate-800 text-white text-xs p-1">{aggregatedDiscountInfoV3?.header + " " + aggregatedDiscountInfoV3.subHeader}</lable>}
        </div>
        <h4 className="truncate text-lg font-semibold" title={name}>{name}</h4>
        <h4 className="truncate" title={cuisines.join(", ")}>{cuisines.join(", ")}</h4>
        <h4 className="truncate">{avgRating} Star. {sla.deliveryTime} - {sla.deliveryTime + 5} mins</h4>
    </div>
}


export const withOfferRestaurentCard = (RestaurentCard) => {
    return (props) => {
        return <div className="relative w-1/4">
            <label className="absolute z-10 top-2 left-3 bg-black text-white p-1 text-xs rounded-sm">OFFER</label>
            <RestaurentCard {...props} myclass="w-full" />
        </div>
    }
}

export default RestaurentCard;