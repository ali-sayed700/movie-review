// interface ISwiperHome {}

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { IMovie } from "@types";
type TMovie = { movies: IMovie[] };
import SlideHome from "./SlideHome";
import styles from "./styles.module.css";

const { mySwiper } = styles;

const SwiperHome = ({ movies }: TMovie) => {
  return (
    <Swiper className={mySwiper} modules={[Autoplay]}>
      {movies.map((movie: any) => (
        <SwiperSlide
          key={movie.id}
          className={` h-100 w-100`}
          style={{
            backgroundImage: `
              linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.5)),url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}'`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          {({ isActive }) => (isActive ? <SlideHome movie={movie} /> : null)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperHome;
