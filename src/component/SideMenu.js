import {useState, createContext} from "react"
import useLinksContext from "../hooks/useLinksContext";
import Link from "./Link"

function SideMenu({className}) {
    
     
     const {links } = useLinksContext();
    

    const renderedItems = links.map((link) => {
        console.log({link});
        return (

            <Link key={link.label} to={link.path} activeClassName='font-bold' className="hover:bg-pink-100 hover:rounded">
                <span className="hover:text-yellow-700 hover:font-bold">{link.icon}{link.label}</span>
                </Link>

        );
    });
    

    return (
        <>
        <ul className={`list-none bg-pink-300 rounded w-24 h-32 text-center p-2 shadow absolute right-8 top-10 flex flex-col justify-around md:hidden ${className}`}>
            {renderedItems}
        </ul>
        
        </>
    )
}

export default SideMenu;