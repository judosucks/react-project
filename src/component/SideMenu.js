import {useState} from "react"
import Link from "./Link"
import { GiNewShoot } from "react-icons/gi";
import { BiNews } from "react-icons/bi";
import { GoDependabot } from "react-icons/go";
import { GoBook } from "react-icons/go";
function SideMenu({className}) {

        

    const links = [
        {
            label: 'News',
            path: '/news',
            icon: <BiNews className="absolute"/>
        }, {
            label: 'Doc',
            path: '/Documentation',
            icon:<GoBook className="absolute"/>
            
        }, {
            label: 'About',
            path: '/about',
            icon: <GoDependabot className="absolute"/>
        }
    ];

    const renderedItems = links.map((link) => {
        console.log(link);
        return (

            <Link key={link.label} to={link.path} activeClassName='font-bold' className="hover:bg-pink-100 hover:rounded">
                <span className="hover:text-yellow-700 hover:font-bold">{link.icon}{link.label}</span>
                </Link>

        );
    });

    return (
        <ul className={`list-none bg-pink-300 rounded w-24 h-32 text-center p-2 shadow absolute right-8 top-10 flex flex-col justify-around ${className}`}>
            {renderedItems}
        </ul>
    )
}

export default SideMenu;