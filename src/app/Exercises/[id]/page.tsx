import React from 'react';
import Image from 'next/image';
import { CalendarPlus2, Bookmark } from 'lucide-react'
import { getData } from '@/Data/Exercises'
import { Exercise } from '@/types/cards.types';

const page = async ({ params }: {
    params: Promise<{ id: string }>
}) => {
    const { id } = await params;
    const workouts = await getData();
    const workoutDetails = workouts.find((workout: Exercise) => {
        return workout.id.toString() === id;
    });

    if (!workoutDetails) {
        return <div>Workout not found</div>;
    }
    return (
        <section className='flex flex-col lg:flex-row justify-between p-10 gap-8'>
            <div className='w-full md:w-1/2 rounded-2xl overflow-hidden'>
                <Image src={workoutDetails.image} alt='' width={500} height={500} className='w-full h-full object-cover rounded-2xl' />
            </div>
            <div className='w-full md:w-1/2'>
                <div>
                    <h1 className='text-3xl font-bold uppercase mb-2'>{workoutDetails.name}</h1>
                    <p className='text-[#9CA3AF] mb-5'>{workoutDetails.description}</p>
                </div>
                <div className='flex items-center gap-3 mb-5'>
                    <h5 className='font-bold text-black bg-[#C2F800] rounded-4xl px-3 py-1 uppercase'>{workoutDetails.muscleGroups[0]}</h5>
                    {workoutDetails.muscleGroups[1] && (
                        <h5 className='font-bold text-black bg-[#C2F800] rounded-4xl px-3 py-1 uppercase'>{workoutDetails.muscleGroups[1]}</h5>
                    )}
                </div>

                <div className='bg-[#151922] mb-6 rounded-2xl overflow-hidden'>
                    <table className='w-full border border-gray-800 lg text-[#9CA3AF]'>
                        <tbody className="divide-y divide-gray-800">
                            <tr>
                                <td className="py-3 px-4 uppercase">Equipment</td>
                                <td>{workoutDetails.equipment}</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 uppercase">Difficulty</td>
                                <td>{workoutDetails.difficulty}</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 uppercase">Sets</td>
                                <td>{workoutDetails.sets}</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 uppercase">Reps</td>
                                <td>{workoutDetails.reps}</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 uppercase">Duration</td>
                                <td>{workoutDetails.duration}</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 uppercase">Calories</td>
                                <td>{workoutDetails.caloriesBurned}</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 uppercase">Rating</td>
                                <td>{workoutDetails.rating}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div>
                    <h3 className='text-md font-bold uppercase'>Instructions</h3>
                    <ol className='text-[#9CA3AF] w-full list-decimal m-4 space-y-2'>
                        <li>{workoutDetails.instructions[0]}</li>
                        <li>{workoutDetails.instructions[1]}</li>
                        <li>{workoutDetails.instructions[2]}</li>
                        <li>{workoutDetails.instructions[3]}</li>
                    </ol>

                </div>
                <div className='flex gap-5 mt-7'>
                    <button className="inline-flex w-fit gap-1 items-center bg-[#C2F800] text-black px-5 py-3 font-bold rounded-xl transition-all duration-300 hover:bg-[#c4ec31] cursor-pointer"><CalendarPlus2 />Add today's plan</button>
                    <button className="inline-flex w-fit gap-1 items-center text-[#E5E7EB] px-5 py-3 font-bold rounded-xl transition-all duration-300 border border-gray-800 cursor-pointer"><Bookmark />Save for later</button>
                </div>
            </div>
        </section>
    );
};

export default page;