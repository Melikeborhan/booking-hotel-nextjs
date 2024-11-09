'use client'
import { pb } from '@/lib/pocketbase';
import { formatDate } from 'date-fns';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { format } from 'path';
import React, { useEffect, useState } from 'react'


const MyReservationPage = () => {
    const [user, setUser] = useState(null);
    const router = useRouter();
    const [isUserLoaded,setIsUserLoaded] = useState(false);
    const [reservations,setReservations] = useState<Reservation[]>([]);//TODO:burada [] acma nedenımız ılk baslangıcında bos olmasıdır ve ıcınde bırden fazla rezervasyon olabılır


    useEffect(()=>{
        const fetchUser = async()=>{
          try {
            const authData = localStorage.getItem('pocketbase_auth')
          if(authData){
            const{token,model} = JSON.parse(authData)
            setUser(model)
          }
        
            
          } catch (error) {
            
          }
          finally{
            setIsUserLoaded(true)
          }
        }
          
        fetchUser()
      },[])
    

      useEffect(()=>{
      const fetchReservation = async()=>{
        if(!user) return;

        try{
            // fetch a paginated records list
        const records = await pb.collection('reservations').getList(1, 50, {
            filter: `user = "${user.id}"`,
            sort: "-arrival_date",
        });
        console.log(records.items);
        setReservations(records.items);
        

        } catch(error){
            console.log('Error fetching user:',error)
        }
      
    }
    
    fetchReservation()
    },[user])

    useEffect(()=>{
    if(isUserLoaded &&  !user){
        router.push("/")
    }
    
    })

    if(!isUserLoaded){
    return(
        <div className='flex items-center justify-center h-screen'>
            <Loader2 size={48} className='animate-spin' />
        </div>
    )
}
    
    if(!user){
        return null
    
    }

  return (
    <div className='pt-44 p-6 container'>
        <h1 className='text-2xl font-bold mb-4'>Reservations</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {reservations.map(reservation=>(
                <div key={reservation.id} className='border p-4 rounded-xl shadow-sm'>
                  <p><strong>Guest Name:</strong> {reservation.guest_fullname}</p>
                  <p><strong>Room:</strong> {reservation.guest_fullname}</p>
                  <p><strong>Adults:</strong> {reservation.adults}</p>
                  <p><strong>Children:</strong> {reservation.children}</p>
                  <p><strong>Email:</strong> {reservation.guest_fullname}</p>
                  <p><strong>Arrival Date:</strong> {formatDate(new Date(reservation.arrival_date), 'PPP')}</p>
                  <p><strong>Departure Date:</strong> {formatDate(new Date(reservation.departure_date), 'PPP')}</p>

                </div>
            ))}
               
       

        </div>
        </div>
  )
}

export default MyReservationPage