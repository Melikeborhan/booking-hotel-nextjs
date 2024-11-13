'use client';
import { Skeleton } from '@/components/ui/skeleton';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        const response = await fetch('https://your-pocketbase-url/api/collections/hotel/records');
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching hotel data:', error);
        setLoading(false);
      }
    };

    fetchHotelData();
  }, []);

  if (loading) {
    return (
      <div className='relative text-white'>
        <div className='h-[32rem] lg:h-[44rem] w-full'>
          <Skeleton className='h-full w-full bg-slate-600' />
        </div>
      </div>
    );
  }

  if (!data) {
    return <div className='text-center text-white'>No data available</div>;
  }

  return (
    <div className='bg-gray-900 text-white py-16'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
          {/* Column 1: Hotel Information */}
          <div>
            <div className='w-24 mb-4'>
              <Image
                src={data.images && data.images[0] ? data.images[0] : '/default-hotel.jpg'}
                alt='Hotel Image'
                width={500}
                height={500}
                className='w-full'
              />
            </div>
            <h3 className='text-2xl font-bold mb-2'>{data.name}</h3>
            <p className='text-gray-400 mb-4'>{data.summary}</p>
            <p className='flex items-center mb-2'>
              <MapPinIcon className='mr-2' /> {data.location}
            </p>
            <p className='flex items-center mb-2'>
              <PhoneIcon className='mr-2' /> {data.contact_phone}
            </p>
            <p className='flex items-center'>
              <MailIcon className='mr-2' /> {data.contact_email}
            </p>
          </div>

          {/* Additional columns can be added here */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
