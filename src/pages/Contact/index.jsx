import {
    contactHeroSmall,
    contactHeroMedium,
    contactHeroLarge ,
    contactMapSmall,
    contactMapMedium ,
    contactMapLarge 
} from '../../assets'
const Contact = () => {
  return (
    <div className='min-h-max'>
      <div className='hidden md:flex absolute rotate-90 tracking-[0.15em] top-[130px] left-[-95px] text-light-grey justify-between w-[300px] lg:left-[-100px] xl:left-[-50px] 2xl:left-[200px]'><span className='tracking-[-2.5px]'>--------------------------------</span>C O N T A C T &nbsp; &nbsp; U S</div>
        
        <div className='md:w-3/4 mx-auto 2xl:w-1/2'>
          <picture className=''>
            <source media="(min-width:1024px)" srcSet={contactHeroLarge} />
            <source media="(min-width:768px)" srcSet={contactHeroMedium} />
            <img src={contactHeroSmall} alt="about us" className='w-full brightness-50 lg:w-1/2' />
          </picture>
        </div>

        <div className='relative h-[550px]'>
          <div className='absolute top-[-50px] bg-soft-white w-11/12 p-8 pt-14 md:top-[-500px] md:w-3/4 md:right-0 md:h-[500px] md:pt-[175px] md:p-12 lg:w-1/2 lg:right-24 lg:px-24 lg:h-[350px] lg:mt-[200px] lg:pt-20 xl:h-[500px] xl:mt-[100px]'>
            <h1 className='hidden md:block text-[125px] font-semibold text-very-light-grey absolute top-[-85px] right-24 lg:left-0 lg:text-[150px] lg:top-[-100px] xl:text-[200px] xl:top-[-150px] 2x'>About</h1>
            <div className='hidden md:block border-t-2 border-light-grey w-20 absolute top-[75px] lg:hidden'></div>
            <h1 className='text-6xl font-bold pb-6 text-very-dark-blue lg:text-4xl xl:text-6xl 2xl:w-1/2'>Tell us about your project</h1>
            <p className='text-lg md:w-11/12 lg:text-sm xl:text-lg xl:w-1/2'>We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!</p>
          </div>
        </div>

        <div className='w-10/12 mx-auto pb-24 md:w-3/4 lg:flex 2xl:w-1/2'>
        
        <div className='lg:w-1/2 lg:pr-10'>
          <div className='border-t-2 border-light-grey w-20 pb-14'></div>
          <h1 className='text-5xl font-bold pb-12 md:text-6xl md:w-1/2'>Contact Details</h1>
          <div>
            <h1 className='text-lg font-bold pb-4'>Main Office</h1>
            <p className='text-lg'>
            Mail : archtwo@mail.com
            <br/>
            Address : 1892 Chenoweth Dr TN
            <br/>
            Phone : 123-456-3451</p>
          </div>
          <div className='mt-12'>
            <h1 className='text-lg font-bold pb-4'>Main Office</h1>
            <p className='text-lg'>
            Mail : archtwo@mail.com
            <br/>
            Address : 1892 Chenoweth Dr TN
            <br/>
            Phone : 123-456-3451</p>
          </div>
        </div>
        
      </div>
        <div>
          <picture>
            <source media="(min-width:1024px)" srcSet={contactMapLarge} />
            <source media="(min-width:768px)" srcSet={contactMapMedium} />
            <img src={contactMapSmall} alt="about us" className='w-full mx-auto'/>
          </picture>
        </div>

        <div className='w-11/12 mx-auto py-14'>
          <h1 className='font-bold text-5xl w-1/2'>Connect With Us</h1>
          <div className='text-light-grey leading-10'>Name</div>
          <div>Email</div>
          <div>Message</div>
        </div>
    </div>
  )
}

export default Contact