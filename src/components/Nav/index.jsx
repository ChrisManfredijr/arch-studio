import {ReactComponent as Logo} from '../../assets/logo.svg';
import {ReactComponent as Hamburger} from '../../assets/icons/icon-hamburger.svg';
const Nav = () => {
  return (
    <div className="h-[96px] p-[32px] pl-[12px] flex justify-between">
      <Logo className="scale-75"/>
      <Hamburger className="my-auto"/>
    </div>
  )
}

export default Nav