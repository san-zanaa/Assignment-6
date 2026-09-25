import React from 'react';
import Image from 'next/image';
import { CalendarPlus2, Bookmark } from 'lucide-react'
import {getData} from '@/Data/Exercises'
import { Exercise } from '@/types/cards.types';

const page = async ({params}: {
    params: Promise<{ id: string }>
}) => {
    const { id } = await params;
    const workouts = await getData();
    const workoutDetails = workouts.find((workout:Exercise) => {
        return workout.id.toString() === id;
    });

    if (!workoutDetails) {
        return <div>Workout not found</div>;
    }
    return (
        <section className='flex justify-between gap-8'>
            <div>
                <Image src={workoutDetails.image} alt='' width={300} height={300}/>
            </div>

            <div>
                <div>
                    <h1>{workoutDetails.name}</h1>
                    <p>{workoutDetails.description}</p>
                </div>
                <div className='flex items-center gap-3 mt-2'>
                    <h5 className='font-bold text-black bg-[#C2F800] rounded-4xl px-3 py-1 uppercase'>{workoutDetails.muscleGroups[0]}</h5>
                    {workoutDetails.muscleGroups[1] && (
                        <h5 className='font-bold text-black bg-[#C2F800] rounded-4xl px-3 py-1 uppercase'>{workoutDetails.muscleGroups[1]}</h5>
                    )}
                </div>
                <div>
                    <h3>Instruction</h3>
                    <ul>
                        <li>{workoutDetails.instructions}</li>
                    </ul>
                </div>
                <div>
                    <button><CalendarPlus2 />Add today's plan</button>
                    <button><Bookmark />Save for later</button>
                </div>
            </div>
        </section>
    );
};

export default page;