import Lottie from "lottie-react";
import notFound from "@assets/lottieFile/notFound.json";
import loading from "@assets/lottieFile/loading.json";
import error from "@assets/lottieFile/error.json";

const lottieFilesMap = {
  notFound,
  loading,
  error,
};

type LottieHandlerProps = {
  type: keyof typeof lottieFilesMap;
  message?: string;
  className?: string;
};

const LottieHandler = ({ type, message, className }: LottieHandlerProps) => {
  const lottie = lottieFilesMap[type];
  const messageStyle =
    type === "error"
      ? { fontSize: "19px", color: "red" }
      : { fontSize: "19px", marginTop: "30px" };

  return (
    <div className={`d-flex flex-column align-items-center  ${className}`}>
      <Lottie animationData={lottie} style={{ width: "400px" }} />
      {message && <h3 style={messageStyle}>{message}</h3>}
    </div>
  );
};

export default LottieHandler;
