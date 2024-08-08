// interface IDetails {}

import { useParams } from "react-router-dom";
import InfoVideo from "./components/infoVideo";
import { useEffect, useState } from "react";
import { useGetMovieQuery } from "@store/store";
import { IinfoVideo } from "@types";
import Videos from "./components/videos";
import { Section } from "@components/common";
import { Loading } from "@components/feedback";
// import { IMovie } from "@types";

const Details = () => {
  const { category, id } = useParams();
  const [items, setItems] = useState({} as IinfoVideo);

  const { data, isLoading, isFetching, isError, error } = useGetMovieQuery({
    category: category as string,
    id: Number(id),
  });

  useEffect(() => {
    if (isLoading || isError) return;
    if (data) {
      setItems(data);
    }
  }, [data, isError, isLoading]);

  const {
    title,
    genres,
    credits,
    poster_path,
    original_title,
    overview,
    videos,
  } = items;

  return (
    <>
      <Loading
        error={error}
        isLoading={isLoading}
        isError={isError || isFetching}
      >
        <InfoVideo
          title={title}
          genres={genres}
          credits={credits}
          poster_path={poster_path}
          original_title={original_title}
          overview={overview}
        />
        <Videos videos={videos?.results as []} />
        <Section
          title={`Similar ${category === "movie" ? "movies" : "series"}`}
          category={category as string}
          // className={`${maxWidth}`}
          id={Number(id)}
          showSimilarShows
        />
      </Loading>
    </>
  );
};

export default Details;
