import { IMovie } from "@types";
import { Link } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";
import Image from "@components/common/image/Image";
import styles from "./styles.module.css";
import { FaYoutube } from "react-icons/fa";

const { movieCardImg, iconTube } = styles;
type TMovie = { movie: IMovie; category: string };
const MovieCard = ({ movie, category }: TMovie) => {
  const { poster_path, original_title: title = "", name, id } = movie;

  const isMobile = useMediaQuery("(max-width: 380px)");
  return (
    <>
      <Link
        to={`/${category}/${id}`}
        className="  overflow-hidden position-relative d-block  rounded"
      >
        <Image
          height={!isMobile ? 250 : 216}
          width={170}
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt={movie.original_title as string}
          className={movieCardImg}
          effect="zoomIn"
        />
        <div className={iconTube}>
          <div>
            <FaYoutube />
          </div>
        </div>
      </Link>

      <h4 className="text-center fs-6 text-light pt-2 textColor">
        {(title.length > 50 ? title?.split(":")[0] : title) || name}
      </h4>
    </>
  );
};

export default MovieCard;
