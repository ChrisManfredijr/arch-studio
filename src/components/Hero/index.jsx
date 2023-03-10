import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import {
    heroParamourSmall,
    heroParamourMedium,
    heroParamourLarge,
    heroSeraphSmall,
    heroSeraphMedium,
    heroSeraphLarge,
    heroFederalSmall,
    heroFederalMedium,
    heroFederalLarge,
    heroTrinitySmall,
    heroTrinityMedium,
    heroTrinityLarge,
   
  } from '../../assets';
  
import Button from '../../components/Button';

const Hero = () => {
    
    //carousel array
    const carousel = [
        {   
            title: 'Project Paramour',
            text: "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
            heroSmall: heroParamourSmall,
            heroMedium: heroParamourMedium,
            heroLarge: heroParamourLarge,
        },
        {
            title: 'Seraph Station',
            heroSmall: heroSeraphSmall,
            heroMedium: heroSeraphMedium,
            heroLarge: heroSeraphLarge,
            text: "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations."
        },
        {
            title: 'Federal II Tower',
            heroSmall: heroFederalSmall,
            heroMedium: heroFederalMedium,
            heroLarge: heroFederalLarge,
            text: "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches."
        },
        {
            title: 'Trinity Bank Tower',
            heroSmall: heroTrinitySmall,
            heroMedium: heroTrinityMedium,
            heroLarge: heroTrinityLarge,
            text: "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives."
        }
    ]
    const [currentIndex, setCurrentIndex] = useState(0);
    
    //sets the current index of carousel, if at end of array, loops to begining 
    const carouselScroll = () => {
        if(currentIndex === carousel.length - 1){
            return setCurrentIndex(0);
        }
        return setCurrentIndex(index => index + 1);
    }

    //changes image every 7 seconds
    useEffect(()=> {
        const interval = setInterval(()=>{carouselScroll()}, 7000);
        return () => clearInterval(interval);
    
    },)

    return (
        <div className='w-full relative md:w-3/4 md:mx-auto 2xl:w-1/2'>
            
            <div className="w-full h-full flex flex-col absolute top-0 left-0 justify-center items-center z-10">
                <div className='w-10/12 h-80 flex flex-col justify-between '>
                    <div className='lg:w-1/2'>
                        <h1 className='text-6xl text-soft-white font-semibold md:font-bold md:text-[60px]'>{carousel[currentIndex].title}</h1>
                        <p className='text-soft-white'>{carousel[currentIndex].text}</p>
                    </div>

                    <a as={Link} href="/Portfolio">
                        <Button text="See Our Portfolio" />
                    </a>
                </div>
            </div>

            <picture className=''>
                <source media="(min-width:1024px)" srcSet={carousel[currentIndex].heroLarge} />
                <source media="(min-width:640px)" srcSet={carousel[currentIndex].heroMedium} />
                <img src={carousel[currentIndex].heroSmall} alt="Paramour Art Museum" className='w-full brightness-50'/>
            </picture>
            
            {/*Large media screen carousel buttons*/}
            <div className='hidden lg:flex absolute bottom-[-1px] left-[-80px] bg-soft-white z-10'>
                <div onClick={() => setCurrentIndex(0)} className={`h-20 w-20 text-center text-xl leading-[80px] hover:bg-very-light-grey cursor-pointer ${currentIndex === 0 ? "bg-very-dark-blue text-soft-white  hover:bg-very-dark-blue cursor-default":""}`}>01</div>
                <div onClick={() => setCurrentIndex(1)} className={`h-20 w-20 text-center text-xl leading-[80px] hover:bg-very-light-grey cursor-pointer ${currentIndex === 1 ? "bg-very-dark-blue text-soft-white  hover:bg-very-dark-blue cursor-default":""}`}>02</div>
                <div onClick={() => setCurrentIndex(2)} className={`h-20 w-20 text-center text-xl leading-[80px] hover:bg-very-light-grey cursor-pointer ${currentIndex === 2 ? "bg-very-dark-blue text-soft-white  hover:bg-very-dark-blue cursor-default":""}`}>03</div>
                <div onClick={() => setCurrentIndex(3)} className={`h-20 w-20 text-center text-xl leading-[80px] hover:bg-very-light-grey cursor-pointer ${currentIndex === 3 ? "bg-very-dark-blue text-soft-white  hover:bg-very-dark-blue cursor-default":""}`}>04</div>
            </div>

        </div>
    )
}

export default Hero