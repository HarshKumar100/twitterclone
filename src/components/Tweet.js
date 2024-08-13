import React from 'react';
import Avatar from "react-avatar";
import { SlLike } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa";
import { GoBookmark } from "react-icons/go";

const Tweet = () => {
    return(
        <div className='border-b border-gray-200'>
            <div>
                <div className='flex p-4'>
                        <Avatar src="https://static.vecteezy.com/system/resources/previews/024/558/680/original/3d-avatar-office-boy-illustration-png.png" size="40" round={true} />
                        <div className='ml-2 w-full'>
                        <div className='flex items-center'>
                            <h1 className='font-bold'>Prakhar</h1>
                            <p className='text-gray-500 text-sm ml-1'>@prakharGuitarist . 1m</p>
                        </div>
                    
                    <div>
                         <p>Hello developers lets connect and grow together</p>
                    </div>

                    <div className='flex justify-between my-2'>
                        <div className='flex items-center'>
                            <div className='p-2 hover:bg-blue-200 rounded-full cursor-pointer'>
                                <SlLike size="20px"/> 
                            </div>
                            <p>0</p>
                        </div>
                        
                        <div className='flex items-center'>
                            <div className='p-2 hover:bg-blue-200 rounded-full cursor-pointer'>
                                <FaRegComment size="20px"/>
                            </div>
                            <p>0</p>
                        </div>
                        
                        <div className='flex items-center'>
                            <div className='p-2 hover:bg-blue-200 rounded-full cursor-pointer'>
                                <GoBookmark size="20px"/>
                            </div>
                            <p>0</p>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tweet