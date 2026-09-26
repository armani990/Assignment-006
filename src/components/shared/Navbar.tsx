"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCardContext } from "@/context/CardContext";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const { plan, saved } = useCardContext();

  const isWorkoutActive = pathname === "/";
  const isMyPlanActive = pathname === "/my-plan";

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    closeMenu();

    if (pathname === "/") {
      event.preventDefault();
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900 bg-[#0b0c0f]/95 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-3 sm:px-6 lg:px-8">

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen((previous) => !previous)}
            className="btn btn-ghost btn-sm px-2 text-white transition-transform duration-200 active:scale-90"
            aria-label="Open menu"
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
                d={
                  menuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Logo + FITLOG */}
        <Link
          href="/"
          onClick={handleLogoClick}
          className="flex items-center gap-2 transition-transform duration-200 hover:scale-[1.03] active:scale-95"
        >
          <Image
            src="/logo.png"
            alt="FITLOG"
            width={120}
            height={40}
            priority
            className="h-auto w-[30px] sm:w-[34px]"
          />

          <span className="text-[20px] font-black tracking-[0.12em] text-white sm:text-bold">
            FITLOG
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex">

          <Link
            href="/"
            className={`relative rounded-lg px-4 py-2 text-xs font-semibold transition-all duration-300 ${
              isWorkoutActive
                ? "bg-lime-400 text-black shadow-[0_0_18px_rgba(163,230,53,0.15)]"
                : "text-zinc-500 hover:bg-zinc-900 hover:text-white"
            }`}
          >
            Workout

            {isWorkoutActive && (
              <span className="absolute inset-0 -z-10 rounded-lg bg-lime-400/20 blur-md" />
            )}
          </Link>

          <Link
            href="/my-plan"
            className={`relative rounded-lg px-4 py-2 text-xs font-semibold transition-all duration-300 ${
              isMyPlanActive
                ? "bg-lime-400 text-black shadow-[0_0_18px_rgba(163,230,53,0.15)]"
                : "text-zinc-500 hover:bg-zinc-900 hover:text-white"
            }`}
          >
            My Plan

            {isMyPlanActive && (
              <span className="absolute inset-0 -z-10 rounded-lg bg-lime-400/20 blur-md" />
            )}
          </Link>

        </div>

        {/* Plan + Saved */}
        <div className="flex items-center gap-2">

          <div className="rounded-full border border-lime-400/20 bg-lime-400/10 px-6 py-3 text-[13px] font-bold text-lime-400">
            Plan{" "}
            <span className="ml-1 inline-block">
              {plan.length}
            </span>
          </div>

          <div className="rounded-full border border-zinc-700 px-6 py-3 text-[13px] font-bold text-zinc-400">
            Saved{" "}
            <span className="ml-1 inline-block">
              {saved.length}
            </span>
          </div>

        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-zinc-900 bg-[#0b0c0f] transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-40 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-1 px-3 py-3">

          <Link
            href="/"
            onClick={closeMenu}
            className={`block rounded-lg px-4 py-3 text-xs font-semibold transition-all duration-300 ${
              isWorkoutActive
                ? "bg-lime-400 text-black"
                : "text-zinc-500 hover:bg-zinc-900 hover:text-white"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            onClick={closeMenu}
            className={`block rounded-lg px-4 py-3 text-xs font-semibold transition-all duration-300 ${
              isMyPlanActive
                ? "bg-lime-400 text-black"
                : "text-zinc-500 hover:bg-zinc-900 hover:text-white"
            }`}
          >
            My Plan
          </Link>

        </div>
      </div>
    </header>
  );
};

export default Navbar;