import {useState,useEffect} from 'react';

import {
    avatarJacksonLarge, 
    avatarJakeLarge, 
    avatarMariaLarge,
    avatarThompsonLarge,
    heritageLarge,
    aboutHeroLarge,
    aboutHeroMedium,
    aboutHeroSmall,
} from '../../assets';
import Bookmark from '../../components/Bookmark';
const About = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
    return () => {
      setVisible(false);
    };
  }, []);
  
  return (
   
    <div className={`transition-opacity duration-500 ${visible ? 'opacity-100 min-h-screen' : 'opacity-0 min-h-screen'}`}>
      
      <Bookmark text="A B O U T"/>
        <div className='md:w-3/4 mx-auto 2xl:w-1/2'>
          <picture className=''>
            <source media="(min-width:1024px)" srcSet={aboutHeroLarge} />
            <source media="(min-width:768px)" srcSet={aboutHeroMedium} />
            <img src={aboutHeroSmall} alt="about us" className='w-full brightness-50 lg:w-1/2' />
          </picture>
        </div>

        <div className={`transition-opacity duration-400 ${visible ? 'opacity-100 relative h-[150px]' : 'opacity-0 relative h-[150px]'}`}>
          <div className='absolute top-[-50px] bg-soft-white w-11/12 p-8 pt-14 md:top-[-500px] md:w-3/4 md:right-0 md:h-[500px] md:pt-[175px] md:p-12 lg:w-1/2 lg:right-24 lg:px-24 lg:h-[350px] lg:mt-[200px] lg:pt-20 xl:h-[500px] xl:mt-[100px]'>
            <h1 className='hidden md:block text-[125px] font-semibold text-very-light-grey absolute top-[-85px] right-24 lg:left-0 lg:text-[150px] lg:top-[-100px] xl:text-[200px] xl:top-[-150px] 2x'>About</h1>
            <div className='hidden md:block border-t-2 border-light-grey w-20 absolute top-[75px] lg:hidden'></div>
            <h1 className='text-6xl font-bold pb-6 text-very-dark-blue lg:text-4xl xl:text-6xl 2xl:w-1/2'>Your team of professionals</h1>
            <p className='text-lg md:w-11/12 lg:text-sm xl:text-lg xl:w-1/2'>Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.</p>
          </div>
        </div>
      
        
      <div className='w-10/12 mx-auto pb-24 md:w-3/4 lg:flex 2xl:w-1/2'>
        <div className='lg:w-1/2 lg:pr-10'>
        <div className='border-t-2 border-light-grey w-20 pb-14'></div>
          <h1 className='text-5xl font-bold pb-4 md:text-6xl md:w-1/2'>Our Heritage</h1>
          <p className='text-lg'>Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.
          <br/><br/>
          Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs. 
          <br/><br/>
          Our small team of world-class professionals provides input on every project.</p>
        </div>
        <img src={heritageLarge} alt="about us" className='hidden lg:block w-full brightness-50 lg:w-1/2' />
      </div>

      <div className=' w-10/12 mx-auto pb-24 md:w-3/4 xl:flex xl:justify-between 2xl:w-1/2'>
        <h1 className='text-6xl font-bold pb-14 xl:w-1/4'>The Leaders</h1>
        <div className='md:flex md:flex-wrap xl:w-1/2'>
          <div className='pb-16 md:w-1/2 md:pl-3'>
            <img className='Jake Richards' src={avatarJakeLarge}/>
            <h1 className='text-3xl font-bold pt-4'>Jake Richards</h1>
            <p>Cheif Architect</p>
          </div>

          <div className='pb-16 md:w-1/2 md:pl-3'>
            <img className='Thompson Smith' src={avatarThompsonLarge}/>
            <h1 className='text-3xl font-bold pt-4'>Thompson Smith</h1>
            <p>Head of Finance</p>
          </div>

          <div className='pb-16 md:w-1/2 md:pl-3'>
            <img className='Jackson Rourke' src={avatarJacksonLarge}/>
            <h1 className='text-3xl font-bold pt-4'>Jackson Rourke</h1>
            <p>Lead Designer</p>
          </div>

          <div className='pb-16 md:w-1/2 md:pl-3'>
            <img className='Maria Simpson' src={avatarMariaLarge}/>
            <h1 className='text-3xl font-bold pt-4'>Maria Simpson</h1>
            <p>Senior Architect</p>
          </div>
        </div>
      </div>
    </div>
  )
  
}

export default About