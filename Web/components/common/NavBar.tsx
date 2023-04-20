import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {}

const NavBar = (props: Props) => {
  const route = useRouter()
  return (
    <div className='flex justify-around items-center gap-5 mx-5 my-5'>
      <Link href='/' className='flex gap-5 items-center'>
          <Image src='/common/logo.svg' width={50} height={50} alt='Afro Opportunities Logo' />
          <div className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-950 to-blue-400'>Afro Opportunity Hub</div>
        
      </Link>
        <Link className={`ml-auto ${route.pathname == '/' ? 'bg-gradient-to-r from-blue-900 to-blue-500 px-5 py-2 text-white rounded-3xl':''}`} href='/'>Home</Link>
        <Link className={`${route.pathname == '/opportunities' ? 'bg-gradient-to-r from-blue-900 to-blue-500 px-5 py-2 text-white rounded-3xl':''}`} href='/myopportunities'>Opportunities</Link>
        <Link className='px-5 py-2 rounded-lg' href='/login'>Login</Link>
        <Link className='px-5 py-2 rounded-lg bg-gradient-to-r from-blue-900 to-blue-500 text-white' href='/register'>Register</Link>
    </div>
  )
}

export default NavBar