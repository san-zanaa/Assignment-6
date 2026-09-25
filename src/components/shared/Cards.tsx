import React from 'react';
import Image from 'next/image'
import { Clock4 } from 'lucide-react';
import { Star } from 'lucide-react';
import { Flame } from 'lucide-react';
import { Exercise } from '@/types/cards.types';
import Link from 'next/link'

interface CardProps {
    workout: Exercise
}

const Cards = ({ workout }: CardProps) => {
    return (
        <Link href={`/Exercises/${workout.id}`}>
        <section className='bg-[#15171D] overflow-hidden border border-gray-800 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#C2F800] cursor-pointer'>
            <div className='w-full h-52 overflow-hidden'>
                <Image src={workout.image} alt='' height={250} width={400} className="w-full h-full md:h-52 object-cover" />
            </div>

            <div className='p-5'>
                <div className='flex items-center gap-3 mt-2'>
                    <h5 className='font-bold text-black bg-[#C2F800] rounded-4xl px-3 py-1 uppercase'>{workout.muscleGroups[0]}</h5>
                    {workout.muscleGroups[1] && (
                        <h5 className='font-bold text-black bg-[#C2F800] rounded-4xl px-3 py-1 uppercase'>{workout.muscleGroups[1]}</h5>
                    )}
                </div>
                <div className='mt-4 border-b border-gray-800'>
                    <h2 className='text-2xl font-bold uppercase'>{workout.name}</h2>
                    <p className='mb-4 text-[#9CA3AF] text-sm'>{workout.equipment}</p>
                </div>
                <div className='flex items-center text-[#9CA3AF] text-sm gap-4 mt-3'>
                    <p className='flex items-center gap-1'><Clock4 size={14} /> {workout.duration} min</p>
                    <p className='flex items-center gap-1'><Flame size={14} />{workout.caloriesBurned} kcal</p>
                    <p className='flex items-center gap-1'><Star size={14} />{workout.rating}</p>
                </div>
            </div>
        </section>
        </Link>
    );
};

export default Cards;