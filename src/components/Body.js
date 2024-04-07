import { useEffect, useState } from "react"
import RestaurentCard, { withOfferRestaurentCard } from "./RestaurentCard"
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurentList from "../utils/useRestaurentList";
const RestaurentCardOffer = withOfferRestaurentCard(RestaurentCard)


const Body = () => {
    [filterRestaurentData, setFilterRestaurentData] = useState([]);
    [searchTxt, setSearchTxt] = useState("")
    const restaurentData = useRestaurentList()
    const onlineStatus = useOnlineStatus()

    useEffect(() => {
        setFilterRestaurentData(restaurentData)
        console.log("restaurentData:", restaurentData)
    }, [restaurentData])

    const searchHandaler = () => {
        const filter = restaurentData.filter((res) => {
            return res.info.name.toLowerCase().includes(searchTxt.toLowerCase())
        })
        setFilterRestaurentData(filter)
    }

    if (!onlineStatus) {
        return <div className="min-h-screen mt-20 px-11">
            <h2 className="text-2xl font-bold text-center">🛜 Please check your internet conection </h2>
        </div>
    }

    return <div className="min-h-screen mt-20 px-11">
        <div className="flex p-2">
            <input type="text" className="h-9 p-2 border-solid border rounded-lg border-gray-600 outline-0" value={searchTxt} onChange={(e) => {
                setSearchTxt(e.target.value)
            }} />
            <button className="ml-3 rounded-lg px-3  h-9 border border-gray-600 bg-green-600" type="button" onClick={searchHandaler}>Search</button>
        </div>
        <div className="flex flex-wrap justify-start">
            {filterRestaurentData.length === 0 ? Array.from({ length: 9 }, (element, index) => index + 1).map((v, k) => {
                return <Shimmer key={k}></Shimmer>
            }) : filterRestaurentData.map((restaurent) =>
            restaurent?.info?.aggregatedDiscountInfoV3?.header ? <RestaurentCardOffer key={restaurent.info.id} restaurent={restaurent}/> : <RestaurentCard restaurent={restaurent} key={restaurent.info.id} />
            )}
        </div>
    </div>
}

export default Body