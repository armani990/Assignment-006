"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useCardContext } from "@/context/CardContext";

const MyPlan = () => {
  const [activeTab, setActiveTab] = useState("Today's Plan");
  const [sortBy, setSortBy] = useState("Duration");

  const {
    plan,
    saved,
    removeFromPlan,
    removeFromSaved,
  } = useCardContext();

  const currentExercises =
    activeTab === "Today's Plan" ? plan : saved;

  const sortedExercises = useMemo(() => {
    const exercises = [...currentExercises];

    if (sortBy === "Duration") {
      return exercises.sort(
        (a, b) => a.duration - b.duration
      );
    }

    if (sortBy === "Calories") {
      return exercises.sort(
        (a, b) => a.caloriesBurned - b.caloriesBurned
      );
    }

    if (sortBy === "Rating") {
      return exercises.sort(
        (a, b) => b.rating - a.rating
      );
    }

    if (sortBy === "Name") {
      return exercises.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    return exercises;
  }, [currentExercises, sortBy]);

  const planStats = {
    exercises: plan.length,
    minutes: plan.reduce(
      (total, exercise) =>
        total + exercise.duration,
      0
    ),
    calories: plan.reduce(
      (total, exercise) =>
        total + exercise.caloriesBurned,
      0
    ),
  };

  const handleRemove = (id: number) => {
    if (activeTab === "Today's Plan") {
      removeFromPlan(id);
    } else {
      removeFromSaved(id);
    }
  };

  return (
    <section className="mx-auto min-h-[calc(100vh-96px)] max-w-[1400px] px-3 py-5 sm:px-6 lg:px-8 animate-[pageIn_0.45s_ease-out]">

      {/* Heading */}
      <div>
        <h1 className="text-xl font-black uppercase tracking-tight text-white sm:text-2xl">
          My Plan
        </h1>

        <p className="mt-1 text-[9px] text-zinc-500 sm:text-[10px]">
          Clip of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Stats */}
      <div className="mt-5 grid grid-cols-3 overflow-hidden rounded-lg border border-zinc-800 bg-[#17181d]">
        <StatItem
          label="Exercises"
          value={planStats.exercises}
          border
        />

        <StatItem
          label="Minutes"
          value={planStats.minutes}
          border
        />

        <StatItem
          label="Calories"
          value={planStats.calories}
        />
      </div>

      {/* Tabs + Sort */}
      <div className="mt-4 flex items-center justify-between">

        <div className="flex items-center rounded-md border border-zinc-800 bg-[#17181d] p-0.5">

          <button
            type="button"
            onClick={() =>
              setActiveTab("Today's Plan")
            }
            className={`rounded px-3 py-1.5 text-[8px] transition-all duration-300 ${
              activeTab === "Today's Plan"
                ? "bg-[#242630] text-lime-400 shadow-sm"
                : "text-zinc-600 hover:text-white"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("Saved")}
            className={`rounded px-3 py-1.5 text-[8px] transition-all duration-300 ${
              activeTab === "Saved"
                ? "bg-[#242630] text-lime-400 shadow-sm"
                : "text-zinc-600 hover:text-white"
            }`}
          >
            Saved
          </button>

        </div>

        <label className="flex items-center gap-1.5 text-[8px] text-zinc-600">

          Sort by

          <select
            value={sortBy}
            onChange={(event) =>
              setSortBy(event.target.value)
            }
            className="rounded border border-zinc-800 bg-[#17181d] px-2 py-1 text-[8px] text-zinc-400 outline-none transition focus:border-lime-400/50"
          >
            <option value="Duration">
              Duration
            </option>

            <option value="Calories">
              Calories
            </option>

            <option value="Rating">
              Rating
            </option>

            <option value="Name">
              Name
            </option>
          </select>

        </label>
      </div>

      {/* Empty State */}
      {sortedExercises.length === 0 ? (

        <div className="mt-3 flex min-h-[310px] flex-col items-center justify-center rounded-lg border border-zinc-900 bg-[#101115] text-center animate-[pageIn_0.35s_ease-out]">

          <h2 className="text-[11px] font-black uppercase tracking-wide text-white">
            Nothing here yet
          </h2>

          <p className="mt-2 max-w-xs text-[8px] leading-4 text-zinc-600">
            Browse the library and add a few good moves.
          </p>

          <Link
            href="/"
            className="mt-4 rounded bg-lime-400 px-3 py-2 text-[8px] font-bold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-lime-300 active:scale-95"
          >
            Go to workouts
          </Link>

        </div>

      ) : (

        <div className="mt-3 grid gap-3 md:grid-cols-2">

          {sortedExercises.map((exercise, index) => (

            <div
              key={exercise.id}
              style={{
                animationDelay: `${index * 60}ms`,
              }}
              className="flex gap-4 rounded-lg border border-zinc-800 bg-[#111217] p-3 opacity-0 animate-[cardIn_0.4s_ease-out_forwards] transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-700"
            >

              <img
                src={exercise.image}
                alt={exercise.name}
                className="h-24 w-24 shrink-0 rounded-md object-cover transition-transform duration-500 hover:scale-105"
              />

              <div className="min-w-0 flex-1">

                <h3 className="truncate text-sm font-bold uppercase text-white">
                  {exercise.name}
                </h3>

                <p className="mt-1 text-[9px] text-zinc-500">
                  {exercise.equipment}
                </p>

                <div className="mt-3 flex flex-wrap gap-3 text-[9px] text-zinc-500">
                  <span>
                    {exercise.duration} min
                  </span>

                  <span>
                    {exercise.caloriesBurned} kcal
                  </span>

                  <span>
                    ★ {exercise.rating}
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">

                  <Link
                    href={`/workouts/${exercise.id}`}
                    className="rounded bg-lime-400 px-3 py-1.5 text-[8px] font-bold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-lime-300 active:scale-95"
                  >
                    View Details
                  </Link>

                  <button
                    type="button"
                    onClick={() =>
                      handleRemove(exercise.id)
                    }
                    className="rounded border border-zinc-700 px-3 py-1.5 text-[8px] text-zinc-400 transition-all duration-200 hover:border-red-400 hover:text-red-400 active:scale-95"
                  >
                    Remove
                  </button>

                </div>

              </div>
            </div>

          ))}

        </div>

      )}
    </section>
  );
};

interface StatItemProps {
  label: string;
  value: number;
  border?: boolean;
}

const StatItem = ({
  label,
  value,
  border = false,
}: StatItemProps) => {
  return (
    <div
      className={`px-4 py-4 sm:px-8 ${
        border ? "border-r border-zinc-800" : ""
      }`}
    >
      <p className="text-[8px] uppercase tracking-wide text-zinc-600">
        {label}
      </p>

      <p className="mt-1 text-2xl font-black leading-none text-white sm:text-3xl">
        {value}
      </p>
    </div>
  );
};

export default MyPlan;