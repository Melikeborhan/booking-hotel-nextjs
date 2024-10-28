'use client'
import React from 'react'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { date, z } from "zod"


import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import { toast } from "@/components/ui/use-toast"

  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  



const formSchema = z.object({
    arrivalDate: z.date().nullable().refine(date => !!date, {
      message: "arrivel date is required",
    }),
    departureDate: z.date().nullable().refine(date => !!date, {
      message: "departure date is required",
    }),
    adults: z.string().nonempty({
        message: "Select number of adults",
    }),
    children: z.string().nonempty({
        message: "Select number of children",
  })
    })
 

const HeroForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            arrivalDate: null,
            departureDate: null,
            adults: '1',
            children: '0',

        },
      })
      const onSubmit = (data: z.infer<typeof formSchema>) => {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(data)
      }


  return (
    <div className=' text-white absolute -bottom-28 lg:bottom-[0px] w-full flex justify-center'>
    <div className='mx-auto container justify-center flex '>
      <div className='bg-gray-800 bg-opacity-85 p-6 w-full max-w-5xl shadow-xl rounded-xl'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
            <FormField
              control={form.control}
              name="arrivalDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='validationLabel grid-cols-2 '>Arrival Date</FormLabel>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                          className="bg-white dark:bg-slate-500"  
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormMessage  className='validationError'/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="departureDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='validationLabel grid-cols-2 '>Departure Date</FormLabel>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                          className="bg-white dark:bg-slate-500"  // Calendar bg color
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormMessage  className='validationError'/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="adults"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='validationLabel grid-cols-2 '>Adults </FormLabel>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                        <Select value={field.value} onValueChange={field.onChange}>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Adults" />
                            </SelectTrigger>
                            <SelectContent className='dark:bg-slate-500 bg-white'>
                              <SelectItem value="1">1</SelectItem>
                              <SelectItem value="2">2</SelectItem>
                              <SelectItem value="3">3</SelectItem>
                              <SelectItem value="4">4</SelectItem>
                              <SelectItem value="5">5</SelectItem>
                              <SelectItem value="6">6</SelectItem>
                            </SelectContent>
                          </Select>

                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                       
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormMessage  className='validationError'/>
                </FormItem>
              )}
            />
              <FormField
              control={form.control}
              name="children"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='validationLabel grid-cols-2 '>Children </FormLabel>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                        <Select value={field.value} onValueChange={field.onChange}>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Children" />
                            </SelectTrigger>
                            <SelectContent className='dark:bg-slate-500 bg-white'>
                              <SelectItem value="0">0</SelectItem>
                              <SelectItem value="1">1</SelectItem>
                              <SelectItem value="2">2</SelectItem>
                              <SelectItem value="3">3</SelectItem>
                              <SelectItem value="4">4</SelectItem>
                              <SelectItem value="5">5</SelectItem>
                              <SelectItem value="6">6</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                          className="bg-white"  // Calendar bg color
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormMessage  className='validationError'/>
                </FormItem>
              )}
            />            

            
<Button variant="mybutton"  className='col-span-1 md:col-span-4 rounded-xl mt-6' type="submit">Submit</Button>
         
          </form>
        </Form> 
                </div>
            </div>
            </div>
        )
}

export default HeroForm
