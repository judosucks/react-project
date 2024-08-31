import {useState} from "react"
import Link from "./Link"
function SideMenu({className}) {

    const links = [
        {
            label: 'Home',
            path: '/'
        }, {
            label: 'About',
            path: '/about'
        }, {
            label: 'Contact',
            path: '/contact'
        }, {
            label: 'Services',
            path: '/services'
        }
    ];

    const renderedItems = links.map((link) => {
        console.log(link);
        return (

            <Link key={link.label} to={link.path} activeClassName='' className="hover:bg-pink-100 font-bold">{link.label}</Link>

        );
    });

    return (
        <ul className={`list-none bg-pink-300 rounded w-24 text-center p-2 shadow ${className}`}>
            {renderedItems}
        </ul>
    )
}

export default SideMenu;