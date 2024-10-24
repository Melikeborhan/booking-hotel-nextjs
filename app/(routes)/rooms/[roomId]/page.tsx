import { getRoomDetail } from '@/app/actions/getRooms';
import { log } from 'console';
import React from 'react'

interface RoomPageDetailProps {
    params: {
     roomId: string;

    }
}

const RoomPageDetail = async({params}:RoomPageDetailProps) => {
  const room = await getRoomDetail(params.roomId)
  console.log(room);
  

  return (
    <div className='pt-44'>RoomPageDetail
    {params.roomId}
    
    
    </div>
  )
}

export default RoomPageDetail