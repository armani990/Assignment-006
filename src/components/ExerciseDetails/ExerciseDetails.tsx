import { IExercise } from "@/types/exercise.type";
import Link from "next/link";
interface ExerciseDetailsProps {
  exercise: IExercise;
}

const ExerciseDetails = ({ exercise }: ExerciseDetailsProps) => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Back */}
      <Link
  href="/"
  className="mb-6 inline-block text-sm text-zinc-400 transition hover:text-lime-400"
>
  ← Back to Library
</Link>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Image */}
        <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
          <img
            src={exercise.image}
            alt={exercise.name}
            className="h-full min-h-[350px] w-full object-cover"
          />
        </div>

        {/* Details */}
        <div>
          <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-lime-400">
            WORKOUT DETAILS
          </p>

          <h1 className="text-3xl font-black uppercase text-white sm:text-4xl">
            {exercise.name}
          </h1>

          <p className="mt-4 text-sm leading-6 text-zinc-400">
            {exercise.description}
          </p>

          {/* Muscle Groups */}
          <div className="mt-5 flex flex-wrap gap-2">
            {exercise.muscleGroups.map((muscle, index) => (
              <span
                key={`${muscle}-${index}`}
                className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Specs */}
          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <InfoBox label="Equipment" value={exercise.equipment} />
            <InfoBox label="Difficulty" value={exercise.difficulty} />
            <InfoBox label="Sets" value={exercise.sets.toString()} />
            <InfoBox label="Reps" value={exercise.reps} />
            <InfoBox
              label="Duration"
              value={`${exercise.duration} min`}
            />
            <InfoBox
              label="Calories"
              value={`${exercise.caloriesBurned} kcal`}
            />
            <InfoBox
              label="Rating"
              value={`★ ${exercise.rating}`}
            />
          </div>

          {/* Instructions */}
          <div className="mt-8">
            <h2 className="text-lg font-bold uppercase text-white">
              Instructions
            </h2>

            <div className="mt-4 space-y-3">
              {exercise.instructions.map((instruction, index) => (
                <div
                  key={index}
                  className="flex gap-3 rounded-lg border border-zinc-800 bg-zinc-900/60 p-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime-400 text-xs font-bold text-black">
                    {index + 1}
                  </span>

                  <p className="text-sm leading-6 text-zinc-400">
                    {instruction}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons - Function will be added later */}
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-lg bg-lime-400 px-5 py-3 text-sm font-bold uppercase text-black transition hover:bg-lime-300"
            >
              Add to today&apos;s plan
            </button>

            <button
              type="button"
              className="rounded-lg border border-zinc-700 px-5 py-3 text-sm font-bold uppercase text-white transition hover:border-lime-400 hover:text-lime-400"
            >
              Save for later
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

interface InfoBoxProps {
  label: string;
  value: string;
}

const InfoBox = ({ label, value }: InfoBoxProps) => {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
        {label}
      </p>

      <p className="mt-2 text-sm font-semibold text-white">
        {value}
      </p>
    </div>
  );
};

export default ExerciseDetails;
