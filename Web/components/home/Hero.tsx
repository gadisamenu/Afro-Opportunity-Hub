import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div>
      <div className='flex justify-center py-44 w-full bg-no-repeat h-[550px] bg-[url("/home/herobackground.svg")]'>
        <div className='text-5xl font-bold text-gray-200'>Afro Opportunity Hub</div>
      </div>
      <div className='flex flex-col items-center gap-5'>
        <div className='text-transparent bg-gradient-to-r from-blue-900 to-blue-500 bg-clip-text font-bold text-5xl'> Fast. Accurate. Reliable</div>
        <div className='max-w-2xl text-center'>The most powerful finance software that connects with your financial accounts. Track spending and categorize expenses so you can see where your money is going.</div>
        <Link className='text-white px-5 py-3 rounded-lg bg-gradient-to-r from-blue-900 to-blue-500' href=''>Get Started</Link>
      </div>

    </div>
    

  )
}

export default Hero