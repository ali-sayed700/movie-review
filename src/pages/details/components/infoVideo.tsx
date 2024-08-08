import { IinfoVideo } from "@types";
import styles from "./styles.module.css";
import { Poster } from "@components/common";
import Genre from "./Genre";
import { useState } from "react";
import Casts from "./Casts";
import { useMotion } from "@hooks/index";
import { motion } from "framer-motion";

const { infoVid } = styles;
const InfoVideo = ({
  title,
  genres,
  credits,
  poster_path,
  original_title: name,
  overview,
}: IinfoVideo) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow((prev) => !prev);
  const { fadeDown, staggerContainer } = useMotion();

  const backgroundStyle = {
    backgroundImage: `linear-gradient(to top, rgba(0,0,0), rgba(0,0,0,0.98),rgba(0,0,0,0.8) ,rgba(0,0,0,0.4)),url('https://image.tmdb.org/t/p/original/${poster_path}'`,
    backgroundPosition: "top",
    backgroundSize: "cover",
  };

  return (
    <section className={` w-100 py-5`} style={backgroundStyle}>
      <div className="container d-flex justify-content-center gap-3 gap-sm-5  py-5">
        <Poster title={title} posterPath={poster_path} />
        <motion.div
          className={`${infoVid} `}
          variants={staggerContainer(0.2, 0.4)}
          initial="hidden"
          animate="show"
        >
          <motion.h2 variants={fadeDown}>{title || name}</motion.h2>
          <motion.ul
            variants={fadeDown}
            className="d-flex aligns-items-center gap-4 gap-sm-3 flex-wrap"
          >
            {genres?.map((genre: { id: number; name: string }) => {
              return <Genre key={genre.id} name={genre.name} />;
            })}
          </motion.ul>
          <motion.p variants={fadeDown}>
            <span>
              {" "}
              {overview?.length > 280
                ? `${show ? overview : `${overview.slice(0, 280)}...`}`
                : overview}
            </span>
            <button
              onClick={toggleShow}
              className={
                overview?.length > 280
                  ? " d-inline-block btn text-light bg-danger mt-2 ms-2 fs-6"
                  : "d-none"
              }
            >
              {!show ? "show more" : "show less"}
            </button>
          </motion.p>

          <Casts casts={credits?.cast || []} />
        </motion.div>
      </div>
    </section>
  );
};

export default InfoVideo;
