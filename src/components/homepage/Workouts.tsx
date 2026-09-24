import { Exercise } from '@/types/cards.types';
import { discoverValidationDepths } from 'next/dist/server/app-render/instant-validation/instant-validation';
import Cards from '@/components/shared/Cards';

const getData = async () => {
    const response = await fetch('https://api.abcz.workers.dev/api/fitlog')
    const data = await response.json();
    return data;
}

const Workouts = async () => {
    const workoutData = await getData();
    console.log(workoutData, "workoutData");
    return (
        <section className=' w-[95%] mx-auto mt-10'>
            <div>
                <h1 className='text-xl font-bold'>THE LIBRARY</h1>
                    <p className='text-[#9CA3AF] mb-10'>Twelve lifts covering every major muscle group.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {workoutData.map((workout:Exercise, idx:number) => {
                return <Cards key = {idx} workout={workout}/>
            })}
            </div>
        </section>
    );
};

export default Workouts;