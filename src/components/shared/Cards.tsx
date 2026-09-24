import React from 'react';
import Image from 'next/image'
import { Clock4 } from 'lucide-react';
import { Star } from 'lucide-react';
import { Palette } from 'lucide-react';
import { Exercise } from '@/types/cards.types';

interface CardProps {
    workout: Exercise
}

const Cards = ({ workout } : CardProps) => {
    return (
        <section>
            <div>
                <Image src={workout.image} alt='' height={100} width={100} className="object-cover overflow-hidden"/>
            </div>
            <div className='flex justify-between items-center gap-6'>
                <h5 className='font-semibold text-black bg-[#C2F800] rounded-4xl'>{workout.muscleGroups}</h5>
                <h5 className='font-semibold text-black bg-[#C2F800] rounded-4xl'>{workout.muscleGroups}</h5>
            </div>
            <div>
                <h2 className='text-2xl font-bold'>{workout.name}</h2>
                <p>{workout.equipment}</p>
            </div>
            <div className='flex justify-between items-center'>
                <p><Clock4 /> {workout.duration} min</p>
                <p><Palette />{workout.caloriesBurned} kcal</p>
                <p><Star />{workout.rating}</p>
            </div>
        </section>
    );
};

export default Cards;