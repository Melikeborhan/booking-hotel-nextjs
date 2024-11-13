import { Button } from '@/components/ui/button'
import { apiImagesUrl } from '@/constans'
import { Room } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


interface RoomItemProps {
  room: Room
}

const RoomItem = ({room}:RoomItemProps) => {
  return (
    <>
    <div className='flex flex-col bgone shadow-sm shadow-yellow-300 rounded-xl owerflow-hidden'>
    <Image
    src={`${apiImagesUrl}/${room.collectionId}/${room.id}/${room.images[0]}`} 
    alt=''
    width={1920}
    height={1080}
    className='h-60 w-full object-cover mb-4 rounded-t-xl'
    
    />
    <div className='container '>
    <div className='mb-3'>
        <p className='font-semibold owerflow-visible '>{room.room_name}</p>
    </div>
    <div className='mb-4'>
        <p>
          {room.type}
        </p>
    </div>
    
    </div>
    <div className='flex justify-between items-center ml-4 mb-4 font-bold'>
        <span className='text-red-600'>{room.price}/Turkey </span>
        <Link href={`/rooms/${room.id}`}>
       <Button className='mr-4 rounded-xl' variant={'mybutton'}>Reservation</Button>
        </Link>
    </div>
  </div>
  </>
  )
}

export default RoomItem