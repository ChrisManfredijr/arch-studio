import {ReactComponent as Arrow} from '../../assets/icons/icon-arrow.svg';

const Button = ({text}) => {
  return (
    <div className='h-auto w-max p-5 flex font-semibold bg-very-dark-blue text-soft-white  hover:bg-dark-grey active:bg-light-grey'>
        {text}   &nbsp; &nbsp; &nbsp; <Arrow />
    </div>
  )
}

export default Button