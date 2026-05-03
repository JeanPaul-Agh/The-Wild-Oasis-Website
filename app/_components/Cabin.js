import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import TextExpander from "./TextExpander";

function Cabin({ cabin }) {
  const { name, maxCapacity, image, description } = cabin;

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-0 md:gap-12 bg-primary-900/20 md:rounded-2xl overflow-hidden border-y md:border border-primary-800 mb-16 md:mb-24 shadow-2xl">
      <div className="relative h-[250px] md:h-auto md:aspect-auto">
        <Image
          src={image}
          fill
          className="object-cover"
          alt={`Cabin ${name}`}
        />
      </div>

      <div className="p-5 sm:p-10 lg:p-16 flex flex-col justify-center">
        <h3 className="text-accent-100 font-black text-3xl sm:text-5xl md:text-6xl mb-4 md:mb-6 tracking-tight leading-tight">
          Cabin {name}
        </h3>

        <p className="text-base sm:text-lg text-primary-200 leading-relaxed mb-8 md:mb-10 italic">
          &quot;<TextExpander>{description}</TextExpander>&quot;
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
  );
}

export default Cabin;
