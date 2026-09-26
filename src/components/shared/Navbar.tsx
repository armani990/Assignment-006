"use client";

import Image from "next/image";
import Link from "next/link";
import { useCardContext } from "@/context/CardContext";

const Navbar = () => {
  const { plan, saved } = useCardContext();

  return (
    <nav className="border-b border-zinc-800 bg-[#0b0c0f]">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Left Side */}
        <div className="flex items-center gap-2">

          {/* Mobile Hamburger */}
          <div className="dropdown md:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-sm p-1 text-zinc-300 hover:bg-zinc-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu dropdown-content z-50 mt-3 w-40 rounded-xl border border-zinc-800 bg-[#111217] p-2 shadow-xl"
            >
              <li>
                <Link
                  href="/"
                  className="text-zinc-300 hover:bg-zinc-800 hover:text-lime-400"
                >
                  Workout
                </Link>
              </li>

              <li>
                <Link
                  href="/my-plan"
                  className="text-zinc-300 hover:bg-zinc-800 hover:text-lime-400"
                >
                  My Plan
                </Link>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded">
              <Image
                src="/logo.png"
                alt="FITLOG Logo"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>

            <span className="text-[20px] font-bold tracking-wide text-white">
              FITLOG
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 rounded-full border border-zinc-800 bg-[#111217] p-1 md:flex">
          <Link
            href="/"
            className="rounded-full bg-lime-400 px-4 py-1.5 text-[11px] font-semibold text-black"
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full px-4 py-1.5 text-[11px] text-zinc-400 transition hover:text-white"
          >
            My Plan
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 text-xs">

          {/* Plan Count */}
          <Link
            href="/my-plan"
            className="rounded-full bg-lime-400 px-3 py-1.5 font-semibold text-black transition hover:bg-lime-300"
          >
            Plan {plan.length}
          </Link>

          {/* Saved Count */}
          <Link
            href="/my-plan"
            className="rounded-full border border-zinc-700 px-3 py-1.5 text-zinc-300 transition hover:border-zinc-500 hover:text-white"
          >
            Saved {saved.length}
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
