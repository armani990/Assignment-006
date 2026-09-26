"use client";

import { useEffect, useState } from "react";
import { IExercise } from "@/types/exercise.type";
import ExerciseCard from "@/components/shared/ExerciseCard";

const Exercise = () => {
  const [exercises, setExercises] = useState<IExercise[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch(
          "https://api.api-store.workers.dev/api/fitlog"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch exercises");
        }

        const data: IExercise[] = await response.json();

        setExercises(data);
      } catch (error) {
        console.error("Failed to fetch exercises:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, []);

  if (loading) {
    return (
      <section
        id="library"
        className="px-4 py-10 sm:px-6 lg:px-8"
      >
        <div className="mx-auto flex min-h-[400px] max-w-7xl items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center">

            {/* Loading Spinner */}
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-zinc-800 border-t-lime-400" />

            {/* Loading Text */}
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Loading workouts...
            </p>

            {/* Small Animation */}
            <div className="mt-3 flex items-center gap-1">
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-lime-400 [animation-delay:-0.3s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-lime-400 [animation-delay:-0.15s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-lime-400" />
            </div>

          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="library"
      className="px-4 py-10 sm:px-6 lg:px-8"
    >
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
