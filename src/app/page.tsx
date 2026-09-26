import Banner from "@/components/homepage/Banner";
import Exercise from "@/components/homepage/Exercise";
import React, { Suspense } from "react";

const ExerciseLoading = () => {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <div className="h-4 w-28 animate-pulse rounded bg-zinc-800" />
          <div className="mt-3 h-10 w-52 animate-pulse rounded bg-zinc-800" />
          <div className="mt-3 h-4 w-80 max-w-full animate-pulse rounded bg-zinc-800" />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-zinc-800 bg-[#111217]"
            >
              <div className="h-52 animate-pulse bg-zinc-800" />

              <div className="space-y-3 p-4">
                <div className="h-5 w-24 animate-pulse rounded bg-zinc-800" />
                <div className="h-6 w-40 animate-pulse rounded bg-zinc-800" />
                <div className="h-4 w-32 animate-pulse rounded bg-zinc-800" />

                <div className="grid grid-cols-3 gap-2 border-y border-zinc-800 py-3">
                  <div className="h-8 animate-pulse rounded bg-zinc-800" />
                  <div className="h-8 animate-pulse rounded bg-zinc-800" />
                  <div className="h-8 animate-pulse rounded bg-zinc-800" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Page = () => {
  return (
    <div>
      <Banner />

      <Suspense fallback={<ExerciseLoading />}>
        <Exercise />
      </Suspense>
    </div>
  );
};

export default Page;

