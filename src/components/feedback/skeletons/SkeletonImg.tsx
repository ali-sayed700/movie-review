import { useTheme } from "@hooks/context/themeContext";
import { memo } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useMediaQuery } from "usehooks-ts";

interface SkelatonLoaderProps {
  className?: string;
  isMoviesSliderLoader?: boolean;
}

export const SkelatonLoader = memo(
  ({ className, isMoviesSliderLoader = true }: SkelatonLoaderProps) => {
    const { theme } = useTheme();
    const isThemeLight = theme === "Light";

    const isScreenSmall = useMediaQuery("(max-width: 380px)");

    const classNames = `${
      isMoviesSliderLoader
        ? "d-flex align-items-center gap-3 overflow-hidden"
        : "d-flex align-items-center gap-3 flex-wrap justify-content-center"
    } ${className}`;
    const arrSize = isMoviesSliderLoader
      ? Math.floor(window.innerWidth / 170) + 1
      : 10;

    return (
      <SkeletonTheme
        baseColor={isThemeLight ? "#5c5656" : "#333"}
        highlightColor={isThemeLight ? "#f5f5f5" : "#444"}
      >
        <div className={`${classNames}`}>
          {Array.from({ length: arrSize }).map((_item, index) => {
            return (
              <div
                key={index}
                className={`${!isMoviesSliderLoader ? "mb-5" : ""}`}
              >
                <Skeleton height={isScreenSmall ? 216 : 250} width={170} />
                <div className="text-center">
                  <Skeleton className="mt-sm-4 mt-3 w-75 " />
                </div>
              </div>
            );
          })}
        </div>
      </SkeletonTheme>
    );
  }
);
