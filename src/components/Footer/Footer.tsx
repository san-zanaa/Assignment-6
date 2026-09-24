import React from 'react';
import Image from 'next/image'
import logo from '@/assets/logo.png'

const Footer = () => {
    return (
        <footer className='flex flex-col sm:flex-row justify-between items-center p-10 mt-10 border-t border-gray-800'>
            <div className='flex justify-between gap-2'>
                <Image src={logo} alt='logo' width={30} height={30} className='object-contain'/>
                <h2 className='font-bold'>FITLOG</h2>
            </div>
            <div>
                <p className='text-[#6B7280] text-center sm:text-left'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </footer>
    );
};

export default Footer;