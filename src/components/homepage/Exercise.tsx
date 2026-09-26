import { IExercise } from "@/types/exercise.type";
import ExerciseCard from "@/components/shared/ExerciseCard";

const Exercise = async () => {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog",
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch exercises");
  }

  const exercises: IExercise[] = await response.json();

  return (
    <section id="library" className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-lime-400">
            Workout Library
          </p>

          <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
            The Library
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Exercise Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exercises.map((exercise) => (
            <ExerciseCard
              key={exercise.id}
              exercise={exercise}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exercise;