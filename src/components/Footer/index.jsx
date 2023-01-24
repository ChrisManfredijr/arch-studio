import Button from "../Button";
import { ReactComponent as Arrow } from '../../assets/icons/icon-arrow.svg';
import {ReactComponent as Logo} from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className="bg-very-light-grey relative flex flex-col text-center md:flex-row md:w-3/4">
        <div className="h-[120px] w-[120px] bg-very-dark-blue absolute top-[-60px] left-0 right-0 ml-auto mr-auto flex justify-center align-middle md:static md:m-0">
            <Logo className="text-soft-white my-auto scale-75"/>
        </div>
        <ul className="mt-16 md:flex md:mt-0">
            <li className="font-bold pt-5 text-dark-grey md:mx-9 md:pt-0 md:my-auto">Portfolio</li>
            <li className="font-bold pt-5 text-dark-grey md:mx-9 md:pt-0 md:my-auto">About Us</li>
            <li className="font-bold pt-5 text-dark-grey md:mx-9 md:pt-0 md:my-auto">Contact</li>
        </ul>
        <div className='h-max w-4/6 ml-auto mr-auto p-5 flex font-semibold my-8 justify-center bg-very-dark-blue text-soft-white  hover:bg-dark-grey active:bg-light-grey md:w-max md:m-0 md:absolute right-[-150px] top-6'>
          See Our Portfolio  &nbsp; &nbsp; &nbsp; <Arrow />
        </div>
    </div>
  )
}

export default Footer