import React from 'react'

const Bookmark = ({text}) => {
  return (
    <div className='hidden md:flex absolute rotate-90 tracking-[0.15em] top-20 left-[-75px] text-light-grey justify-between w-[250px] lg:left-[-55px] xl:left-[-20px] 2xl:left-[300px]'><span className='tracking-[-2.5px]'>----------------------------------</span> {text}</div>
  )
}

export default Bookmark