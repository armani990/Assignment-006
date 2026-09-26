import Image from "next/image";

const Banner = () => {
  return (
    <section className="px-4 pb-10 pt-6 sm:px-6 sm:pb-12 sm:pt-6 lg:px-8">
      <div className="mx-auto overflow-hidden rounded-xl border border-zinc-800 bg-[#17181d]">
        <div className="grid min-h-[240px] grid-cols-2 items-center sm:min-h-[340px] lg:min-h-[430px]">

          {/* Banner Content */}
          <div className="relative z-10 px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
            <p className="mb-3 text-[7px] font-semibold uppercase tracking-[0.18em] text-lime-400 sm:mb-5 sm:text-[9px]">
              Workout Library
            </p>

            <h1 className="max-w-[280px] text-2xl font-black uppercase leading-[0.95] tracking-tight text-white sm:max-w-[500px] sm:text-4xl lg:text-6xl">
              Train with intent. Log every set.
            </h1>

            <p className="mt-4 max-w-[280px] text-[9px] leading-4 text-zinc-500 sm:mt-6 sm:max-w-[420px] sm:text-xs sm:leading-5">
              FITLOG is a sleek, no-nonsense gym companion. Pick a lift, lock
              it into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            <a
              href="#library"
              className="mt-5 inline-flex h-8 items-center rounded bg-lime-400 px-4 text-[8px] font-bold uppercase text-black transition hover:bg-lime-300 sm:mt-7 sm:h-10 sm:px-5 sm:text-[10px]"
            >
              Browse workouts
            </a>
          </div>

          {/* Banner Image */}
          <div className="flex h-full min-h-[240px] items-center justify-center px-4 py-8 sm:min-h-[340px] sm:px-7 sm:py-10 lg:min-h-[430px] lg:px-10 lg:py-14">
            <Image
              src="/banner.png"
              alt="Workout athlete"
              width={650}
              height={500}
              priority
              className="h-auto w-full max-w-[650px] object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;