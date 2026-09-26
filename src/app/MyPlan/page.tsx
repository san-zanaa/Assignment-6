"use client"
import React from 'react';
import { useContext, useState } from "react";
import { WorkoutContext } from "@/context/WorkoutContext";
import Link from 'next/link'
import MyPlanCard from '@/components/shared/MyPlanCard';

const Page = () => {
    const {
        todayPlans,
        setTodayPlans,
        savedWorkouts,
        setSavedWorkouts
    } = useContext(WorkoutContext);

    const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
    const [sortBy, setSortBy] = useState("Duration");
    const [doneIds, setDoneIds] = useState<number[]>([]);
    const markAsDone = (id: number) => {
        setDoneIds((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        )
    }

    const removeWorkout = (id: number) => {
        if (activeTab === "today") {
            setTodayPlans(todayPlans.filter((workout) => workout.id !== id));
        } else {
            setSavedWorkouts(savedWorkouts.filter((workout) => workout.id !== id));
        }
    }

    const currrentWorkouts =
        activeTab === "today" ? todayPlans : savedWorkouts;

    const sortedWorkouts = [...currrentWorkouts].sort((a, b) => {
        if (sortBy === "Duration") {
            return b.duration - a.duration;
        }
        if (sortBy === "Calories") {
            return b.caloriesBurned - a.caloriesBurned;
        }
        if (sortBy === "Rating") {
            return b.rating - a.rating;
        }
        return 0;
    })
    return (
        <section className='p-12'>
            <div>
                <h1 className='text-3xl font-bold uppercase mb-2'>My Plan</h1>
                <p className='text-[#8A92A0] mb-5'>Cap of five lifts for today. Finish them, then load more.</p>
            </div>
            <div className='flex justify-around mb-10 bg-[#232732] p-8 rounded-xl'>
                <div>
                    <p className='text-[#8A92A0]'>Exercises</p>
                    <h4 className='text-4xl text-[#CCFF00] font-bold'>{todayPlans.length}</h4>
                </div>
                <div  >
                    <p className='text-[#8A92A0]'>Minutes</p>
                    <h4 className='text-4xl font-bold'>
                        {todayPlans.reduce(
                            (total, workout) => total + (Number(workout.caloriesBurned) || 0), 0)}
                    </h4>
                </div>
                <div>
                    <p className='text-[#8A92A0]'>Calories</p>
                    <h4 className='text-4xl font-bold'>
                        {todayPlans.reduce(
                            (total, workout) => total + (Number(workout.duration) || 0), 0)}
                    </h4>
                </div>
            </div>

            <div className='flex justify-between items-center mb-8'>
                <div className="tabs tabs-box bg-[#232732]">
                    <input type="radio" name="my_tabs_1" className="tab text-[#8A92A0]" aria-label="Today's plan" checked={activeTab === "today"} onChange={() => setActiveTab("today")} />
                    <input type="radio" name="my_tabs_1" className="tab text-[#8A92A0]" aria-label="Saved" checked={activeTab === "saved"} onChange={() => setActiveTab("saved")} />
                </div>
                <div className='flex items-center gap-7'>
                    <p className='text-[#8A92A0]'>Sort By</p>
                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="select bg-[#232732] border border-gray-600 py-5 px-7">
                        <option value="Duration">Duration</option>
                        <option value="Calories">Calories</option>
                        <option value="Rating">Rating</option>
                    </select>
                </div>
            </div>

            {sortedWorkouts.length === 0 ? (
                <div className='text-center border border-dashed rounded-xl bg-[#111317] border-gray-800 mt-12 p-24'>
                    <h2 className='text-xl font-bold uppercase'>Nothing here yet</h2>
                    <p className='text-[#A1A1AA] mb-4'>Browse the library and add a lift to get today moving.</p>
                    <Link href="#workouts"
                        className="inline-flex w-fit items-center bg-[#C2F800] text-black px-5 py-3 font-bold rounded-full transition-all duration-300 hover:bg-[#a2ec17] hover:-translate-y-1 cursor-pointer">
                        Go to workouts</Link>
                </div>
            ) : (
                <div className="space-y-5">
    {sortedWorkouts.map((workout) => (
        <MyPlanCard
            key={workout.id}
            workout={workout}
            isDone={doneIds.includes(workout.id)}
            onDone={() => markAsDone(workout.id)}
            onRemove={() => removeWorkout(workout.id)}
        />
    ))}
</div>
            )}
        </section>
    );
};

export default Page;