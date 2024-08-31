import '../judo.jpg'
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GoX } from 'react-icons/go';
import SideMenu from './SideMenu';
function Header(){
    
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => setShowMenu(!showMenu);

    let content
    if(showMenu){
        content =<div className='relative'>
        <GoX size='2rem' className='md:hidden'/>
        <SideMenu className="text-lg font-bold md:hidden"></SideMenu>
        </div>

    }else{
        content = <GiHamburgerMenu size='2rem' className='md:hidden'/>
    }
    return(
        <header className="container grid grid-cols-6 w-full bg-pink-400 h-12">
            <a className='cursor-pointer' href='#' onClick={toggleMenu}>
                {content}
            </a>
        </header>
    )
}

export default Header;