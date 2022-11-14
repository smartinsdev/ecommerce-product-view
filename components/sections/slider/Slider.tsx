import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { images } from "../../../constants";

let countIndex = 0;

export function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    slideRef.current?.addEventListener("animationend", removeAnimation);

    return () =>
      slideRef.current?.removeEventListener("animationend", removeAnimation);
  }, []);

  const removeAnimation = () => {
    slideRef.current?.classList.remove("fade-in");
  };

  const handleNextImage = () => {
    countIndex = (countIndex + 1) % images.length;
    setCurrentIndex(countIndex);
    slideRef.current?.classList.add("fade-in");
  };
  const handlePrevieuImage = () => {
    const productsLength = images.length;
    countIndex = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(countIndex);
    slideRef.current?.classList.add("fade-in");
  };

  const handleIndicatorImage = (index: number) => {
    setCurrentIndex(index);
    slideRef.current?.classList.add("fade-in");
  };

  return (
    <article className="flex items-start justify-center md:space-y-4 md:flex-col md:items-center md:justify-start">
      <div
        ref={slideRef}
        className="relative w-full h-[90%] overflow-hidden sm:w-2/3 sm:rounded-xl md:h-[70%] lg:h-full"
      >
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="max-w-full h-full w-full block object-cover object-center"
        />
        <div className="px-3 absolute top-1/2 -translate-y-1/2  w-full flex items-center justify-between md:hidden">
          <button
            className="w-10 h-10 rounded-full bg-white text-neutral-400 flex items-center justify-center"
            onClick={handlePrevieuImage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            className="w-10 h-10 rounded-full bg-white text-neutral-400 flex items-center justify-center"
            onClick={handleNextImage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <ul className="hidden md:flex justify-between w-2/3">
        {images.map((image, index) => (
          <li
            key={image.id}
            className={`w-14 h-14 rounded-md overflow-hidden lg:w-20 lg:h-20 ${
              currentIndex === index ? "border-4 border-primary opacity-60" : ""
            }`}
            onClick={() => handleIndicatorImage(index)}
          >
            <Image
              src={image.thumbnail}
              alt={image.alt}
              className="w-full h-full max-w-full block object-cover"
            />
          </li>
        ))}
      </ul>
    </article>
  );
}
