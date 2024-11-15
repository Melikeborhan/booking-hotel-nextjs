'use client'
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const ContactPage = () => {

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
    <div></div>
  )
}

export default ContactPage