import React from 'react'

interface RouterLayoutProps {
    children: React.ReactNode
    }
const RooterLayout = ({children}:RouterLayoutProps) => {
  return (
    <>
        Navbar
        <div className='min-h-screen'>
        {children}
        </div>
       
        Footer
    </>
  )
}

export default RooterLayout