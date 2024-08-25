
import Image from 'next/image'
import React from 'react'
import { ModeToggle } from '@/components/ModeToggle'
import UserToggle from './UserToggle'
import MobileMenu from './MobileMenu'
import { NavMenu } from '@/constans'
import NavItem from './NavItem'

const Navbar = () => {
  return (
    <>
    <div>
      <div className='container'>
        <div className='px-4 py-6 flex flex-row items-center'>
          <div className='w-20 py-4 px-3 rounded-xl '>
            <Image src='/hotel-logo.jpg' 
            alt='logo'
            width={500}
            height={500}
            className='w-full'/>
          </div>
          <div className='flex-row lg:flex hidden items-center gap-9 ml-auto'>
           
           {NavMenu.map((item,index)=> (
            <NavItem key={index} title={item.title}  url = {item.url}  />
           ))}



          </div>
          <div className='flex lg:flex items-center ml-auto gap-10'>
            <UserToggle/>
            <ModeToggle/>

            <div className='lg:hidden flex flex-row items-center ml-auto gap-2'>
              <MobileMenu/>
            </div>

          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar