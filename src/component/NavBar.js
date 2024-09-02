import useLinksContext from "../hooks/useLinksContext";
import Link from "./Link";
function NavBar() {
    const {links} = useLinksContext();
    const renderedNavBar = links.map((link) => {
        return (
            <Link
                key={link.label}
                to={link.path}
                activeClassName='font-bold'
                className="hover:bg-pink-100 hover:rounded">
                <span className="hover:text-yellow-700 p-3 ml-4">{link.icon}{link.label}</span>
            </Link>
        )
    })
    return (
        <div className="flex flex-row hidden md:flex list-none">
            {renderedNavBar}
        </div>
    )
}

export default NavBar;