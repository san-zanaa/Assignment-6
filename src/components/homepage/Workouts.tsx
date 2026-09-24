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
        <section className='container mx-auto mt-10'>
            <div className=''>
                <h1>THE LIBRARY</h1>
                    <p>Twelve lifts covering every major muscle group.</p>
            </div>
            <div>
                {workoutData.map((workout:Exercise, idx:number) => {
                return <Cards key = {idx} workout={workout}/>
            })}
            </div>
        </section>
    );
};

export default Workouts;