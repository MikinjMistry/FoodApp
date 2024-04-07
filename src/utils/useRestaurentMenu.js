import { useEffect, useState } from "react";
import { SWIGGY_RES_API } from "./constant";

const useRestaurentMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchRestaurentMenu()
    }, [])

    fetchRestaurentMenu = async () => {
        const data = await fetch(SWIGGY_RES_API + resId);
        const json = await data.json();
        setResInfo(json.data)
    }

    return resInfo;
}

export default useRestaurentMenu;