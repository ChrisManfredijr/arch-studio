import Hero from '../../components/Hero';

const Home = () => {
  return (
    <div className=''>
      <Hero/>
        <div className='w-10/12 h-full mx-auto my-20'>
        <div className='border-t-4 border-light-grey w-20'></div>
          <h1 className='text-5xl font-bold text-very-dark-blue pt-20 pb-2'>Welcome to Arch Studio</h1>
          <p className='text-dark-grey'>
            <br/>
            We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.
            <br/><br/>
            Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.
            <br/><br/>
            We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.
            <br/><br/>
          </p>
        </div>
    </div>
  )
}

export default Home