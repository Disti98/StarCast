import { useState, useEffect } from "react";
import { GET } from "../../utils/api.js";
import { AiOutlineClose, AiFillStar } from "react-icons/ai";
import styles from "./index.module.scss";

export default function Modal({ id, isModalVisible, setIsModalVisible }) {
  const [isActive, setIsActive] = useState("");
  const [trailer, setTrailer] = useState();
  const [movieDetails, setMovieDetails] = useState({
    title: "",
    poster_path: "",
    overview: "",
    release_date: "",
    vote_average: 0,
  });
  const { title, poster_path, overview, release_date, vote_average } =
    movieDetails;

  useEffect(() => {
    GET("movie", `${id}`, "&language=en-US").then((data) =>
      setMovieDetails(data)
    );

    GET("movie", `${id}/videos`, "&language=en-US").then((data) => {
      setTrailer(data.results[0].key);
    });
  }, [id]);

  useEffect(() => {
    isModalVisible
      ? setTimeout(() => setIsActive(styles.active), 500)
      : setTimeout(() => setIsActive(""), 500);
  }, [isModalVisible]);

  const handleVisibility = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={`${styles.Main} ${isActive}`}>
      <div className={styles.content}>
        <div className={styles.modal}>
          <div className={styles.left}>
            <h3 className={styles.title}>{title}</h3>
            <img
              className={styles.img}
              src={`https://image.tmdb.org/t/p/original${poster_path}`}
              alt={id}
            />
            {vote_average > 0 && (
              <p className={styles.rating}>
                {`${Number(vote_average.toFixed(1))}/10`}
                <AiFillStar />
              </p>
            )}
          </div>
          <div className={styles.right}>
            <p className={styles.overview}>{overview}</p>
            <p className={styles.release}>
              Release: {release_date.split("-").reverse().join("/")}
            </p>
            <iframe
              title={title}
              className={styles.iframe}
              src={`https://www.youtube.com/embed/${trailer}`}
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </div>
        <span className={styles.close} onClick={handleVisibility}>
          <AiOutlineClose />
        </span>
      </div>
    </div>
  );
}
