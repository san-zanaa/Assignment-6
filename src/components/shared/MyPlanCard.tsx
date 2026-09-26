"use client";
import Image from "next/image";
import Link from "next/link";
import { Clock4, Flame, Star, X } from "lucide-react";
import { Exercise } from "@/types/cards.types";

interface MyPlanCardProps {
    workout: Exercise;
    isDone: boolean;
    onDone: () => void;
    onRemove: () => void;
}

const MyPlanCard = ({
    workout,
    isDone,
    onDone,
    onRemove,
}: MyPlanCardProps) => {
    return (
        <div
            className={`relative w-full bg-[#15171D] border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 ${isDone ? "opacity-60" : ""}`}>
            <div className="flex flex-col md:flex-row">

                <div className="w-full md:w-52 h-48 shrink-0">
                    <Image src={workout.image} alt=''
                        width={300}
                        height={200}
                        className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 p-5">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h2 className={`text-xl font-bold uppercase ${isDone ? "line-through" : ""}`}>
                            {workout.name}</h2>

                        {workout.muscleGroups.map((muscle, index) => (
                            <span key={index}
                                className="text-xs font-bold text-black bg-[#C2F800] rounded-full px-3 py-1 uppercase">
                                {muscle}
                            </span>
                        ))}
                    </div>

                    <p className="text-[#9CA3AF] text-sm mb-4">
                        {workout.equipment}
                    </p>

                    <div className="flex flex-wrap items-center gap-5 text-[#9CA3AF] text-sm">
                        <p className="flex items-center gap-1">
                            <Clock4 size={15} />
                            {workout.duration} min
                        </p>
                        <p className="flex items-center gap-1">
                            <Flame size={15} />
                            {workout.caloriesBurned} kcal
                        </p>
                        <p className="flex items-center gap-1">
                            <Star size={15} />
                            {workout.rating}
                        </p>
                    </div>
                </div>

                <div className="flex md:flex-col justify-center gap-3 p-5 md:w-48">

                    <Link
                        href={`/Exercises/${workout.id}`}
                        className="flex justify-center items-center bg-[#C2F800] text-black px-4 py-2.5 rounded-lg font-bold text-sm hover:bg-[#a2ec17] transition">
                        View Details
                    </Link>

                    <button
                        onClick={onDone}
                        className="px-4 py-2.5 rounded-lg font-bold text-sm border border-gray-700 text-[#E5E7EB] hover:border-[#C2F800] transition">
                        {isDone ? "Done" : "Mark as Done"}
                    </button>
                </div>

                <button
                    onClick={onRemove}
                    className="absolute top-3 right-3 text-[#9CA3AF] hover:text-red-400 transition">
                    <X size={20} />
                </button>

            </div>
        </div>
    );
};

export default MyPlanCard;