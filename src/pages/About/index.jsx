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
        <div className='md:w-10/12 mx-auto'>
          <picture className=''>
            <source media="(min-width:1024px)" srcSet={aboutHeroLarge} />
            <source media="(min-width:768px)" srcSet={aboutHeroMedium} />
            <img src={aboutHeroSmall} alt="about us" className='w-full brightness-50' />
          </picture>
        </div>

        <div className='relative h-[350px] '>
          <div className='absolute top-[-50px] bg-soft-white w-11/12 p-8 pt-14 md:top-[-500px] md:w-3/4 md:right-0'>
            <h1 className='text-5xl font-bold pb-6 text-very-dark-blue'>Your team of professionals</h1>
            <p className='text-lg'>Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.</p>
          </div>
        </div>
      
        
      <div className='w-10/12 mx-auto pb-24'>
        <div className='border-t-2 border-light-grey w-20 pb-14 md:hidden'></div>
        <h1 className='text-5xl font-bold pb-4'>Our Heritage</h1>
        <p className='text-lg'>Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.
        <br/><br/>
        Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs. 
        <br/><br/>
        Our small team of world-class professionals provides input on every project.</p>
      </div>

      <div className=' w-10/12 mx-auto pb-24'>
        <h1 className='text-6xl font-bold pb-14'>The Leaders</h1>
        
        <div className='pb-16'>
          <img className='Jake Richards' src={avatarJakeLarge}/>
          <h1 className='text-3xl font-bold pt-4'>Jake Richards</h1>
          <p>Cheif Architect</p>
        </div>

        <div className='pb-16'>
          <img className='Thompson Smith' src={avatarThompsonLarge}/>
          <h1 className='text-3xl font-bold pt-4'>Thompson Smith</h1>
          <p>Head of Finance</p>
        </div>

        <div className='pb-16'>
          <img className='Jackson Rourke' src={avatarJacksonLarge}/>
          <h1 className='text-3xl font-bold pt-4'>Jackson Rourke</h1>
          <p>Lead Designer</p>
        </div>

        <div className='pb-16'>
          <img className='Maria Simpson' src={avatarMariaLarge}/>
          <h1 className='text-3xl font-bold pt-4'>Maria Simpson</h1>
          <p>Senior Architect</p>
        </div>

      </div>
    </div>
  )
}

export default About