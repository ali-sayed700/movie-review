import ImgBg from "@assets/images/footer-bg.webp";
import { useMediaQuery } from "usehooks-ts";
import styles from "./styles.module.css";
const { cataBg } = styles;

const CataHeader = ({ category }: { category: string }) => {
  const isMedia = useMediaQuery("(max-width:576px)");
  const styleBg = {
    backgroundImage: ` linear-gradient(
        to right,
        rgba(0, 0, 0, 0.075),
        rgba(0, 0, 0, 0.075)
      ),
      url(${ImgBg})`,
    height: `${isMedia === true ? "98px" : "140px"}`,
  };
  return (
    <>
      <div className={cataBg} style={styleBg}>
        <h2 className={`text-light ${isMedia && "fs-5"} `}>
          {category === "movie" ? "Movie" : "TV Series"}
        </h2>
      </div>
    </>
  );
};

export default CataHeader;
