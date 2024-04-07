import { Link, useNavigate } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import UserContext from '../utils/UserContext'
import { useContext } from 'react'


const Header = () => {
    const { user, setUsername } = useContext(UserContext);
    const onlineStatus = useOnlineStatus()
    const navigate = useNavigate()

    return <div className="py-4 px-12 z-50 shadow-md flex justify-between items-center fixed top-0 w-dvw bg-slate-50 shadow-gray-500">
        <div>
            <Link to="/">
                <h1 className='text-2xl font-bold'>YumHub</h1>
            </Link>
        </div>
        <div className="menu flex">
            <ul className='flex'>
                <li className='px-4'>
                    <Link to="/">Home</Link>
                </li>
                <li className='px-4'>
                    <Link to="/about">About</Link>
                </li>
                <li className='px-4'>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
        <div>
            <ul className='flex'>
                <li className='px-4' >
                    {user ?
                        <button onClick={() => {
                            setUsername(null);
                            navigate("/login")
                        }}>Logout</button> :
                        <Link to="/login">
                            Login
                        </Link>
                    }
                </li>
                <li className='px-4'>
                    {user ? user : "Unknown"}: {onlineStatus ? '🟢' : '🔴'}
                </li>
            </ul>
        </div>

    </div>
}

export default Header