import Reservation from "@/app/_components/Reservation";
import { Suspense } from "react";
import { getCabin, getCabins } from "../../-lib/data-service";
import Cabin from "../../_components/Cabin";
import Loading from "./loading";

export async function generateMetadata({ params }) {
  const cabin = await getCabin(params.cabinId);
  return {
    title: `The Wild Oasis | Cabin ${cabin.name}`,
    description: cabin.description,
  };
}

export async function generateStaticParams() {
  const cabins = await getCabins();
  return cabins.map((cabin) => ({ cabinId: cabin.id.toString() }));
}

export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinId);

  return (
    <div className="max-w-6xl mx-auto mt-8 md:mt-12 md:px-8">
      {/* Cabin Details Section */}
      <Cabin cabin={cabin} />

      {/* Reservation Section */}
      <div className="mb-20">
        <h2 className="text-2xl sm:text-4xl font-bold text-center text-accent-50 mb-4">
          Ready to escape?
        </h2>
        <p className="text-center text-primary-300 text-lg md:text-xl mb-12">
          Reserve Cabin {cabin.name} today. Pay on arrival.
        </p>

        <Suspense fallback={<Loading />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
