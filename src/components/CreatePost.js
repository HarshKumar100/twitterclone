import React from 'react';
import Avatar from 'react-avatar';
import { FaImage } from "react-icons/fa6";


const CreatePost = () => {
    return (
        <div className='w-[100%]'>
            <div>
            <div className='flex items-center justify-evenly border-b border-gray-200'>
                
                <div className='cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-2'>
                    <h1 className='font-semibold text-gray-700 text-lg'>For you</h1>
                </div>
                <div className='cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-2'>
                    <h1 className='font-semibold text-gray-700 text-lg'>Following</h1>
                </div>

            </div>
            </div>

            <div>
                <div className='flex items-center p-3'>
                    <div>
                        <Avatar src="https://i.pinimg.com/736x/c0/4b/01/c04b017b6b9d1c189e15e6559aeb3ca8.jpg" size="40" round={true} />
                    </div>
                    <input className='w-full outline-none border-none text-xl ml-2' type='text' placeholder='What is happening?!'/>
                </div>

                <div className='flex items-center justify-between p-3 border-b border-gray-300'>
                    <div>
                    <FaImage size="24px"/>
                    </div>
                    <button className='bg-[#1D9BF0] px-4 py-1 text-lg text-white text-right border-none rounded-full'>Post</button>
                </div>
            </div>

        
        </div>
    )
}

export default CreatePost