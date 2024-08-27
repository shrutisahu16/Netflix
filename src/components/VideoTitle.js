import React from 'react'
import { IoIosPlay } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";
export default function VideoTitle() {
  return (
    <div className='w-screen aspect absolute text-white pt-[18%] p-12'>
        <h1 className='text-3xl font-bold'>Shruti Sahu</h1>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
        <div className='flex mt-8 '>
            <button className='px-6 flex items-center py-2 bg-white text-black rounded-md hover:bg-opacity-80'>
                <IoIosPlay size="24px"/>
                <span className='ml-1'>Play</span>
             
            </button>
            <button className='px-6 mx-2 flex items-center py-2 bg-gray-500 bg-opacity-50 text-black rounded-md'>
                <IoMdInformationCircleOutline size="24px"/>
                <span className='ml-1'>Watch more</span>
            </button>
        </div>
    
    </div>
  )
}
