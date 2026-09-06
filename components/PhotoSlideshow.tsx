"use client";

import { useState } from "react";

export default function PhotoSlideshow({
  photos,
}: {
  photos: string[];
}) {
  const [current, setCurrent] = useState(0);

  if (!photos.length) return null;

  const nextPhoto = () => {
    setCurrent((prev) => (prev + 1) % photos.length);
  };

  const previousPhoto = () => {
    setCurrent((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="mt-8">
      <div className="relative overflow-hidden rounded-[32px] bg-white shadow-xl">
        <img
          src={photos[current]}
          alt={`Memory ${current + 1}`}
          className="h-[350px] w-full object-cover transition duration-500 sm:h-[500px]"
        />

        {photos.length > 1 && (
          <>
            <button
              onClick={previousPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-4 py-3 text-xl shadow-lg"
            >
              ←
            </button>

            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-4 py-3 text-xl shadow-lg"
            >
              →
            </button>
          </>
        )}
      </div>

      {photos.length > 1 && (
        <p className="mt-4 text-sm font-medium text-[#75696c]">
          Memory {current + 1} of {photos.length} ❤️
        </p>
      )}
    </div>
  );
}