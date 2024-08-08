import { memo } from "react";
import { motion } from "framer-motion";
import { useMotion } from "@hooks/motions/UseMotion";
import Image from "../image/Image";
import styles from "./styles.module.css";
const { poster } = styles;

type Iposter = {
  posterPath: string;
  title: string;
};
const Poster = ({ title, posterPath }: Iposter) => {
  const { zoomIn } = useMotion();
  return (
    <motion.div
      variants={zoomIn(0.6, 0.8)}
      initial="hidden"
      animate="show"
      className={` col-4 m-auto  d-none d-md-block ${poster}`}
    >
      <Image
        width={254}
        height={380}
        src={`https://image.tmdb.org/t/p/original/${posterPath}`}
        alt={title}
        className="object-fit-cover shadow-lg rounded"
      />
    </motion.div>
  );
};

export default memo(Poster);
