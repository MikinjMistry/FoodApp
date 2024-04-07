import { useEffect } from "react"

const Contact = () => {
    useEffect(() => {
        console.log("Use Effect component Did Mount")
        const timer = setInterval(() => {
            console.log("timer called")
        }, 1000);
        return () => {
            clearInterval(timer)
            console.log("use Effect Component will unmount")
        }
    }, [])

    useEffect(() => {
        console.log("re-render")
    })

    console.log("Render")
    return (<div className="min-h-screen mt-20 px-11">

        <h1 className="text-2xl font-bold">Contact Us</h1>

    </div>)
}

export default Contact