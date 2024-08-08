import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useGetMoviesQuery } from "@store/store";
import { memo, useRef } from "react";
import { useInView } from "framer-motion";
import MovieSlide from "../MovieSlide.tsx/MovieSlide";
import Loading from "@components/feedback/loading/Loading";
const { section } = styles;
interface ISection {
  title: string;
  category: string;
  type?: string;
  id?: number;
  showSimilarShows?: boolean;
}

const Section = ({ title, category, showSimilarShows, type, id }: ISection) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, {
    margin: "420px",
    once: true,
  });

  const {
    data = { results: [] },
    isLoading,
    isError,
    error,
  } = useGetMoviesQuery(
    {
      showSimilarShows,
      id,
      category,
      type,
      page: 1,
    },
    {
      skip: !inView,
    }
  );

  return (
    <section className={`${section} `} ref={ref}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fs-4  text-white textColor">{title}</h3>
        {!showSimilarShows && (
          <Link className="btnSection" to={`/${category}?type=${type}`}>
            view all
          </Link>
        )}
      </div>

      <Loading isError={isError} error={error} isLoading={isLoading}>
        <MovieSlide movies={data.results.slice(0, 10)} category={category} />
      </Loading>
    </section>
  );
};

export default memo(Section);
