import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    /* 
       FIX 1: Change 'flex' to 'flex-col' for mobile, and 'md:flex-row' for desktop. 
       This prevents the image and text from squeezing each other on small screens.
    */
    <div className="flex flex-col md:flex-row border-primary-800 border">
      {/* 
         FIX 2: Added a fixed aspect ratio or height for the mobile view. 
         'aspect-square' or 'aspect-video' ensures the image isn't squished. 
         'md:flex-1' restores the side-by-side behavior on larger screens.
      */}
      <div className="relative aspect-video md:aspect-auto md:flex-1">
        <Image
          src={image}
          fill
          alt={`Cabin ${name}`}
          /* 'object-cover' is already here, which is perfect for maintaining proportions */
          className="object-cover border-b md:border-b-0 md:border-r border-primary-800"
        />
      </div>

      <div className="flex-grow">
        <div className="pt-5 pb-4 px-7 bg-primary-950">
          <h3 className="text-accent-500 font-semibold text-2xl mb-3">
            Cabin {name}
          </h3>

          <div className="flex gap-3 items-center mb-2">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <p className="text-lg text-primary-200">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>

          <p className="flex gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-3xl font-[350]">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-600">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350]">${regularPrice}</span>
            )}
            <span className="text-primary-200">/ night</span>
          </p>
        </div>

        <div className="bg-primary-950 border-t border-t-primary-800 text-right">
          <Link
            href={`/cabins/${id}`}
            className="border-l border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
