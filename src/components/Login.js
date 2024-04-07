import { useContext, useState } from "react"
import UserContext from "../utils/UserContext"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [loginUser, setLoginUser] = useState("");
    const { setUsername } = useContext(UserContext);
    const navigate = useNavigate()

    const loginHandler = () => {
        setUsername(loginUser)
        navigate("/")
    }

    return (<div className="min-h-screen mt-20 px-11">
        <div className="w-2/4 border px-4 py-3 shadow-lg m-auto mt-36 rounded-lg">
            <div className="text-center mb-5">
                <h1 className="text-3xl font-bold">Login</h1>
            </div>
            <div>
                <label className="font-semibold block mb-2">Username</label>
                <input type="text" value={loginUser} onChange={(e) => { setLoginUser(e.target.value) }} className="py-1 px-2 border block mb-2 w-full rounded-md outline-blue-400" />
            </div>
            <div>
                <label className="font-semibold block mb-2">Password</label>
                <input type="password" className="py-1 px-2 border block mb-2 w-full rounded-md outline-blue-400" />
            </div>
            <div className="text-center mt-7">
                <button className="p-2 border rounded-lg bg-green-900 text-white w-36" onClick={loginHandler}>Login</button>
            </div>

        </div>
    </div>)
}

export default Login