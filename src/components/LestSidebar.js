import React from 'react'
import { ImHome } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoBookmarks } from "react-icons/io5";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
    return(
        <div className='w-[15%]'>
            <div>
                <div>
                    <img className='ml-4' width={"60px"} src='https://upload.wikimedia.org/wikipedia/commons/f/f2/Logo_Twitter.png' alt='twitter-logo'/>
                </div>

                <div className='my-4'>
                    <Link to="/" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                        <div>
                        <ImHome size="20px"/>
                        </div>
                    <h1 className='font-bold text-lg ml-2'>Home</h1>
                    </Link>

                    <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                        <div>
                        <FaSearch size="20px"/>
                        </div>
                    <h1 className='font-bold text-lg ml-2'>Explore</h1>
                    </div>

                    <div className='flex items-center my-2 px-3 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                        <div>
                        <IoIosNotifications size="25px"/>
                        </div>
                    <h1 className='font-bold text-lg ml-2'>Notification</h1>
                    </div>

                    <Link to="/profile" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                        <div>
                        <FaUser size="20px"/>
                        </div>
                    <h1 className='font-bold text-lg ml-2'>Profile</h1>
                    </Link>

                    <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                        <div>
                        <IoBookmarks size="20px"/>
                        </div>
                    <h1 className='font-bold text-lg ml-2'>Bookmarks</h1>
                    </div>

                    <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                        <div>
                        <RiLogoutCircleRFill size="20px"/>
                        </div>
                    <h1 className='font-bold text-lg ml-2'>Logout</h1>
                    </div>

                    <button className='px-4 py-2 border-none text-md bg-[#1D9BF0] w-full rounded-full text-white font-bold'>Post</button>

                </div>
            </div>
        </div>
    )
}

export default LeftSidebar