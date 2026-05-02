import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { getCabin, getCabins } from "../../-lib/data-service";

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
  const { name, maxCapacity, image, description } = cabin;

  return (
    /* Removed px-4 on mobile to let the container breathe; md:px-8 for desktop */
    <div className="max-w-6xl mx-auto mt-8 md:mt-12 md:px-8">
      {/* Reduced rounded corners on mobile so it doesn't look like a floating pill */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-0 md:gap-12 bg-primary-900/20 md:rounded-2xl overflow-hidden border-y md:border border-primary-800 mb-16 md:mb-24 shadow-2xl">
        {/* Adjusted height for mobile: 250px feels less "tall/thin" than 300px */}
        <div className="relative h-[250px] md:h-auto md:aspect-auto">
          <Image
            src={image}
            fill
            className="object-cover"
            alt={`Cabin ${name}`}
          />
        </div>

        {/* 
           FIX: Reduced padding from p-6 to p-4 on mobile. 
           This gives the text much more horizontal space to prevent the "thin" look.
        */}
        <div className="p-5 sm:p-10 lg:p-16 flex flex-col justify-center">
          <h3 className="text-accent-100 font-black text-3xl sm:text-5xl md:text-6xl mb-4 md:mb-6 tracking-tight leading-tight">
            Cabin {name}
          </h3>

          <p className="text-base sm:text-lg text-primary-200 leading-relaxed mb-8 md:mb-10 italic">
            &quot;{description}&quot;
          </p>

          <ul className="flex flex-col gap-4 md:gap-5 mb-10">
            <li className="flex gap-4 items-center group">
              <div className="p-2 bg-primary-800/50 rounded-lg group-hover:bg-accent-600 transition-colors">
                <UsersIcon className="h-5 w-5 md:h-6 md:w-6 text-accent-100" />
              </div>
              <span className="text-base md:text-lg text-primary-100">
                Accommodates up to{" "}
                <span className="font-bold text-accent-200">{maxCapacity}</span>{" "}
                guests
              </span>
            </li>
            <li className="flex gap-4 items-center group">
              <div className="p-2 bg-primary-800/50 rounded-lg group-hover:bg-accent-600 transition-colors">
                <MapPinIcon className="h-5 w-5 md:h-6 md:w-6 text-accent-100" />
              </div>
              <span className="text-base md:text-lg text-primary-100">
                Located in the heart of the{" "}
                <span className="font-bold text-accent-200">Dolomites</span>
              </span>
            </li>
            <li className="flex gap-4 items-center group">
              <div className="p-2 bg-primary-800/50 rounded-lg group-hover:bg-accent-600 transition-colors">
                <EyeSlashIcon className="h-5 w-5 md:h-6 md:w-6 text-accent-100" />
              </div>
              <span className="text-base md:text-lg text-primary-100">
                Privacy <span className="font-bold text-accent-200">100%</span>{" "}
                guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-primary-900/40 border-y md:border border-primary-800 md:rounded-xl p-8 md:p-12 backdrop-blur-sm mx-[-1rem] md:mx-0">
        <h2 className="text-2xl sm:text-4xl font-bold text-center text-accent-50 mb-4">
          Ready to escape?
        </h2>
        <p className="text-center text-primary-300 text-lg md:text-xl">
          Reserve today. Pay on arrival.
        </p>
      </div>
    </div>
  );
}
