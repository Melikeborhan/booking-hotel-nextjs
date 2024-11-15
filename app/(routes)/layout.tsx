'use client'
import React, { useEffect, useState } from 'react';
import Navbar from '../(auth)/_components/Navbar';
import Footer from '../(auth)/_components/Footer';
import { Hotel } from '@/types/types';
import { getHotel } from '../actions/getHotel';
import { usePathname } from 'next/navigation';
import PocketBase from 'pocketbase';
import Image from 'next/image';

const pb = new PocketBase('https://known-find.pockethost.io');

interface RouterLayoutProps {
  children: React.ReactNode;
}

const RooterLayout = ({ children }: RouterLayoutProps) => {
  const [hotelInfo, setHotelInfo] = useState<Hotel | null>(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const datahotel: Hotel = await getHotel();
        setHotelInfo(datahotel);
        console.log(datahotel);
      } catch (error) {
        console.error('Error getting hotel info:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchHotel();
  }, []);

  const stripHtmlTags = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };


  return (
    <>
      <Navbar />
      <div className='min-h-screen'>
        {pathname === "/about" && hotelInfo && (
          <div className='pt-52 container '>
            <div className='dark:bg-gray-900 bg-opacity-75 text-yellow-400 text-2xl  hover:text-yellow-500 bg-gray-900 p-10 rounded-lg shadow-md mt-10 container rounded-xl shadow-yellow-400'>
              <h1 className='text-3xl font-bold mb-4 text-center  text-yellow-500 text-2xl  hover:text-white'>ABOUT US</h1>
              <p className='text-gray-700 mb-4 text-white text-2xl  hover:text-yellow-500'>{stripHtmlTags(hotelInfo.summary)}</p>
           
              <p className='text-gray-700 mb-4  text-white text-2xl  hover:text-yellow-500'>{stripHtmlTags(hotelInfo.description)}</p>
              
            </div>
          </div>
        )}
        {pathname === "/contact" && hotelInfo && (
  <div className="pt-52 container">
    <div className="dark:bg-gray-900 bg-gray-900 bg-opacity-75 p-10 rounded-lg shadow-md rounded-xl mt-10 container shadow-yellow-400">
      <div className="flex flex-col md:flex-row md:justify-between text-center">
        {/* Konum */}
        <div className="mb-6 md:mb-0 md:w-1/2 md:pr-4">
          <h3 className="text-yellow-400 hover:text-white text-3xl font-semibold mb-4">Konum</h3>
          <p className="text-yellow-400 text-2xl  hover:text-white">{hotelInfo.location}</p>
        </div>
        {/* İletişim */}
        <div className="md:w-1/2 md:pl-4">
          <h3 className="text-3xl font-semibold mb-4 text-yellow-400  hover:text-white ">İletişim</h3>
          <p className="text-yellow-400 text-2xl hover:text-white mb-2">{hotelInfo.contact_phone}</p>
          <p className="text-yellow-400 text-2xl hover:text-white">{hotelInfo.contact_email}</p>
        </div>
      </div>
    </div>
  </div>
)}

        {children}
      </div>
      <Footer data={hotelInfo} loading={loading} />
    </>
  );
}

export default RooterLayout;
