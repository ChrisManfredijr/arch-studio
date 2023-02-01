import { useState } from 'react';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import {ReactComponent as Hamburger} from '../../assets/icons/icon-hamburger.svg';
import { ReactComponent as Close } from '../../assets/icons/icon-close.svg';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="h-[96px] p-[32px] pl-[12px] flex justify-between md:justify-start md:px-0 md:w-3/4 md:mx-auto md:my-6 2xl:w-1/2">
      
      <a as={Link} href="/">
        <Logo className="scale-75 md:scale-100"/>
      </a>

      <div className='hidden text-medium-grey z-20 font-bold md:flex md:leading-9 md:text-xl'>
        <a className='md:pl-16' as={Link} href="/Portfolio">Portfolio</a>
        <a className='md:pl-16' as={Link} href="/About">About Us</a>
        <a className='md:pl-16' as={Link} href="/Contact">Contact</a>
      </div>

      {openMenu ? <Close className="cursor-pointer" onClick={() =>{setOpenMenu(false)}}/> : <Hamburger className="my-auto md:hidden cursor-pointer" onClick={() =>{setOpenMenu(true)}}/>}
      
      {openMenu ? <div className='absolute bg-very-light-grey h-[235px] w-[343px] z-20 top-24 right-0 p-12'>
      <div className='text-very-dark-blue font-bold text-4xl flex flex-col'>
        <a className='pb-3.5' as={Link} href="/Portfolio">Portfolio</a>
        <a className='pb-3.5' as={Link} href="/About">About Us</a>
        <a className='pb-3.5' as={Link} href="/Contact">Contact</a>
      </div>
      </div>:""}
    </div>
  )
}

export default Nav