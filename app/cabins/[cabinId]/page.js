import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { getCabin, getCabins } from "../../-lib/data-service";

export async function generateMetadata({ params }) {
  const cabin = await getCabin(params.cabinId);

  return {
    title: ` The Wild Oasis | Cabin ${cabin.name}`,
    description: cabin.description,
  };
}

export async function generateStaticParams() {
  const cabins = await getCabins();

  const ids = cabins.map((cabin) => ({
    cabinId: cabin.id.toString(),
  }));

  return ids;
}

export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinId);
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="max-w-6xl mx-auto mt-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 bg-primary-900/20 rounded-2xl overflow-hidden border border-primary-800 mb-24 shadow-2xl">
        {/* Image Section */}
        <div className="relative aspect-square md:aspect-auto min-h-[400px]">
          <Image
            src={image}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            alt={`Cabin ${name}`}
          />
        </div>

        {/* Content Section */}
        <div className="p-10 lg:p-16 flex flex-col justify-center">
          <div className="relative">
            <h3 className="text-accent-100 font-black text-5xl md:text-6xl mb-6 tracking-tight">
              Cabin {name}
            </h3>
          </div>

          <p className="text-lg text-primary-200 leading-relaxed mb-10 italic">
            &quot;{description}&quot;
          </p>

          <ul className="grid grid-cols-1 gap-5 mb-10">
            <li className="flex gap-4 items-center group">
              <div className="p-2 bg-primary-800/50 rounded-lg group-hover:bg-accent-600 transition-colors">
                <UsersIcon className="h-6 w-6 text-accent-100" />
              </div>
              <span className="text-lg text-primary-100">
                Accommodates up to{" "}
                <span className="font-bold text-accent-200">{maxCapacity}</span>{" "}
                guests
              </span>
            </li>

            <li className="flex gap-4 items-center group">
              <div className="p-2 bg-primary-800/50 rounded-lg group-hover:bg-accent-600 transition-colors">
                <MapPinIcon className="h-6 w-6 text-accent-100" />
              </div>
              <span className="text-lg text-primary-100">
                Located in the heart of the{" "}
                <span className="font-bold text-accent-200">Dolomites</span>
              </span>
            </li>

            <li className="flex gap-4 items-center group">
              <div className="p-2 bg-primary-800/50 rounded-lg group-hover:bg-accent-600 transition-colors">
                <EyeSlashIcon className="h-6 w-6 text-accent-100" />
              </div>
              <span className="text-lg text-primary-100">
                Privacy <span className="font-bold text-accent-200">100%</span>{" "}
                guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-primary-900/40 border border-primary-800 rounded-xl p-12 backdrop-blur-sm">
        <h2 className="text-4xl font-bold text-center text-accent-50 mb-4">
          Ready to escape?
        </h2>
        <p className="text-center text-primary-300 text-xl">
          Reserve today. Pay on arrival.
        </p>
      </div>
    </div>
  );
}
