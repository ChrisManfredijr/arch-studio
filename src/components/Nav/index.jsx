import { useState } from 'react';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import {ReactComponent as Hamburger} from '../../assets/icons/icon-hamburger.svg';
import { ReactComponent as Close } from '../../assets/icons/icon-close.svg';
const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="h-[96px] p-[32px] pl-[12px] flex justify-between md:justify-start md:px-0 md:w-3/4 md:mx-auto md:my-6 2xl:w-1/2">
      <Logo className="scale-75 md:scale-100"/>
      <ul className='hidden text-medium-grey font-bold md:flex md:leading-9 md:text-xl'>
        <li className='md:pl-16'>Portfolio</li>
        <li className='md:pl-16'>About Us</li>
        <li className='md:pl-16'>Contact</li>
      </ul>
      {openMenu ? <Close onClick={() =>{setOpenMenu(false)}}/> : <Hamburger className="my-auto md:hidden" onClick={() =>{setOpenMenu(true)}}/>}
      
      {openMenu ? <div className='absolute bg-very-light-grey h-[235px] w-[343px] z-20 top-24 right-0 p-12'>
      <ul className='text-very-dark-blue font-bold text-4xl'>
        <li className='pb-3.5'>Portfolio</li>
        <li className='pb-3.5'>About Us</li>
        <li className='pb-3.5'>Contact</li>
      </ul>
      </div>:""}
    </div>
  )
}

export default Nav