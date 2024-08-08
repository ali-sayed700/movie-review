import { Image } from "@components/common";
import { useMediaQuery } from "usehooks-ts";

interface ICasts {
  casts: {
    id: string;
    profile_path: string;
    name: string;
  }[];
}
import styles from "./styles.module.css";
import { useMotion } from "@hooks/index";
import { motion } from "framer-motion";

const { cast } = styles;
const Casts = ({ casts }: ICasts) => {
  const isNotMobile = useMediaQuery("(min-width: 768px");
  const { fadeDown, staggerContainer } = useMotion();
  const topCasts = casts.slice(0, 4);

  if (topCasts.length === 0) return null;
  return (
    <motion.div className={cast} variants={staggerContainer(0.2, 1)}>
      {topCasts.map((cast) => {
        const { id, profile_path: profilePath, name } = cast;

        return (
          <motion.figure
            key={id}
            className="d-flex flex-column  gap-2"
            variants={fadeDown}
          >
            <div>
              <Image
                width={isNotMobile ? 64 : 40}
                height={isNotMobile ? 96 : 54}
                src={`https://image.tmdb.org/t/p/original/${profilePath}`}
                alt={name}
              />
            </div>
            <h4>{name}</h4>
          </motion.figure>
        );
      })}
    </motion.div>
  );
};

export default Casts;
