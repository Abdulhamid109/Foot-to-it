import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, PlusIcon } from 'lucide-react'
import React from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const page = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <header className="backdrop-blur-2xl w-full shadow-lg tracking-tighter gap-5 flex flex-col bg-gradient-to-b from-green-50 to-green-100 p-5 md:p-10 z-10">
                <section className='flex justify-between items-center tracking-tighter'>
                    <div className="text-2xl font-semibold flex justify-center items-center">
                        Welcome, Tony Stark!
                    </div>
                    <div className='flex justify-center items-center hover:bg-gradient-to-r transition-all duration-200 transform hover:scale-105 hover:from-blue-400 hover:to-blue-900 bg-gradient-to-l from-blue-400 to-blue-900 text-white rounded-2xl p-1 font-thin'>
                        <Tooltip>
                            <TooltipTrigger><PlusIcon width={15} className='flex justify-center items-center' /> </TooltipTrigger>
                            <TooltipContent>
                                <p>Create a new group</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </section>

                <section className="flex justify-center md:justify-start items-center gap-10">
                    <input
                        type="text"
                        placeholder="Search your group"
                        className="backdrop-blur-2xl shadow-lg border flex justify-center items-center bg-amber-100 focus:outline p-2 rounded-md w-full md:w-96"
                    />
                    <Button className="bg-green-700 hover:bg-green-900 flex justify-center items-center backdrop-blur-2xl shadow-lg px-6 py-2">
                        Search
                    </Button>
                </section>

            </header>
            <section className="flex-1 relative overflow-hidden tracking-tighter">
                <div className="relative z-10 h-full overflow-y-auto p-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="relative border-none p-6 rounded-xl shadow-xl bg-black/60 hover:bg-black/70 transition-all duration-200 transform hover:scale-105 cursor-pointer backdrop-blur-md overflow-hidden max-w-md">

                            <div className="relative z-10 text-white p-1 flex justify-start items-center w-screen">
                                <Avatar className='w-25 h-25 flex justify-center items-center p-2'>
                                    <AvatarImage width={50} height={50} src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div className='flex flex-col justify-center items-start p-3'>
                                    <h3 className="text-2xl font-bold mb-1">Hexa Habibis</h3>
                                    <p className="text-sm font-light">POC: Jhon Doe</p>
                                    <p className="text-sm font-light text-blue-500">+91 9089999999</p>
                                    <div className='font-thin text-[14px] underline flex hover:text-blue-500'>
                                        Edit the Group Info
                                        <ArrowRight width={17} />
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page