
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GoX } from 'react-icons/go';
import SideMenu from './SideMenu';
import NavBar from './NavBar';
import judo from '../judo.jpg'

function Header(){

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => setShowMenu(!showMenu);

    let content
    if(showMenu){
        content =<div className=''>
        <GoX size='2rem' className='absolute right-3 top-5 md:hidden'/>
        <SideMenu showMenu={showMenu} className="text-sm"></SideMenu>
        </div>

    }else{
        content = <GiHamburgerMenu size='2rem' className='absolute right-3 top-5 md:hidden'/>
    }
    return(
        <header className="container flex flex-row lg:justify-start md:justify-start w-full bg-pink-400 h-20">
            <a href='/'><img src={judo} alt='judosucks' className=' w-14 h-14 rounded-full inset-1 m-2'/>
            <p className=' absolute left-16 top-8 text-white'>JUDOSUCKS</p>
            </a>
            <button className='cursor-pointer' onClick={toggleMenu}>
                {content}
            </button>
            <NavBar/>
        </header>
    )
}

export default Header;