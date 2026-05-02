import Image from "next/image";
import Link from "next/link";
import bg from "../public/bg.png";

export const metadata = {
  title: "The Wild Oasis",
  description: "Book your next vacation home away from home.",
};

export default function Page() {
  return (
    <main className="mt-12 md:mt-24 px-4">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        className="object-cover"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-4xl sm:text-6xl md:text-8xl text-primary-50 mb-10 tracking-tight font-normal leading-tight">
          Welcome to paradise.
        </h1>

        <Link
          href="/cabins"
          className="inline-block bg-accent-500 px-6 py-4 md:px-8 md:py-6 text-primary-800 text-base md:text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
