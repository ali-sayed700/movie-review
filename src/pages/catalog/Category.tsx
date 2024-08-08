import { useState, useEffect } from "react";

import CataHeader from "./components/CataHeader";
import { useGetMoviesQuery } from "@store/store";
import { useParams, useSearchParams } from "react-router-dom";
import { IMovie } from "@types";
import { Loading } from "@components/feedback";
import { MovieCard } from "@components/common";
import styles from "./components/styles.module.css";
import { Spinner } from "react-bootstrap";
import Search from "./components/search";

const { cataMovieCard, btn } = styles;
// interface ICategory {}

const Category = () => {
  const [page, setPage] = useState(1);

  const [shows, setShows] = useState<IMovie[]>([]);
  const { category } = useParams();

  const [query, setQuery] = useSearchParams();

  const type = query.get("type") || "popular";
  const searchQuery = query.get("searches") || "";

  const { data, isLoading, isFetching, isError, error } = useGetMoviesQuery({
    category,
    page,
    searchQuery,
    type,
  });
  useEffect(() => {
    setPage(1);
  }, [category, searchQuery]);

  useEffect(() => {
    if (isLoading || isFetching) return;
    if (data?.results) {
      if (page > 1) {
        setShows((prev) => [...prev, ...data.results]);
      } else {
        setShows([...data.results]);
      }
    }
  }, [data, isFetching, isLoading, page]);

  return (
    <div>
      <CataHeader category={category as string} />
      <section className="container">
        <Search setQuery={setQuery} />
        <Loading isError={isError} error={error} isLoading={isFetching}>
          <div className="d-flex justify-content-center flex-wrap gap-4 gap-md-5">
            {shows?.map((movie, index) => (
              <div key={index} className={` ${cataMovieCard}`}>
                <MovieCard movie={movie} category={category as string} />
              </div>
            ))}
          </div>
        </Loading>

        <div className="d-flex aligns-items-center justify-content-center py-4">
          <button
            onClick={() => setPage(page + 1)}
            disabled={isFetching}
            className={`btn btn-danger ${btn}`}
          >
            {isFetching && (
              <Spinner animation="border" size="sm" variant="primary" />
            )}{" "}
            load more
          </button>
        </div>
      </section>
    </div>
  );
};

export default Category;
