'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '../(auth)/_components/Navbar'
import Footer from '../(auth)/_components/Footer'
import { Hotel } from '@/types/types'
import { getHotel } from '../actions/getHotel'

interface RouterLayoutProps {
    children: React.ReactNode
    }
const RooterLayout = ({children}:RouterLayoutProps) => {

  //burada koselı parantez acmama sebebımız dızı seklınde degıl sadece json seklınde olacak

  const [hotelInfo , setHotelInfo] = useState<Hotel | null>([]);;

  const [loading,setLoading] = useState(true)


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
        {children}
        </div>
        
      <Footer data={hotelInfo} loading={loading}/>
    </>
  )
}

export default RooterLayout