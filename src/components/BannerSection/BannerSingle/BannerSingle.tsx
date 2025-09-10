import { Movie } from "@/types/MovieType";
import Image from "next/image";
import React from "react";

interface BannerSingleProps {
  movie: Movie;
  currentItem: number;
  itemIndex: number;
}

const BannerSingle: React.FC<BannerSingleProps> = ({
  movie,
  currentItem,
  itemIndex,
}) => {
  return (
    <div id={`item${movie.id}`} className="carousel-item w-full">
      <Image
        width={500}
        height={500}
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        className="w-full"
        alt="banner"
      />
    </div>
  );
};

export default BannerSingle;
