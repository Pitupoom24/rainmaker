import React from 'react'
import Navbar from '../components/navbar';
import { PlusIcon, Squares2X2Icon } from '@heroicons/react/24/outline';
import { ScaleIcon } from '@heroicons/react/24/solid';

function Home() {
  return (
    <div>
        <Navbar />
        <div className='flex flex-col px-9 justify-center items-center h-screen'>
            <h1 className='text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-5 text-center'>Case search made fast</h1>
            <h2 className='text-base md:text-lg lg:text-xl xl:text-2xl text-gray-500 mb-8 text-center'>Effortlessly search for cases across every court in the world</h2>
            <input 
                className="max-w-[90%] w-[70%] lg:w-[65%] xl:w-[60%] border border-gray-300 px-4 py-3 mb-8 rounded-lg text-gray-800 placeholder-gray-500"
                type="text" 
                placeholder="Search cases..."
            />
            <div className='flex justify-center gap-x-5 gap-y-0 flex-wrap'>
                <button className='bg-black text-white text-sm lg:text-base font-medium rounded-lg px-4 py-2 mb-3 w-48 flex items-center justify-center space-x-2'>
                    <Squares2X2Icon className="h-[18px] w-5 text-white"/>
                    <span className='leading-[18px]'>Search</span>
                </button>

                <button className='bg-white text-black text-sm lg:text-base font-medium rounded-lg border border-gray-300 px-4 py-2 mb-3 w-48 flex items-center justify-center space-x-2'>
                    <PlusIcon className="h-[18px] w-5 text-black" />
                    <span className='leading-[18px]'>Recent Decisions</span>
                </button>

                <button className='bg-white text-black text-sm lg:text-base font-medium rounded-lg border border-gray-300 px-4 py-2 mb-3 w-48 flex items-center justify-center space-x-2'>
                    <ScaleIcon className="h-[18px] w-5 text-black" />
                    <span className='leading-[18px]'>Legal Sources</span>
                </button>

            </div>
        </div>
    </div>
  )
}

export default Home
