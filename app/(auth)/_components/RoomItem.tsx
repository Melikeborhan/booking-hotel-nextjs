import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const RoomItem = () => {
  return (
    <>
    <div className='flex flex-col bgone shadow-sm shadow-yellow-300 rounded-xl owerflow-hidden'>
    <Image
    src={"https://known-find.pockethost.io/api/files/z4l2susq887dgxe/ef9sjojzggylxof/magusa_tatlisu_satilik_daire_202307001184090003758054_fbmmlh6_iFLUOD9mIw.jpg?token="}
    alt=''
    width={1920}
    height={1080}
    className='h-60 w-full object-cover mb-4 rounded-t-xl'
    priority={true}
    />
    <div className='container '>
    <div className='mb-3'>
        <p className='font-semibold owerflow-visible '>hsajkdhkasdksadhdjsahksdsdkhbghksabjdhbajdhbjh jsjdhjkldsahdjksahıas asdjhjksadhkds</p>
    </div>
    <div className='mb-4'>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quos delectus, architecto minima quo et cum, libero fugiat dicta quam a repellendus quaerat eligendi aliquid doloribus reprehenderit, sequi voluptatum similique.
        </p>
    </div>
    
    </div>
    <div className='flex justify-between items-center ml-4 mb-4 font-bold'>
        <span className='text-red-600'> $50/Turkey </span>
       <Button className='mr-4 rounded-xl' variant={'mybutton'}>Rezervation</Button>
    </div>
  </div>
  </>
  )
}

export default RoomItem