import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-b border-zinc-800 bg-[#0b0c0f]">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded">
            <Image
              src="/logo.png"
              alt="FITLOG Logo"
              width={24}
              height={24}
              className="object-contain"
            />
          </div>

          <span className="text-sm font-bold tracking-wide text-white">
            FITLOG
          </span>
        </Link>

        {/* Center Navigation */}
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
          
          {/* Plan */}
          <Link
            href="/my-plan"
            className="rounded-full bg-lime-400 px-3 py-1.5 font-semibold text-black transition hover:bg-lime-300"
          >
            Plan
          </Link>

          {/* Saved */}
          <Link
            href="/my-plan"
            className="rounded-full border border-zinc-700 px-3 py-1.5 text-zinc-300 transition hover:border-zinc-500 hover:text-white"
          >
            Saved
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;