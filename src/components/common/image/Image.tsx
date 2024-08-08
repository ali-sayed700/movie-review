import { LazyLoadImage } from "react-lazy-load-image-component";

import { useState } from "react";
interface Imag {
  src: string;
  className?: string;
  alt: string;
  width: string | number;
  height: string | number;
  effect?: "zoomIn";
}
import styles from "./styles.module.css";
const { scal95, scal100 } = styles;

const Image = ({ src, className, width, alt, height, effect }: Imag) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const onLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <LazyLoadImage
      wrapperProps={{
        style: { transitionDelay: "1s" },
      }}
      src={src}
      alt={alt}
      height={height}
      width={width}
      className={`
         ${className}
         ${
           !isImageLoaded
             ? `opacity-0 ${effect === "zoomIn" ? `${scal95}` : ""}`
             : `opacity-100 ${effect === "zoomIn" ? `${scal100}` : ""}`
         }
            `}
      onLoad={onLoad}
    />
  );
};

export default Image;
