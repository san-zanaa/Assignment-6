import React from 'react';
import Image from 'next/image'
import logo from '@/assets/logo.png'

const Navbar = () => {
    return (
        <section className='flex justify-between p-10 border-b border-gray-800'>
            <div className='flex justify-between w-5 h-5 gap-2'>
                <Image src={logo} alt='logo' width={100} height={100} className=''/>
                <h2 className='font-bold'>FITLOG</h2>
            </div>
            <div>
                <ul className='flex justify-between gap-6'>
                    <li>Workouts</li>
                    <li>My Plan</li>
                </ul>
            </div>
            <div className='flex gap-4'>
                <button>Plan <span className='bg-[#C2F800] text-black px-1 rounded-full'>0</span></button>
                <button>Saved <span className='border border-gray-50 px-1 rounded-full'>0</span></button>
            </div>
        </section>
    );
};

export default Navbar;