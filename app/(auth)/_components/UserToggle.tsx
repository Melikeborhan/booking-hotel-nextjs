"use client"
import { User, UserIcon } from 'lucide-react'
import Link from 'next/link'

import React, { useEffect, useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation'
import { Toast } from '@radix-ui/react-toast'

const UserToggle = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(()=>{
    const fetchUser = async()=>{
      const authData = localStorage.getItem("pocketbase_auth");
      if(authData){
        const {token, model} = JSON.parse(authData);
        setUser(model)
      }
    }
    fetchUser();
  },[])
  return (
    <div>
      {user ? (
        <div >
          <DropdownMenu>
          <DropdownMenuTrigger className='flex text-white text-xs justify-center items-center'>
            <UserIcon className='text-white dark:text-white'/>  
          </DropdownMenuTrigger>
          <DropdownMenuContent className='dark:bg-black bg-white'>
              <DropdownMenuLabel className='text-yellow-500 text-xl font-bold'>{user.username}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              
              <DropdownMenuItem className='cursor-pointer gap-2' onClick={()=>{localStorage.removeItem("pocketbase_auth");setUser(null);router.refresh();router.push("/")}}>
                Logout
              </DropdownMenuItem>
              <Link href="/my-rezervation">
              <DropdownMenuItem>My Rezervation</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

      ):(
        <Link href='/auth/login' >
          <UserIcon className='text-white dark:text-white'/>
      </Link>
      
    

      )}
   </div>
    
    )
}

export default UserToggle