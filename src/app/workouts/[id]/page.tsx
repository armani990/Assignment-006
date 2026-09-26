import { notFound } from "next/navigation";
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
    "https://api.api-store.workers.dev/api/fitlog",
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
    notFound();
  }

  return <ExerciseDetails exercise={exercise} />;
};

export default WorkoutDetailsPage;