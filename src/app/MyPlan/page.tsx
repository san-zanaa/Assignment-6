"use client";

import React, { useContext, useState } from "react";
import { WorkoutContext } from "@/context/WorkoutContext";
import Link from "next/link";
import MyPlanCard from "@/components/shared/MyPlanCard";
import { Exercise } from "@/types/cards.types";
import { toast } from "react-toastify";

const Page = () => {

    const context = useContext(WorkoutContext);
    const [activeTab, setActiveTab] =useState<"today" | "saved">("today");
    const [sortBy, setSortBy] = useState("Duration");
    const [doneIds, setDoneIds] = useState<number[]>([]);
    if (!context) {
        return null;
    }
    const {
        todayPlans,
        setTodayPlans,
        savedWorkouts,
        setSavedWorkouts
    } = context;

    const markAsDone = (id: number) => {

        setDoneIds((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]);

        toast.success("Workout marked as done!");};

    const removeWorkout = (id: number) => {
        if (activeTab === "today") {
            setTodayPlans(
                todayPlans.filter(
                    (workout: Exercise) =>
                        workout.id !== id));

            toast.success("Workout removed from today's plan!");
        } else {
            setSavedWorkouts(
                savedWorkouts.filter(
                    (workout: Exercise) =>
                        workout.id !== id));
            toast.success(
                "Workout removed from saved!");
        }
    };
    const currentWorkouts = activeTab === "today" ? todayPlans : savedWorkouts;
    const totalExercises = currentWorkouts.length;

    const totalDuration =
        currentWorkouts.reduce(
            (total: number, workout: Exercise) =>
                total + (Number(workout.duration) || 0) ,0);

    const totalCalories =
        currentWorkouts.reduce(
            (total: number, workout: Exercise) =>
                total + (Number(workout.caloriesBurned) || 0), 0);

    const sortedWorkouts =
        [...currentWorkouts].sort((a, b) => {
            if (sortBy === "Duration") {
                return (
                    Number(b.duration) - Number(a.duration));
            }
            if (sortBy === "Calories") {
                return (
                    Number(b.caloriesBurned) -  Number(a.caloriesBurned)
                );
            }
            if (sortBy === "Rating") {
                return (
                    Number(b.rating) - Number(a.rating)
                );
            }
            return 0;
        });

    return (
        <section className="p-12">
            <div>
                <h1 className="text-3xl font-bold uppercase mb-2">
                    My Plan
                </h1>
                <p className="text-[#8A92A0] mb-5">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            <div className="flex justify-around mb-10 bg-[#232732] p-8 rounded-xl">
                <div>
                    <p className="text-[#8A92A0]">Exercises</p>
                    <h4 className="text-4xl text-[#CCFF00] font-bold">
                        {totalExercises}
                    </h4>
                </div>
                <div>
                    <p className="text-[#8A92A0]">Minutes</p>
                    <h4 className="text-4xl font-bold">{totalDuration}</h4>
                </div>
                <div>
                    <p className="text-[#8A92A0]">Calories</p>
                    <h4 className="text-4xl font-bold">{totalCalories}</h4>
                </div>
            </div>

            <div className="flex justify-between items-center mb-8">
                <div className="tabs tabs-box bg-[#232732]">
                   <input
                        type="radio"
                        name="my_tabs_1"
                        className={`tab text-[#8A92A0] ${activeTab === "today"
                                ? "bg-[#2B303D] text-white font-semibold"
                                : "" }`}
                        aria-label="Today's Plan"
                        checked={activeTab === "today"}
                        onChange={() =>
                            setActiveTab("today")
                        }/>
                    <input
                        type="radio"
                        name="my_tabs_1"
                        className={`tab text-[#8A92A0] ${activeTab === "saved"
                                ? "bg-[#2B303D] text-white font-semibold"
                                : ""
                            }`}
                        aria-label="Saved"
                        checked={activeTab === "saved"}
                        onChange={() =>
                            setActiveTab("saved")
                        } />
                </div>

                <div className="flex items-center gap-4">
                    <p className="text-[#8A92A0] whitespace-nowrap">Sort By</p>

                    <select
                        value={sortBy}
                        onChange={(e) =>
                            setSortBy(e.target.value)}
                        className="select bg-[#232732] border border-gray-700 py-4 px-7">
                        <option value="Duration">Duration</option>
                        <option value="Calories">Calories</option>
                        <option value="Rating">Rating</option>
                    </select>
                </div>
            </div>

            {sortedWorkouts.length === 0 ? (

                <div className="text-center border border-dashed rounded-xl bg-[#111317] border-gray-800 mt-12 p-24">

                    <h2 className="text-xl font-bold uppercase">
                        Nothing here yet
                    </h2>

                    <p className="text-[#A1A1AA] mb-4">
                        Browse the library and add a lift to get today moving.
                    </p>

                    <Link
                        href="/"
                        className="inline-flex w-fit items-center bg-[#C2F800] text-black px-5 py-3 font-bold rounded-full transition-all duration-300 hover:bg-[#a2ec17] hover:-translate-y-1 cursor-pointer">
                        Go to workouts
                    </Link>
                </div>
            ) : (
                <div className="space-y-5">
                    {sortedWorkouts.map(
                        (workout: Exercise) => (
                            <MyPlanCard
                                key={workout.id}
                                workout={workout}
                                type={ activeTab === "today" ? "plan" : "saved"}

                                isDone={ activeTab === "today" ? doneIds.includes(workout.id): false}

                                onDone={ activeTab === "today" ? () => markAsDone(workout.id) : undefined}
                                onRemove={() => removeWorkout(workout.id)}/>
                        )
                    )}
                </div>
            )}
        </section>
    );
};


export default Page;