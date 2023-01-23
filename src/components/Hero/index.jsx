import heroParamourSmall from '../../assets/home/mobile/image-hero-paramour.jpg';
import heroParamourMedium from '../../assets/home/tablet/image-hero-paramour.jpg';
import heroParamourLarge from '../../assets/home/desktop/image-hero-paramour.jpg';

import Button from '../../components/Button';

const Hero = () => {
  return (
    <div>
        <picture>
            <source media="(min-width:900px)" srcSet={heroParamourLarge}/>
            <source media="(min-width:600px)" srcSet={heroParamourMedium}/>
            <img src={heroParamourSmall} alt="" className='w-full'/>
        </picture>
        <Button/>
    </div>  
  )
}

export default Hero