import React, { ReactNode } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
type Props = {
    children: ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <div>
        <NavBar />
        <main>{children}</main>
        <Footer />
    </div>
  )
}

export default Layout