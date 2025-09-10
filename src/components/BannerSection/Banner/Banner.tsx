"use client";
import React, { useContext, useEffect, useState } from "react";
import BannerSingle from "../BannerSingle/BannerSingle";
import { MasterContext } from "@/context/MasterContext";

const Banner = () => {
  const { movies } = useContext(MasterContext);

  const [currentItem, setCurrentItem] = useState(1);
  const [progress, setProgress] = useState(0);
  const [countDown, setCountDown] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(0);
      setCountDown(5);
      setCurrentItem((prev) => (prev === 6 ? 1 : prev + 1));
    }, 5000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => prev + 1);
      setCountDown((prev) => (prev > 1 ? prev - 0.05 : prev));
    });

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [currentItem]);

  return (
    <>
      <div className="carousel w-full">
        {movies.map((movie, index) => (
          <BannerSingle
            key={index}
            movie={movie}
            currentItem={currentItem}
            itemIndex={index + 1}
          />
        ))}
      </div>

      <div className="flex w-full justify-center gap-2 py-2">
        {movies.map((movie, index) => (
          <a key={index} href={`#item${movie.id}`} className="btn btn-xs">
            {index + 1}
          </a>
        ))}
      </div>
    </>
  );
};

export default Banner;
