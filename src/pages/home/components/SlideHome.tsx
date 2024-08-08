import { memo } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
// import { Container, Row } from "react-bootstrap";
import { useMotion } from "@hooks/motions/UseMotion";
import Poster from "@components/common/poster/Poster";
import { GlobalModalContext } from "@hooks/context/GlobalContext";
import { IMovie } from "@types";
import { useNavigate } from "react-router-dom";
type TMovie = { movie: IMovie };
const { slideHome } = styles;
const SlideHome = ({ movie }: TMovie) => {
  const {
    overview,
    original_title: title,
    poster_path: posterPath,
    id,
  } = movie;
  const { setIsModalOpen, getTrailerId } = GlobalModalContext();
  const { fadeDown, staggerContainer } = useMotion();
  const navigate = useNavigate();
  const showTrailer = () => {
    setIsModalOpen(true);
    getTrailerId(id as string);
  };

  const handleWatchNow = () => {
    navigate(`/movie/${id}`);
  };
  return (
    <div
      className={`${slideHome} d-flex align-items-center h-100 text-white container`}
    >
      <div className="row align-items-center gap-5 ">
        <motion.div
          variants={staggerContainer(0.2, 0.3)}
          initial="hidden"
          animate="show"
          className="d-flex flex-column gap-3 col-md-6"
        >
          <motion.h2 variants={fadeDown}>{title}</motion.h2>
          <motion.p variants={fadeDown} className="text-white-50">
            {overview.length > 180
              ? `${overview.substring(0, 180)}...`
              : overview}
          </motion.p>
          <motion.div
            variants={fadeDown}
            className="d-flex align-items-center gap-3 "
          >
            <button onClick={showTrailer} className="btn btn-outline-light">
              watch trailer
            </button>
            <button className="btn btn-danger" onClick={handleWatchNow}>
              watch now
            </button>
          </motion.div>
        </motion.div>
        <Poster title={title as string} posterPath={posterPath} />
      </div>
    </div>
  );
};

export default memo(SlideHome);
