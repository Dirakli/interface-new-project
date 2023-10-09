import data from "../../data.json";
import { Link } from 'react-router-dom';
import Routing from "./Routing/Routing";

const navItems = [
    { to: "/", text: "Launchpad", img: data.navigation.lauchpad },
    { to: "/analyze", text: "Analyze", img: data.navigation.analyze },
    { to: "/footprint", text: "My Carbon Footprint", img: data.navigation.footprint },
    { to: "/calculator", text: "Carbon Calculator", img: data.navigation.calculator }
];

function Navigation() {

    return (
        <div className='flex h-screen flex-col md:flex-row' style={{backgroundImage: "url('https://wallpapercave.com/wp/wp3486842.jpg')"}}>
            <nav className="flex" >
                <ul>
                    {navItems.map((item, index) => (
                        <Link key={index} to={item.to}>
                            <li className='flex items-center h-12 w-48 cursor-pointer hover:bg-blue-300 transition duration-500 ease-in-out font-archivo text-blue-300 hover:text-indigo-900'>
                                <img className={`w-5 mr-2 ${index === 0}`} src={item.img} alt="dfsfsf" />
                                <span>{item.text}</span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </nav>
            <Routing />
        </div>

    );
}

export default Navigation;
