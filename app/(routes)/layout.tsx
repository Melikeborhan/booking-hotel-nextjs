'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '../(auth)/_components/Navbar'
import Footer from '../(auth)/_components/Footer'
import { Hotel } from '@/types/types'
import { getHotel } from '../actions/getHotel'
import { usePathname } from 'next/navigation'

interface RouterLayoutProps {
    children: React.ReactNode
    }
const RooterLayout = ({children}:RouterLayoutProps) => {

  //burada koselı parantez acmama sebebımız dızı seklınde degıl sadece json seklınde olacak

  const [hotelInfo , setHotelInfo] = useState<Hotel | null>([]);;

  const [loading,setLoading] = useState(true)

  const pathname = usePathname();


  useEffect(()=>{
    async function fetchHotel(){
      try{
        const datahotel : Hotel = await getHotel();//tek kayıt olduğu için Hotel yanına [] yapılmadı
        setHotelInfo(datahotel)
        console.log(datahotel)

      }catch (error){
        console.error('Error getting hotel info:' ,error)

      }
      finally{
        setLoading(false)
      }
    }
    fetchHotel()
  },[])


  return (
    <>
        <Navbar/>
        <div className='min-h-screen'>
          {pathname === "/about" && hotelInfo && ( 
            <div className='pt-48 container'
            dangerouslySetInnerHTML={{__html:hotelInfo.description}} //this code is  for html tags it can be displayed 
            >
                

              </div>
          )}
        {children}
        </div>
        
      <Footer data={hotelInfo} loading={loading}/>
    </>
  )
}

export default RooterLayout