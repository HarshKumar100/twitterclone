import React from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import Avatar from "react-avatar";

const Profile = () => {
    return (
        <div className='w-[50%] border-l border-r border-gray-200'>
            <div>
                <div className='flex items-center py-2'>
                    <Link to="/" className='p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer'>
                        <IoMdArrowRoundBack size="24px" />
                    </Link>
                    <div className='ml-2'>
                        <h1 className='font-bold text-lg'>Harsh Kumar</h1>
                        <p className='text-gray-500 text-sm'>10 post</p>
                    </div>
                </div>
                <img src="https://media.licdn.com/dms/image/C5616AQFjEsx5u_yhWA/profile-displaybackgroundimage-shrink_350_1400/0/1619230661541?e=1727913600&v=beta&t=FhNvfPkJgVeTrMh9VYys9AuTZF8voiUfLEkDnvbfaC8" alt="banner" />
                <div className='absolute top-40 ml-4 border-4 border-white rounded-full'>
                    <Avatar src="https://i.pinimg.com/736x/c0/4b/01/c04b017b6b9d1c189e15e6559aeb3ca8.jpg" size="120" round={true} />
                </div>

                <div className='text-right m-4'>
                    <button className='px-4 py-1 hover:bg-gray-200 rounded-full border border-gray-400'>Edit Profile</button>
                </div>

                <div className='m-5'>
                    <h1 className='font-bold text-xl'>Harsh Kumar</h1>
                    <p>Harsh@123gamil.com</p>
                </div>

                <div className='m-4 text-sm'>
                    <p>I am eager to connect with fellow professionals and explore new opportunities to drive innovation and growth in the marketing field.</p>
                </div>
            </div>
        </div>
    )
}

export default Profile