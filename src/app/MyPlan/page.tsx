import React from 'react';
import Link from 'next/link'

const page = () => {
    return (
        <section className='p-12'>
            <div>
                <h1 className='text-3xl font-bold uppercase mb-2'>My Plan</h1>
                <p className='text-[#8A92A0] mb-5'>Cap of five lifts for today. Finish them, then load more.</p>
            </div>
            <div className='flex justify-around mb-10 bg-[#232732] p-8 rounded-xl'>
                <div>
                    <p className='text-[#8A92A0]'>Exercises</p>
                    <h4 className='text-4xl text-[#CCFF00] font-bold'>2</h4>
                </div>
                <div  >
                    <p className='text-[#8A92A0]'>Minutes</p>
                    <h4 className='text-4xl font-bold'>23</h4>
                </div>
                <div>
                    <p className='text-[#8A92A0]'>Calories</p>
                    <h4 className='text-4xl font-bold'>192</h4>
                </div>
            </div>

            <div className="tabs tabs-box">
                <input type="radio" name="my_tabs_1" className="tab" aria-label="Today's plan" />
                <input type="radio" name="my_tabs_1" className="tab" aria-label="Saved" defaultChecked />
            </div>

            <div className='text-center border border-dashed rounded-xl bg-[#111317] border-gray-800 mt-12 p-24'>
                <h2 className='text-xl font-bold uppercase'>Nothing here yet</h2>
                <p className='text-[#A1A1AA] mb-4'>Browse the library and add a lift to get today moving.</p>
                <Link href="#workouts"
                  className="inline-flex w-fit items-center bg-[#C2F800] text-black px-5 py-3 font-bold rounded-full transition-all duration-300 hover:bg-[#a2ec17] hover:-translate-y-1 cursor-pointer">
                  Go to workouts</Link>
            </div>
        </section>
    );
};

export default page;