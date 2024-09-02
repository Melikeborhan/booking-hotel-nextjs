import React from 'react'
import Navbar from '../(auth)/_components/Navbar'
import Footer from '../(auth)/_components/Footer'

interface RouterLayoutProps {
    children: React.ReactNode
    }
const RooterLayout = ({children}:RouterLayoutProps) => {
  return (
    <>
        <Navbar/>
        <div className='min-h-screen'>
        {children}
        </div>
        
      <Footer/>
    </>
  )
}

export default RooterLayout