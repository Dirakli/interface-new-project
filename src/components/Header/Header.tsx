import { useContext, useState } from "react";
import data from "../../data.json"
import { Link } from "react-router-dom";
import { AppContext } from "../../App";

function Header() {
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
    const { name, setName } = useContext(AppContext);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setIsLoggedIn(false);
    };

    return (
        <div className=' flex justify-between px-8 py-4 bg-gradient-to-r from-blue-900 to-sky-600' >
            <Link className="flex" to="/" ><div className='flex sm:w-96 justify-between '>
                <img className='cursor-pointer' src={data.header.Group}
                    alt="logo called DevvESG" />
                <h1 className='sm:flex items-center hidden text-base text-slate-100 loading-normal'>Organization Name</h1>
            </div>
            </Link>
            <div className='flex items-center justify-between'>
                <img className='w-3 mr-2' src={data.header.path} alt="path icon" />
                {isLoggedIn ? <span className="text-base mr-2 text-slate-100 loading-normal">{name}</span> : ""}
                {!isLoggedIn ? (<Link to='/signin' >
                    <button className="bg-transparent hover:bg-sky-700 font-semibold text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded">
                        Log In
                    </button></Link>) : ""}
                {isLoggedIn ? <button onClick={handleLogout} className="bg-transparent hover:bg-sky-700  font-semibold text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded">
                    Log Out
                </button> : ""}
            </div>

        </div>
    )
}

export default Header;