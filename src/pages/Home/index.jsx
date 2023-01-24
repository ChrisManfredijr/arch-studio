import Hero from '../../components/Hero';

import teamSmall from '../../assets/home/mobile/image-small-team.jpg';
import teamMedium from '../../assets/home/tablet/image-small-team.jpg';
import teamLarge from '../../assets/home/desktop/image-small-team.jpg';

import delSolSmall from '../../assets/portfolio/mobile/image-del-sol.jpg';
import delSolMedium from '../../assets/portfolio/tablet/image-del-sol.jpg';
import delSolLarge from '../../assets/portfolio/desktop/image-del-sol.jpg';

import bTowerSmall from '../../assets/portfolio/mobile/image-228b.jpg';
import bTowerMedium from '../../assets/portfolio/tablet/image-228b.jpg';
import bTowerLarge from '../../assets/portfolio/desktop/image-228b.jpg';

import prototypeSmall from '../../assets/portfolio/mobile/image-prototype.jpg';
import prototypeMedium from '../../assets/portfolio/tablet/image-prototype.jpg';
import prototypeLarge from '../../assets/portfolio/desktop/image-prototype.jpg';

import { ReactComponent as Arrow } from '../../assets/icons/icon-arrow.svg';
import Button from '../../components/Button';
const Home = () => {
  return (
    <div>
      <Hero />
      <div className='w-10/12 h-full mx-auto my-20'>
        <div className='border-t-4 border-light-grey w-20'></div>
        <h1 className='text-5xl font-bold text-very-dark-blue pt-20 pb-2'>Welcome to Arch Studio</h1>
        <p className='text-dark-grey'>
          <br />
          We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.
          <br /><br />
          Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.
          <br /><br />
          We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.
          <br /><br />
        </p>
      </div>

      <div className='w-full relative'>
        <div className="w-full h-full flex flex-col absolute top-0 left-0 justify-center items-center">
          <div className='w-10/12 h-80 flex flex-col justify-center'>
            <div>
              <h1 className='text-5xl text-soft-white font-bold pb-5'>Small teams, big ideas</h1>
              <p className='text-soft-white'></p>
            </div>
            <Button text="About Us" />
          </div>
        </div>
        <picture className=''>
          <source media="(min-width:900px)" srcSet={teamLarge} />
          <source media="(min-width:600px)" srcSet={teamMedium} />
          <img src={teamSmall} alt="water architecture" className='w-full' />
        </picture>
      </div>

      <div className='w-10/12 mx-auto mt-20 my-20 pb-20'>
        <h1 className='text-5xl font-bold pb-5'>Featured</h1>

        <div className='relative pt-7'>
          <picture>
            <source media="(min-width:900px)" srcSet={delSolLarge} />
            <source media="(min-width:600px)" srcSet={delSolMedium} />
            <img src={delSolSmall} alt="del Sol" className='w-full' />
          </picture>
          <div className='absolute flex flex-col bottom-0 left-0 p-5'>
            <h1 className='text-3xl font-bold text-soft-white'>Project De Sol</h1>
            <p className='text-soft-white'>View All Projects</p>
          </div>
        </div>

        <div className='relative pt-7'>
          <picture>
            <source media="(min-width:900px)" srcSet={bTowerLarge} />
            <source media="(min-width:600px)" srcSet={bTowerMedium} />
            <img src={bTowerSmall} alt="228B Tower" className='w-full' />
          </picture>
          <div className='absolute flex flex-col bottom-0 left-0 p-5'>
            <h1 className='text-3xl font-bold text-soft-white'>228B Tower</h1>
            <p className='text-soft-white'>View All Projects</p>
          </div>
        </div>

        <div className='relative pt-7'>
          <picture>
            <source media="(min-width:900px)" srcSet={prototypeLarge} />
            <source media="(min-width:600px)" srcSet={prototypeMedium} />
            <img src={prototypeSmall} alt="Le Prototype" className='w-full' />
          </picture>
          <div className='absolute flex flex-col bottom-0 left-0 p-5'>
            <h1 className='text-3xl font-bold text-soft-white'>Le Prototype</h1>
            <p className='text-soft-white'>View All Projects</p>
          </div>
        </div>

        <div className='h-auto w-full p-5 flex font-semibold mt-7 justify-center bg-very-dark-blue text-soft-white  hover:bg-dark-grey active:bg-light-grey'>
          See All  &nbsp; &nbsp; &nbsp; <Arrow />
        </div>
      </div>

    </div>
  )
}

export default Home