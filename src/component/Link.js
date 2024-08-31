import classNames from "classnames";
import useNavigation from "../hooks/useNavigation";

function Link({to, children, className, activeClassName,...rest}) {

    const {navigate, currentPath} = useNavigation()

    const classes = classNames('text-white', className, currentPath === to && activeClassName //if current path is the same as the link's path, add active class
    )
    const handleClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;

        }
        event.preventDefault()
        
        navigate(to)
        console.log(currentPath, to)
    }
    return <li {...rest} className={classes} href={to} onClick={handleClick}>{children}</li>
}
export default Link;