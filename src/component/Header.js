
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GoX } from 'react-icons/go';
import SideMenu from './SideMenu';
import judo from '../judo.jpg'
function Header(){
    
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => setShowMenu(!showMenu);

    let content
    if(showMenu){
        content =<div className=''>
        <GoX size='2rem' className='absolute right-3 pt-3 md:hidden'/>
        <SideMenu className="text-sm md:hidden"></SideMenu>
        </div>

    }else{
        content = <GiHamburgerMenu size='2rem' className='absolute right-3 pt-3 md:hidden'/>
    }
    return(
        <header className="container grid grid-cols-6 w-full bg-pink-400 h-20">
            <a href='/'><img src={judo} alt='judosucks' className=' w-14 h-14 rounded-full inset-1 m-2'/>
            <p className=' absolute left-16 top-8 text-white'>JUDOSUCKS</p>
            </a>
            <a className='cursor-pointer' href='#' onClick={toggleMenu}>
                {content}
            </a>
        </header>
    )
}

export default Header;