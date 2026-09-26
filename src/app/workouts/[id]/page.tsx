import { IExercise } from "@/types/exercise.type";
import ExerciseDetails from "@/components/ExerciseDetails/ExerciseDetails";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const WorkoutDetailsPage = async ({ params }: PageProps) => {
  const { id } = await params;

  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog",
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const exercises: IExercise[] = await response.json();

  const exercise = exercises.find(
    (item) => item.id === Number(id)
  );

  if (!exercise) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-black uppercase text-white">
            Workout Not Found
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            The workout you are looking for does not exist.
          </p>
        </div>
      </section>
    );
  }

  return <ExerciseDetails exercise={exercise} />;
};

export default WorkoutDetailsPage;

