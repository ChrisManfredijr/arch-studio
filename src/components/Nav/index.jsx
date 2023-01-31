import {ReactComponent as Logo} from '../../assets/logo.svg';
import {ReactComponent as Hamburger} from '../../assets/icons/icon-hamburger.svg';
const Nav = () => {
  return (
    <div className="h-[96px] p-[32px] pl-[12px] flex justify-between md:justify-start md:px-0 md:w-3/4 md:mx-auto md:my-6 2xl:w-1/2">
      <Logo className="scale-75 md:scale-100"/>
      <ul className='hidden text-medium-grey font-bold md:flex md:leading-9 md:text-xl'>
        <li className='md:pl-16'>Portfolio</li>
        <li className='md:pl-16'>About Us</li>
        <li className='md:pl-16'>Contact</li>
      </ul>
      <Hamburger className="my-auto md:hidden"/>
    </div>
  )
}

export default Nav