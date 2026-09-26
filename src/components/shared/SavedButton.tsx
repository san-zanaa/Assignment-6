"use client";
import React, { useContext } from 'react';
import { Bookmark } from 'lucide-react'
import { Exercise } from '@/types/cards.types';
import { WorkoutContext } from '@/context/WorkoutContext';
import { toast } from 'react-toastify';

const SavedButton = ({ workout } : { workout : Exercise}) => {
    const { savedWorkouts, setSavedWorkouts } = useContext(WorkoutContext);
    const savedLater = () => {
        const alreadySaved = savedWorkouts.some(
            (item:Exercise) => item.id === workout.id
        )
        if(alreadySaved) {
            toast.info("Already saved")
            return;
        }
        setSavedWorkouts([...savedWorkouts, workout]);
        toast.success("Saved for later")
    }
    return (
            <button onClick={savedLater}
            className="inline-flex w-fit gap-1 items-center text-[#E5E7EB] px-5 py-3 font-bold hover:-translate-y-1 hover:border-[#548100] rounded-xl transition-all duration-300 border border-gray-800 cursor-pointer">
                <Bookmark />Save for later</button>
    );
};


export default SavedButton;