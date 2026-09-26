import React from 'react';
import Image from 'next/image';
import { getData } from '@/Data/Exercises'
import { Exercise } from '@/types/cards.types'
import PlansButton from '@/components/shared/PlansButton'
import SavedButton from '@/components/shared/SavedButton'

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
        <section className='flex flex-col lg:flex-row justify-between p-12 gap-10'>
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
                        <tbody className="divide-y divide-gray-800 font-semibold">
                            <tr>
                                <td className="py-4 px-5 uppercase">Equipment</td>
                                <td className="py-4 px-5 text-right">{workoutDetails.equipment}</td>
                            </tr>
                            <tr>
                                <td className="py-4 px-5 uppercase">Difficulty</td>
                                <td className="py-4 px-5 text-right">{workoutDetails.difficulty}</td>
                            </tr>
                            <tr>
                                <td className="py-4 px-5 uppercase">Sets</td>
                                <td className="py-4 px-5 text-right">{workoutDetails.sets}</td>
                            </tr>
                            <tr>
                                <td className="py-4 px-5 uppercase">Reps</td>
                                <td className="py-4 px-5 text-right">{workoutDetails.reps}</td>
                            </tr>
                            <tr>
                                <td className="py-4 px-5 uppercase">Duration</td>
                                <td className="py-4 px-5 text-right">{workoutDetails.duration} min</td>
                            </tr>
                            <tr>
                                <td className="py-4 px-5 uppercase">Calories</td>
                                <td className="py-4 px-5 text-right">{workoutDetails.caloriesBurned} kcal</td>
                            </tr>
                            <tr>
                                <td className="py-4 px-5 uppercase">Rating</td>
                                <td className="py-4 px-5 text-right">{workoutDetails.rating}</td>
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
                    <PlansButton workout={workoutDetails}/>
                    <SavedButton workout={workoutDetails} />
                </div>
            </div>
        </section>
    );
};

export default page;