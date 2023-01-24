import Button from "../Button";
import { ReactComponent as Arrow } from '../../assets/icons/icon-arrow.svg';
import {ReactComponent as Logo} from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className="bg-very-light-grey relative flex flex-col text-center">
        <div className="h-[120px] w-[120px] bg-very-dark-blue absolute top-[-60px] left-0 right-0 ml-auto mr-auto flex justify-center align-middle">
            <Logo className="text-soft-white my-auto scale-75"/>
        </div>
        <ul className="mt-16">
            <li className="pt-5 text-dark-grey">Portfolio</li>
            <li className="pt-5 text-dark-grey">About Us</li>
            <li className="pt-5 text-dark-grey">Contact</li>
        </ul>
        <div className='h-auto w-4/6 ml-auto mr-auto p-5 flex font-semibold my-8 justify-center bg-very-dark-blue text-soft-white  hover:bg-dark-grey active:bg-light-grey'>
          See Our Portfolio  &nbsp; &nbsp; &nbsp; <Arrow />
        </div>
    </div>
  )
}

export default Footer