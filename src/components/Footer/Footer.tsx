import React from 'react';
import Image from 'next/image'
import logo from '@/assets/logo.png'

const Footer = () => {
    return (
        <footer className='flex justify-between p-10 mt-10 border-t border-gray-800'>
            <div className='flex justify-between w-5 h-5 gap-2'>
                <Image src={logo} alt='logo' width={100} height={100} className=''/>
                <h2 className='font-bold'>FITLOG</h2>
            </div>
            <div>
                <p className='text-[#6B7280]'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </footer>
    );
};

export default Footer;