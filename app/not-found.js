import { HomeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-center px-4 pb-24">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <span className="text-[20vw] font-black text-primary-900 select-none">
          404
        </span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center">
        <h1 className="text-6xl md:text-8xl font-black text-accent-100 mb-6 tracking-tight">
          Lost in the Wilderness
        </h1>

        <p className="text-xl md:text-2xl text-primary-200 max-w-2xl mb-12 leading-relaxed">
          The page you are looking for has vanished. It seems the trail has gone
          cold, or this cabin has moved deep into the woods.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-4 bg-accent-500 hover:bg-accent-600 text-primary-800 px-2 py-3 md:px-12 md:py-5 font-bold transition-all duration-300 rounded-full hover:shadow-2xl active:scale-95"
        >
          <HomeIcon className="h-7 w-7" />
          <span>Return to the Oasis</span>
        </Link>
      </div>
    </main>
  );
}
