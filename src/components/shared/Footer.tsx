import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="border-t border-zinc-900 bg-[#0b0c0f]">
      <div className="mx-auto flex min-h-14 max-w-[1400px] items-center justify-between px-3 sm:px-6 lg:px-8">

        {/* Footer Logo */}
        <Link href="/" className="flex items-center gap-1.5">
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

        {/* Copyright */}
        <p className="text-right text-[14px] text-zinc-600">
          © 2026 FITLOG — Workout Library. Train hard, stay consistent.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
