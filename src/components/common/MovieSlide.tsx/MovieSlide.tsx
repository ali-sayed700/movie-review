// interface IMovieSlide {}

import { IMovie } from "@types";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../movieCard/MovieCard";
interface IMovieSlide {
  movies: IMovie[];
  category: string;
}

const MovieSlide = ({ movies, category }: IMovieSlide) => {
  return (
    <Swiper slidesPerView="auto" spaceBetween={15} className="mySwiper ">
      {movies.map((movie) => {
        return (
          <SwiperSlide
            key={movie.id}
            className="d-felx mt-3 flex-column    "
            style={{ maxWidth: 170 }}
          >
            <MovieCard movie={movie} category={category} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MovieSlide;
