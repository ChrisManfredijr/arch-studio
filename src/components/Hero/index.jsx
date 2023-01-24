import {useState, useEffect} from 'react';


//responsive images of the Paramour 
import heroParamourSmall from '../../assets/home/mobile/image-hero-paramour.jpg';
import heroParamourMedium from '../../assets/home/tablet/image-hero-paramour.jpg';
import heroParamourLarge from '../../assets/home/desktop/image-hero-paramour.jpg';

//responsive images of the Seraph Station
import heroSeraphSmall from '../../assets/home/mobile/image-hero-seraph.jpg';
import heroSeraphMedium from '../../assets/home/tablet/image-hero-seraph.jpg';
import heroSeraphLarge from '../../assets/home/desktop/image-hero-seraph.jpg';

//responsive images of Federal II tower
import heroFederalSmall from '../../assets/home/mobile/image-hero-federal.jpg';
import heroFederalMedium from '../../assets/home/tablet/image-hero-federal.jpg';
import heroFederalLarge from '../../assets/home/desktop/image-hero-federal.jpg';

//responsive images of Trinity Bank Tower
import heroTrinitySmall from '../../assets/home/mobile/image-hero-trinity.jpg';
import heroTrinityMedium from '../../assets/home/tablet/image-hero-trinity.jpg';
import heroTrinityLarge from '../../assets/home/desktop/image-hero-trinity.jpg';

import Button from '../../components/Button';

const Hero = () => {
    
    
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
    
    const carouselScroll = () => {
        if(currentIndex === carousel.length- 1){
            return setCurrentIndex(0);
        }
        return setCurrentIndex(index => index + 1);
    }
    useEffect(()=> {
        const interval = setInterval(()=>{carouselScroll()}, 7000)
        return () => clearInterval(interval)
    })

    return (
        <div className='w-full relative'>
            <div className="w-full h-full flex flex-col absolute top-0 left-0 justify-center items-center">
                <div className='w-10/12 h-80 flex flex-col justify-between'>
                    <div>
                        <h1 className='text-6xl text-soft-white font-semibold'>{carousel[currentIndex].title}</h1>
                        <p className='text-soft-white'>{carousel[currentIndex].text}</p>
                    </div>
                    <Button text="See Our Portfolio" />
                </div>
            </div>

            <picture className=''>
                <source media="(min-width:900px)" srcSet={carousel[currentIndex].heroLarge} />
                <source media="(min-width:600px)" srcSet={carousel[currentIndex].heroMedium} />
                <img src={carousel[currentIndex].heroSmall} alt="Paramour Art Museum" className='w-full'/>
            </picture>

        </div>
    )
}

export default Hero