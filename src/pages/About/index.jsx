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

const About = () => {
  return (
    <div className='min-h-max'> 
    <div className='hidden md:flex absolute rotate-90 tracking-[0.15em] top-[130px] left-[-95px] text-light-grey justify-between w-[300px] lg:left-[-100px] xl:left-[-50px] 2xl:left-[200px]'><span className='tracking-[-2.5px]'>--------------------------------</span>A B O U T &nbsp; &nbsp; U S</div>
        <div className='md:w-3/4 mx-auto'>
          <picture className=''>
            <source media="(min-width:1024px)" srcSet={aboutHeroLarge} />
            <source media="(min-width:768px)" srcSet={aboutHeroMedium} />
            <img src={aboutHeroSmall} alt="about us" className='w-full brightness-50' />
          </picture>
        </div>

        <div className='relative h-[150px]'>
          <div className='absolute top-[-50px] bg-soft-white w-11/12 p-8 pt-14 md:top-[-500px] md:w-3/4 md:right-0 md:h-[500px] md:pt-[175px] md:p-12'>
            <h1 className='hidden md:block text-[125px] font-semibold text-very-light-grey absolute top-[-85px] right-24'>About</h1>
            <div className='hidden md:block border-t-2 border-light-grey w-20 absolute top-[75px]'></div>
            <h1 className='text-6xl font-bold pb-6 text-very-dark-blue'>Your team of professionals</h1>
            <p className='text-lg md:w-11/12'>Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.</p>
          </div>
        </div>
      
        
      <div className='w-10/12 mx-auto pb-24 md:w-3/4'>
        <div className='border-t-2 border-light-grey w-20 pb-14'></div>
        <h1 className='text-5xl font-bold pb-4 md:text-6xl md:w-1/2'>Our Heritage</h1>
        <p className='text-lg'>Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.
        <br/><br/>
        Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs. 
        <br/><br/>
        Our small team of world-class professionals provides input on every project.</p>
      </div>

      <div className=' w-10/12 mx-auto pb-24 md:w-3/4'>
        <h1 className='text-6xl font-bold pb-14'>The Leaders</h1>
        <div className='md:flex md:flex-wrap'>
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