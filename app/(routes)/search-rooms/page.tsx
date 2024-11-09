'use client'
import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

const SearchPageRooms = () => {
    const searchParams = useSearchParams()
    const [rooms,setRooms] = useState([])

    const arrivalDate = searchParams.get('arrivalDate');
    const departureDate = searchParams.get('departureDate');
    const adults = searchParams.get('adults');
    const children = searchParams.get('children');

    console.log(arrivalDate,departureDate,adults,children)


  return (
    <div>SearchPageRooms</div>
  )
}

export default SearchPageRooms