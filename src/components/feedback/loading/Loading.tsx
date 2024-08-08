import LottieHandler from "../lottieHandler/LottieHandler";
import { SkelatonLoader } from "../skeletons/SkeletonImg";

type LoadingProps = {
  isLoading?: boolean;
  isError?: boolean;
  error?: any;
  children: React.ReactNode;
  className?: string;
  isMoviesSliderLoader?: boolean;
  style?: string;
};

const Loading = ({
  isLoading,
  isError,
  error,
  children,
  className,
  style,
  isMoviesSliderLoader,
}: LoadingProps) => {
  if (isLoading) {
    return (
      <SkelatonLoader
        isMoviesSliderLoader={isMoviesSliderLoader}
        className={style}
      />
    );
  }
  if (isError) {
    return (
      <div>
        <LottieHandler
          type="error"
          message={error.error as string}
          className={className}
        />
      </div>
    );
  }
  return <div>{children}</div>;
};

export default Loading;
