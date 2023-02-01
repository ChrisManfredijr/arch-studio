import Hero from '../../components/Hero';
import Button from '../../components/Button';
import { ReactComponent as Arrow } from '../../assets/icons/icon-arrow.svg';
import {Link} from 'react-router-dom';

import {
  teamSmall,
  teamMedium,
  teamLarge,
  delSolSmall,
  delSolMedium,
  delSolLarge,
  bTowerSmall,
  bTowerMedium,
  bTowerLarge,
  prototypeSmall,
  prototypeMedium,
  prototypeLarge,
  welcomeLarge
} from '../../assets';

const Home = () => {
  return (
    <div>
      <div className='hidden md:flex absolute rotate-90 tracking-[0.15em] top-20 left-[-75px] text-light-grey justify-between w-[250px] lg:left-[-55px] xl:left-[-20px] 2xl:left-[300px]'><span className='tracking-[-2.5px]'>----------------------------------</span>  H O M E</div>
      <Hero />
      <div className='w-3/4 h-full mx-auto my-24 lg:flex 2xl:w-1/2 lg:relative'>
        <div className='border-t-4 border-light-grey w-20 md:hidden'></div>
        <h1 className='hidden md:block text-very-light-grey text-[140px] font-semibold leading-10 pt-20 lg:absolute lg:top-[-50px] lg:left-[75px] lg:text-[140px] xl:text-[200px]'>Welcome</h1>
        <div className='text-dark-grey lg:w-1/2 lg:ml-auto lg:mr-24 lg:mt-24'>
          <h1 className='text-5xl font-bold text-very-dark-blue pb-2 w-full pt-20 md:pt-6'>Welcome to Arch Studio</h1>
            <br />
            We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.
            <br /><br />
            Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.
            <br /><br />
            We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.
          <br /><br />
        </div>
        <img src={welcomeLarge} alt="arch studio project" className='hidden lg:block' />
      </div>

      <div className='w-full relative md:w-3/4 mx-auto 2xl:w-1/2'>
        <div className="w-full h-full flex flex-col absolute top-0 left-0 justify-center items-center z-50">
          <div className='w-10/12 h-80 flex flex-col justify-center'>
            <div>
              <h1 className='text-5xl text-soft-white font-bold pb-5 md:text-[70px]'>Small team, big ideas</h1>
            </div>
            <a as={Link} href="/About">
              <Button text="About Us"/>
            </a>
          </div>
        </div>
        <picture className=''>
          <source media="(min-width:1024px)" srcSet={teamLarge} />
          <source media="(min-width:640px)" srcSet={teamMedium} />
          <img src={teamSmall} alt="water architecture" className='w-full brightness-50' />
        </picture>
      </div>

      <div className='w-10/12 mx-auto mt-20 my-20 pb-20 md:w-3/4 2xl:w-1/2'>
        <div className='text-5xl font-bold pb-5 md:flex md:pb-5 justify-between'>
          Featured
          <a as={Link} href="/Portfolio">
            <div className='hidden w-max p-4 cursor-pointer md:flex font-semibold mt-7 text-xl md:mt-0  bg-very-dark-blue text-soft-white  hover:bg-dark-grey active:bg-light-grey'>
            See All  &nbsp; &nbsp; &nbsp; <Arrow />
            </div>
          </a>
        </div>

        <div className='lg:flex lg:justify-between '>
          <div className='relative pt-7'>
            <picture>
              <source media="(min-width:1024px)" srcSet={delSolLarge} />
              <source media="(min-width:640px)" srcSet={delSolMedium} />
              <img src={delSolSmall} alt="del Sol" className='w-full lg:max-w-[350px] lg:max-h-[560px]  brightness-75' />
            </picture>

            <h1 className='hidden md:block text-soft-white text-[250px] absolute right-3 top-[-25px] font-bold text-opacity-50'>1</h1>
            <div className='absolute flex flex-col bottom-0 left-0 p-5'>
              <h1 className='text-3xl font-bold text-soft-white'>Project De Sol</h1>
              <a as={Link} href="/Portfolio" className='cursor-pointer text-soft-white'>View All Projects</a>
            </div>
          </div>

          <div className='relative pt-7 lg:ml-5'>
            <picture>
              <source media="(min-width:1024px)" srcSet={bTowerLarge} />
              <source media="(min-width:640px)" srcSet={bTowerMedium} />
              <img src={bTowerSmall} alt="228B Tower" className='w-full brightness-92' />
            </picture>
            <h1 className='hidden md:block text-soft-white text-[250px] absolute right-3 top-[-25px] font-bold text-opacity-50'>2</h1>
            <div className='absolute flex flex-col bottom-0 left-0 p-5'>
              <h1 className='text-3xl font-bold text-soft-white'>228B Tower</h1>
              <a as={Link} href="/Portfolio" className='cursor-pointer text-soft-white'>View All Projects</a>
            </div>
          </div>

          <div className='relative pt-7 lg:ml-5'>
            <picture>
              <source media="(min-width:1024px)" srcSet={prototypeLarge} />
              <source media="(min-width:640px)" srcSet={prototypeMedium} />
              <img src={prototypeSmall} alt="Le Prototype" className='w-full brightness-75' />
            </picture>
            <h1 className='hidden md:block text-soft-white text-[250px] absolute right-3 top-[-25px] font-bold text-opacity-50'>3</h1>
            <div className='absolute flex flex-col bottom-0 left-0 p-5'>
              <h1 className='text-3xl font-bold text-soft-white'>Le Prototype</h1>
              <a as={Link} href="/Portfolio" className='cursor-pointer text-soft-white'>View All Projects</a>
            </div>
          </div>
        </div>

        <div className='h-auto w-full p-5 flex font-semibold mt-7 justify-center bg-very-dark-blue text-soft-white  hover:bg-dark-grey active:bg-light-grey md:hidden'>
          See All  &nbsp; &nbsp; &nbsp; <Arrow />
        </div>
      </div>

    </div>
  )
}

export default Home