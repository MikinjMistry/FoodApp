import { useState, useEffect } from "react"
import { SWIGGY_API } from "./constant";

const useRestaurentList = () => {
    const [restaurents, setRestaurents] = useState([]);
    useEffect(() => {
        fetchRestaurent()
    }, [])

    const fetchRestaurent = async () => {
        let data = await fetch(SWIGGY_API);
        data = await data.json();
        let restaturents = data['data']['cards'][4]['card']['card']['gridElements']['infoWithStyle']['restaurants'];
        setRestaurents(restaturents)
    }
    return restaurents;
}

export default useRestaurentList;