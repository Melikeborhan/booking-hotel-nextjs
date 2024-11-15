import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2Icon, MailIcon, NetworkIcon, PhoneIcon, Rotate3DIcon } from 'lucide-react';
import { Hotel } from '@/types/types';

interface FooterProps {
  data: Hotel;
  loading: boolean;
}

const Footer = ({ data, loading }: FooterProps) => {
  if (loading || (!loading && data.length === 0)) {
    return (
      <div className='relative text-white'>
        <div className='h-[32rem] lg:h-[44rem] w-full'>
          <Skeleton className='h-full w-full bg-slate-600' />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className='relative text-white'>
        <div className='z-0 absolute inset-0'>
          <div className='w-full h-full bg-cover bg-center' style={{ backgroundImage: 'url(/slider/1.jpg)' }}></div>
          <div className='absolute inset-0 bg-black opacity-75'></div>
        </div>
        <div className='z-20 relative'>
          <div className='container mx-auto pt-12 pb-16 px-4'>
            <div className='text-center mb-10'>
              <h2 className='text-3xl font-bold '>Contact Us</h2>
              <p className='text-gray-400 mt-4'>Size huzur ve konforun buluştuğu bir deneyim sunuyoruz..</p>
            </div>
            
            <div className='grid grid-cols-2 md:grid-cols-2  ml-64 '>
              {/* Column 1: Rooms */}
              <div>
                <h3 className='text-2xl font-semibold mb-4 '>Rooms</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-yellow-400 text-lg">Deluxe Suite with Sea View</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-yellow-400 text-lg">Presidential Suite</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-yellow-400 text-lg">Garden Suite</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-yellow-400 text-lg">Standard Double Room</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-yellow-400 text-lg">Executive Suite</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-yellow-400 text-lg">Family Room</a></li>
                </ul>
              </div>

              {/* Column 2: Contact */}
              <div>
                <h3 className='text-2xl font-semibold mb-4'>Contact</h3>
                <p className='text-gray-300 space-y-2 text-lg'>
                  <span className='block flex items-center hover:text-yellow-400 '><Rotate3DIcon className='mr-2' /> {data.location}</span>
                  <span className='block flex items-center hover:text-yellow-400 '><PhoneIcon size={20} className='mr-2' /> {data.contact_phone}</span>
                  <span className='block flex items-center hover:text-yellow-400'><MailIcon className='mr-2' /> {data.contact_email}</span>
                </p>
              </div>
            </div>

            {/* Email Input Section */}
            <div className='mt-8 flex justify-center'>
              <div className='relative max-w-lg w-full mt-10'>
                <Input
                  placeholder='Your Email Address'
                  className='w-full rounded-xl pr-20'
                />
                <Button
                  variant="mybutton"
                  className='absolute right-0 w-28 top-1/2 transform -translate-y-1/2 rounded-xl'
                >
                  Send
                </Button>
              </div>
            </div>

            {/* Footer Note */}
            <div className='text-center mt-8'>
              <p className="text-gray-400">©with YouTube Efe Görkem Ümit</p>
              <p className="text-gray-400">Designed By <span className="text-yellow-500">Efe Görkem Ümit</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
