"use client";
import { createContext, ReactNode, useState } from "react";


export const WorkoutContext = createContext({});

const WorkoutProvider = ({ children } : {children : ReactNode }) => {

    const [todayPlans, setTodayPlans] = useState([])
    const [savedWorkouts, setSavedWorkouts] = useState([])

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