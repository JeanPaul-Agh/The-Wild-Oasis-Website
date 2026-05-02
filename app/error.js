"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export default function Error({ error }) {
  const router = useRouter();

  return (
    <main className="min-h-[60vh] flex flex-col justify-center items-center px-4">
      <div className="bg-primary-900/30 border border-primary-800 p-12 rounded-2xl backdrop-blur-md max-w-2xl w-full text-center shadow-2xl">
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
            />
          </svg>
        </div>

        <h1 className="text-4xl font-black text-accent-100 mb-4 tracking-tight">
          Something went wrong!
        </h1>

        <p className="text-xl text-primary-200 mb-10 leading-relaxed">
          {error.message ||
            "We encountered an unexpected error while loading this page."}
        </p>

        <button
          className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-primary-800 px-10 py-4 text-lg font-semibold transition-all duration-300 rounded-lg hover:shadow-lg active:scale-95 mx-auto"
          onClick={() => router.back()}
        >
          <ArrowLeftIcon className="h-5 w-5" />
          <span>Go back</span>
        </button>
      </div>
    </main>
  );
}
