"use client";
import { createContext, ReactNode, useState } from "react";
import { Exercise } from "@/types/cards.types";

type WorkoutContextType = {
    todayPlans: Exercise[];
    setTodayPlans: React.Dispatch<React.SetStateAction<Exercise[]>>;

    savedWorkouts: Exercise[];
    setSavedWorkouts: React.Dispatch<React.SetStateAction<Exercise[]>>;
};
export const WorkoutContext =
createContext<WorkoutContextType | null>(null);

const WorkoutProvider = ({ children } : {children : ReactNode }) => {

    const [todayPlans, setTodayPlans] = useState<Exercise[]>([]);
    const [savedWorkouts, setSavedWorkouts] = useState<Exercise[]>([]);

    const sharedData = {
        todayPlans,
        setTodayPlans,
        savedWorkouts,
        setSavedWorkouts
    };
    return (
        <WorkoutContext.Provider value={sharedData}>{children}</WorkoutContext.Provider>
    );
};

export default WorkoutProvider;