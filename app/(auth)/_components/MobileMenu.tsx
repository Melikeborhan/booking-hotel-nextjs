import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { MenuIcon } from 'lucide-react'
  

const MobileMenu = () => {
  return (
    <>
    <Sheet>
  <SheetTrigger>
    <MenuIcon className='text-white dark:text-white'/>
  </SheetTrigger>
  <SheetContent className='bgone'>
    <SheetHeader>
      <SheetDescription>
        
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
</>
  )
}

export default MobileMenu