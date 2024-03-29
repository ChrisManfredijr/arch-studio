import {useState,useEffect} from 'react';

import {
    port228bSmall, 
    portDelSolSmall,
    portEdelweissSmall,
    portEeboxSmall,
    portFederalSmall,
    portHypersSmall,
    portNetcrySmall,
    portParamourSmall,
    portPrototypeSmall,
    portSeraphSmall,
    portSxivSmall,
    portTrinitySmall,
   
    port228bMedium,
    portDelSolMedium,
    portEdelweissMedium,
    portEeboxMedium,
    portFederalMedium,
    portHypersMedium,
    portNetcryMedium,
    portParamourMedium,
    portPrototypeMedium,
    portSeraphMedium,
    portSxivMedium,
    portTrinityMedium,
   
    port228bLarge,
    portDelSolLarge,
    portEdelweissLarge,
    portEeboxLarge,
    portFederalLarge,
    portHypersLarge,
    portNetcryLarge,
    portPrototypeLarge,
    portSeraphLarge,
    portSxivLarge,
    portTrinityLarge,
    portParamourLarge,
} from '../../assets';

import Bookmark from '../../components/Bookmark';

const Portfolio = () => {
  
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
    setVisible(true);

    }, 200)
    return () => {
      setVisible(false), clearTimeout(timer);
    };
  }, []);

  const portfolioArray = [
    {
      name:'Seraph Station',
      date: 'September 2019',
      mobile: portSeraphSmall,
      tablet: portSeraphMedium,
      desktop: portSeraphLarge,
    },
    {
      name:'Eebox Building',
      date: 'August 2017',
      mobile: portEeboxSmall,
      tablet: portEeboxMedium,
      desktop: portEeboxLarge,
    },
    {
      name:' Federal II Tower',
      date: 'March 2017',
      mobile: portFederalSmall,
      tablet: portFederalMedium,
      desktop: portFederalLarge,
    },
    {
      name:'Project Del Sol',
      date: 'January 2016',
      mobile: portDelSolSmall,
      tablet: portDelSolMedium,
      desktop: portDelSolLarge,
    },
    {
      name:'Le Prototype',
      date: 'October 2015',
      mobile: portPrototypeSmall,
      tablet: portPrototypeMedium,
      desktop: portPrototypeLarge,
    },
    {
      name:'228B Tower',
      date: 'April 2015',
      mobile: port228bSmall,
      tablet: port228bMedium,
      desktop: port228bLarge,
    },
    {
      name:'Grand Edelweiss Hotel',
      date: 'December 2013',
      mobile: portEdelweissSmall,
      tablet: portEdelweissMedium,
      desktop: portEdelweissLarge,
    },
    {
      name:'Netcry Tower',
      date: 'August 2012',
      mobile: portNetcrySmall,
      tablet: portNetcryMedium,
      desktop: portNetcryLarge,
    },
    {
      name:'Hypers',
      date: 'January 2012',
      mobile: portHypersSmall,
      tablet: portHypersMedium,
      desktop: portHypersLarge,
    },
    {
      name:'SXIV Tower',
      date: 'March 2011',
      mobile: portSxivSmall,
      tablet: portSxivMedium,
      desktop: portSxivLarge,
    },
    {
      name:'Trinity Bank Tower',
      date: 'September 2010',
      mobile: portTrinitySmall,
      tablet: portTrinityMedium,
      desktop: portTrinityLarge,
    },
    {
      name:'Project Paramour',
      date: 'Febuary 2009',
      mobile: portParamourSmall,
      tablet: portParamourMedium,
      desktop: portParamourLarge,
    },
  ]
  
  return (
    <div className={`transition-opacity duration-1000 ${visible ? 'opacity-100 min-h-screen' : 'opacity-0 min-h-screen'}`}>
      <Bookmark text="P O R T F O L I O"/>
      <div className='flex flex-col py-24 relative md:py-8 lg:flex-row lg:flex-wrap lg:w-3/4 lg:mx-auto 2xl:w-1/2'>
        {portfolioArray.map((project, index) => {
          return (
            <div key={index} className='relative w-4/5 mx-auto pb-8 lg:w-1/3 lg:p-3'>
              <picture className="">
                <source media="(min-width:1024px)" srcSet={project.desktop} />
                <source media="(min-width:640px)" srcSet={project.tablet} />
                <img src={project.mobile} alt={project.name} className='w-full brightness-75' />
              </picture>
              <div className='absolute bottom-8 p-6 text-soft-white'>
                <h1 className="text-4xl font-bold">{project.name}</h1>
                <h2 className="text-xl">{project.date}</h2>
              </div>
            </div>
        )
      })}

      </div>
    </div>
  )
}

export default Portfolio