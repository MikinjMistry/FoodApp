import { useEffect, useState } from "react"

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true)
    useEffect(() => {
        const onlineListener = () => {
            setOnlineStatus(false)
            console.log("offline")
        }

        const offlineListener = () => {
            setOnlineStatus(true)
            console.log("online")
        }
        window.addEventListener('offline', onlineListener)
        window.addEventListener('online', offlineListener)
        return () => {
            removeEventListener('online', onlineListener)
            removeEventListener('offline', offlineListener)
        }
    }, [])
    return onlineStatus;
}

export default useOnlineStatus;