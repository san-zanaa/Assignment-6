"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock4, Flame, Star, X, Check } from "lucide-react";
import { Exercise } from "@/types/cards.types";

interface MyPlanCardProps {
    workout: Exercise;
    type: "plan" | "saved";
    isDone?: boolean;
    onDone?: () => void;
    onRemove: () => void;
}
const MyPlanCard = ({
    workout,
    type,
    isDone = false,
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
                        <h2
                            className={`text-xl font-bold uppercase ${isDone ? "line-through" : ""}`}>
                            {workout.name}
                        </h2>
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

                <div className="flex flex-row items-center gap-5 p-5 md:w-auto">
                    <Link
                        href={`/Exercises/${workout.id}`}
                        className="flex justify-center items-center px-4 py-2.5 rounded-full font-bold text-sm transition border border-gray-700 hover:border-[#C2F800] hover:-translate-y-1 shrink-0">
                        View Details
                    </Link>
                    {type === "plan" && (
                        <button
                            onClick={onDone}
                            disabled={isDone}
                            className={`px-4 py-2.5 flex items-center gap-2 rounded-full font-bold text-sm transition cursor-pointer whitespace-nowrap shrink-0 ${isDone
                                ? "bg-gray-700 text-gray-300 cursor-default"
                                : "bg-[#C2F800] text-black hover:bg-[#a2ec17] hover:-translate-y-1"}`}>
                            <Check size={18} />
                            <span>
                                {isDone ? "Done" : "Mark as Done"}
                            </span>
                        </button>
                    )}
                    <button
                        onClick={onRemove}
                        className="text-[#9CA3AF] hover:text-red-400 transition cursor-pointer shrink-0">
                        <X size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyPlanCard;