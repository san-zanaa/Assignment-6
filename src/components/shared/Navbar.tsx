"use client"
import React from 'react';
import Image from 'next/image'
import logo from '@/assets/logo.png'
import Link from 'next/link';
import { usePathname } from "next/navigation"
import { useContext } from "react";
import { WorkoutContext } from '@/context/WorkoutContext';

const Navbar = () => {
    const context = useContext(WorkoutContext);
    const pathname = usePathname()
    if (!context) {
        return null;
    }
    const {
        todayPlans,
        savedWorkouts
    } = context;

    return (
        <section className='flex justify-between items-center p-10 border-b border-gray-800 shrink-0'>
            <div className='flex justify-between gap-2'>
                <Image src={logo} alt='logo' width={30} height={30} className='object-contain'/>
                <h2 className='font-bold'>FITLOG</h2>
            </div>
            <div>
                <ul className='flex justify-between font-semibold'>
                    <li>
                        <Link href = "/"
                        className={pathname === "/" ? "text-[#C2F800] bg-[#C2F800]/10 rounded-full px-4 py-2" : "px-3 py-2"}>
                          Workouts
                        </Link>
                    </li>

                    <li>
                        <Link href = "/MyPlan"
                          className={pathname === "/MyPlan" ? "text-[#C2F800] bg-[#C2F800]/10 rounded-full px-4 py-2" : "px-3 py-2"}>
                           My Plan
                         </Link>
                    </li>
                </ul>
            </div>
            <div className='flex gap-4 font-semibold'>
                <button className='flex items-center gap-1.5 cursor-pointer'>Plan <span className='bg-[#C2F800] text-black px-2 flex items-center font-bold justify-center rounded-full'>
                    {todayPlans.length}</span>
                </button>
                <button className='flex items-center text-[#9CA3AF] gap-1.5 cursor-pointer'>Saved <span className='border border-[#D1D5DB] font-bold px-2 flex items-center justify-center rounded-full'>
                    {savedWorkouts.length}</span>
                </button>
            </div>
        </section>
    );
};

export default Navbar;