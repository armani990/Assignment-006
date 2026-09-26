import { IExercise } from "@/types/exercise.type";
import Image from "next/image";
import Link from "next/link";

interface IExerciseCardProps {
  exercise: IExercise;
}

const ExerciseCard = ({ exercise }: IExerciseCardProps) => {
  return (
    <div className="group overflow-hidden rounded-xl border border-zinc-800 bg-[#111217] transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700">
      
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-[#17181d]">
        <Image
          src={exercise.image}
          alt={exercise.name}
          width={800}
          height={600}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Difficulty */}
        <span className="absolute left-3 top-3 rounded-full bg-[#111217]/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-lime-400 backdrop-blur">
          {exercise.difficulty}
        </span>

        {/* Rating */}
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-[#111217]/90 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          <span className="text-lime-400">★</span>
          {exercise.rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">

        {/* Muscle Groups */}
        <div className="mb-3 flex flex-wrap gap-2">
          {exercise.muscleGroups.map((muscleGroup) => (
            <span
              key={muscleGroup}
              className="rounded-md bg-lime-400/10 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-lime-400"
            >
              {muscleGroup}
            </span>
          ))}
        </div>

        {/* Exercise Name */}
        <h3 className="line-clamp-1 text-lg font-bold text-white transition-colors group-hover:text-lime-400">
          {exercise.name}
        </h3>

        {/* Equipment */}
        <p className="mt-1 line-clamp-1 text-xs text-zinc-500">
          Equipment:{" "}
          <span className="text-zinc-400">
            {exercise.equipment}
          </span>
        </p>

        {/* Details */}
        <div className="my-4 grid grid-cols-3 border-y border-zinc-800 py-3 text-xs">

          <div>
            <p className="text-[10px] uppercase tracking-wide text-zinc-600">
              Duration
            </p>

            <p className="mt-1 font-semibold text-zinc-300">
              {exercise.duration} min
            </p>
          </div>

          <div className="border-x border-zinc-800 px-3">
            <p className="text-[10px] uppercase tracking-wide text-zinc-600">
              Calories
            </p>

            <p className="mt-1 font-semibold text-zinc-300">
              {exercise.caloriesBurned}
            </p>
          </div>

          <div className="pl-3">
            <p className="text-[10px] uppercase tracking-wide text-zinc-600">
              Sets
            </p>

            <p className="mt-1 font-semibold text-zinc-300">
              {exercise.sets} × {exercise.reps}
            </p>
          </div>

        </div>

        {/* Button */}
        <Link
          href={`/workouts/${exercise.id}`}
          className="block"
        >
          <button className="w-full rounded-lg bg-lime-400 py-2.5 text-xs font-bold uppercase tracking-wide text-black transition hover:bg-lime-300">
            View Details →
          </button>
        </Link>

      </div>
    </div>
  );
};

export default ExerciseCard;