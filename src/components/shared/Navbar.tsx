import React from 'react';
import Image from 'next/image'
import logo from '@/assets/logo.png'

const Navbar = () => {
    return (
        <section className='flex justify-between items-center p-10 border-b border-gray-800 shrink-0'>
            <div className='flex justify-between gap-2'>
                <Image src={logo} alt='logo' width={30} height={30} className='object-contain'/>
                <h2 className='font-bold'>FITLOG</h2>
            </div>
            <div>
                <ul className='flex justify-between gap-6'>
                    <li>Workouts</li>
                    <li>My Plan</li>
                </ul>
            </div>
            <div className='flex gap-4'>
                <button className='flex items-center gap-1.5 cursor-pointer'>Plan <span className='bg-[#C2F800] text-black px-1.5 flex items-center justify-center rounded-full'>0</span></button>
                <button className='flex items-center gap-1.5 cursor-pointer'>Saved <span className='border border-gray-50 px-1.5 flex items-center justify-center rounded-full'>0</span></button>
            </div>
        </section>
    );
};

export default Navbar;