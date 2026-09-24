import React from 'react';
import banner from '@/assets/banner.png'
import Image from 'next/image'


const HeroSection = () => {
    return (
        <section className='w-[95%] mx-auto flex justify-between gap-20 mt-10 p-16 bg-[#222630] rounded-2xl'>
            <div className=''>
                <h5 className='text-[#C2F800] font-semibold text-sm mb-3'>WORKOUT LIBRARY</h5>
                <h1 className='text-5xl font-bold mb-4'>TRAIN WITH INTENT. LOG EVERY SET.</h1>
                <p className='mb-4 text-[#9CA3AF] text-[16px]'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br /> into today's plan, and watch the week's work add up.</p>
                <button className='bg-[#C2F800] text-black px-5 py-3 font-bold rounded-md transition-all hover:bg-[#c4ec31] cursor-pointer'>BROWSE WORKOUTS</button>
            </div>
            <div>
                <Image src={banner} alt='Banner' height={500} width={500} />
            </div>
        </section>
    );
};

export default HeroSection;