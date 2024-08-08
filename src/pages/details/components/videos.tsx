interface Ivideos {
  videos: { id: string; name: string; key: string }[];
}
import styles from "./styles.module.css";
const { videoIfram } = styles;

const videos = ({ videos }: Ivideos) => {
  const youtubeVideos = videos?.slice(0, 2);
  return (
    <section className="container d-flex flex-column py-5 gap-md-5 gap-sm-3">
      {youtubeVideos?.map((video) => {
        return (
          <div
            key={video.id}
            className="d-flex flex-column gap-2  w-75 mx-auto"
          >
            <h2 className="fs-4 textColor text-light">{video.name}</h2>
            <div className={`w-100 rounded mx-auto ${videoIfram}`}>
              <iframe
                src={`https://www.youtube.com/embed/${video.key}?enablejsapi=1&origin=http://127.0.0.1:5173/`}
                title="trailer"
                width="100%"
                height="100%"
                className="rounded-md"
                allowFullScreen
              />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default videos;
