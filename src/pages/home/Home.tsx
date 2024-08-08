import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { Section } from "@components/common";
import { Loading } from "@components/feedback";
import SwiperHome from "@pages/home/components/SwiperHome";

import { sections } from "@data/index";
import { useGetMoviesQuery } from "@store/store";
import { IMovie } from "@types";

import styles from "./components/styles.module.css";
const { lottErrStyle } = styles;
const Home = () => {
  const [items, setItems] = useState<IMovie[]>([]);
  const { data, isError, error, isLoading } = useGetMoviesQuery({
    category: "movie",
    type: "popular",
    page: 1,
  });

  useEffect(() => {
    if (isLoading || isError) return;
    if (data.results) {
      setItems(data.results);
    }
  }, [isLoading, isError, data]);

  const popularMovies = items.slice(0, 5);

  return (
    <>
      <Loading isError={isError} error={error} className={lottErrStyle}>
        <SwiperHome movies={popularMovies} />
        <Container className="mt-lg-5 mt-md-3 mt-sm-2 mt-4">
          {sections.map(({ title, category, type }) => (
            <Section
              title={title}
              category={category}
              type={type}
              key={title}
            />
          ))}
        </Container>
      </Loading>
    </>
  );
};

export default Home;
