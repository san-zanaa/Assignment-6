import React from 'react';
import banner from '@/assets/banner.png'
import Image from 'next/image'
import Link from "next/link"


const HeroSection = () => {
    return (
        <section className='w-[95%] mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20 mt-10 p-16 bg-[#222630] rounded-2xl'>
            <div className='text-center md:text-left'>
                <h5 className='text-[#C2F800] font-semibold text-sm mb-3'>WORKOUT LIBRARY</h5>
                <h1 className='text-3xl md:text-5xl font-bold mb-4'>TRAIN WITH INTENT. LOG EVERY SET.</h1>
                <p className='mb-5 text-[#9CA3AF] text-[16px]'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br className='hidden md:inline'/> into today's plan, and watch the week's work add up.</p>
                <Link href="#workouts"
                  className="inline-flex w-fit items-center bg-[#C2F800] text-black px-5 py-3 font-bold rounded-md transition-all duration-300 hover:bg-[#a2ec17] hover:-translate-y-1 cursor-pointer">
                  BROWSE WORKOUTS</Link>
            </div>
            <div>
                <Image src={banner} alt='Banner' height={500} width={500} className='max-w-[250px] md:max-w-[350px] h-auto object-contain' />
            </div>
        </section>
    );
};

export default HeroSection;