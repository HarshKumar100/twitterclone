import React from 'react';
import { FaSearch } from "react-icons/fa";
import Avatar from "react-avatar";

const RightSidebar = () => {
    return (
        <div className='w-[25%]'>
            <div className='flex items-center p-2 bg-gray-100 rounded-full outline-none'>
                <FaSearch size="25px" />
                <input type="text" className='bg-transparent outline-none px-2' placeholder='Search' />
            </div>
            <div>
                <div className='p-4 bg-gray-100 rounded-2xl my-4'>
                    <h1 className='font-bold text-lg '>Who to follow</h1>
                    <div className='flex items-center justify-between my-3'>
                        <div className='flex'>
                            <div>
                                <Avatar src="https://static.vecteezy.com/system/resources/previews/008/846/297/original/cute-boy-avatar-png.png" size="40" round={true} />
                            </div>
                            <div className='ml-2'>
                                <h1 className='font-bold'>Sumit</h1>
                                <p className='text-sm'>@sumit123gamil.com</p>
                            </div>
                        </div>

                        <div>
                            <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
                        </div>
                    </div>

                    <div className='flex items-center justify-between my-3'>
                        <div className='flex'>
                            <div>
                                <Avatar src="https://png.pngtree.com/png-clipart/20220123/original/pngtree-boy-avatar-png-image_7166566.png" size="40" round={true} />
                            </div>
                            <div className='ml-2'>
                                <h1 className='font-bold'>Porush</h1>
                                <p className='text-sm'>@porush123gamil.com</p>
                            </div>
                        </div>

                        <div>
                            <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
                        </div>
                    </div>

                    <div className='flex items-center justify-between my-3'>
                        <div className='flex'>
                            <div>
                                <Avatar src="https://static.vecteezy.com/system/resources/previews/034/947/491/original/ai-generated-cartoon-avatar-of-a-boy-with-brown-hair-png.png" size="40" round={true} />
                            </div>
                            <div className='ml-2'>
                                <h1 className='font-bold'>Tashu</h1>
                                <p className='text-sm'>@Tashu123gamil.com</p>
                            </div>
                        </div>

                        <div>
                            <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
                        </div>
                    </div>

                    <div className='flex items-center justify-between my-3'>
                        <div className='flex'>
                            <div>
                                <Avatar src="https://w7.pngwing.com/pngs/782/115/png-transparent-avatar-boy-man-avatar-vol-1-icon-thumbnail.png" size="40" round={true} />
                            </div>
                            <div className='ml-2'>
                                <h1 className='font-bold'>Santosh</h1>
                                <p className='text-sm'>@santosh123gamil.com</p>
                            </div>
                        </div>

                        <div>
                            <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RightSidebar