'use client'
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { SliderImage } from '@/constans'
import Image from 'next/image'
import HeroForm from './HeroForm'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className='relative h-[32rem] lg:h-[44rem]'>
     
      <Navbar/>

      <Carousel
        plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        opts={{
            align: "start",
            loop: true,
          }}
        >
        <CarouselContent>
          {SliderImage.map((image, index) => (
            <CarouselItem key={index}>
              <Image 
                src={image.href} 
                alt={image.alt}
                width={1920}
                height={1080}
                className='h-[32rem] lg:h-[44rem] w-full object-cover brightness-50' 
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='hidden lg:flex right-0'/>
        <CarouselNext className='hidden lg:flex right-0'/>
      </Carousel>

      <HeroForm />
    </div>
  )
}

export default Hero