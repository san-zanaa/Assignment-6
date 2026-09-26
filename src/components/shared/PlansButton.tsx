"use client";
import React, { useContext } from 'react';
import { CalendarPlus2 } from 'lucide-react'
import { Exercise } from '@/types/cards.types';
import { WorkoutContext } from '@/context/WorkoutContext';
import { toast } from 'react-toastify';

const PlansButton = ({ workout } : { workout : Exercise}) => {
    const { todayPlans, setTodayPlans } = useContext(WorkoutContext);
    const addToPlan = () => {
console.log("ADDING WORKOUT:", workout);
        const alreadyAdded = todayPlans.some(
            (item:Exercise) => item.id === workout.id
        )
        if (alreadyAdded) {
            toast.info("Already added to today's plan")
            return;
        }
        setTodayPlans([...todayPlans, workout]);
        toast.success("Added to today's plan")
    }
    return (
            <button onClick={addToPlan}
            className="inline-flex w-fit gap-1 items-center bg-[#C2F800] text-black px-5 py-3 font-bold rounded-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#a2ec17] cursor-pointer">
                <CalendarPlus2 />Add today's plan</button>
    );
};

export default PlansButton;