import { createContext,useContext } from "react";
import { AiFillGift } from "react-icons/ai";
import { BiNews } from "react-icons/bi";
import { GoDependabot } from "react-icons/go";
import { GoBook } from "react-icons/go";

const LinksContext = createContext()

function LinksProvider({children}) {
    
    const links = [
        {
            label: 'News',
            path: '/news',
            icon: <BiNews className="absolute"/>
        }, {
            label: 'Doc',
            path: '/documentation',
            icon:<GoBook className="absolute"/>
            
        }, {
            label: 'About',
            path: '/about',
            icon: <GoDependabot className="absolute"/>
        },{
            label:'Shop',
            path: '/shop',
            icon:<AiFillGift className="absolute"/>
        }
    ];
    return (
        <LinksContext.Provider value={{links}}>
            {children}
        </LinksContext.Provider>
    )
}
export {LinksProvider}
export default LinksContext;