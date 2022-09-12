import { useState, useEffect } from "react";
import { GET } from "../../utils/api.js";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./index.module.scss";
import MovieCard from "../MovieCard/MovieCard.jsx";

export default function DiscoverList({ discoverRef }) {
  const [discoverList, setDiscoverList] = useState([
    { title: "", vote_average: 0, poster_path: "" },
  ]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    GET("movie", "now_playing", `&language=en-US&page=${page}`).then((data) =>
      setDiscoverList(data.results)
    );
  }, [page]);

  const handlePrevOnClick = () => {
    setPage((prev) => prev - 1);
  };

  const handleNextOnClick = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div ref={discoverRef} className={styles.Main}>
      <div className={styles.head}>
        <h3 className={styles.title}>Discover</h3>
        <span
          className={page > 1 ? styles.prev_btn : styles.prev_btn_dsb}
          onClick={page > 1 ? handlePrevOnClick : undefined}
        >
          <IoIosArrowBack />
        </span>
        <span
          className={page < 10 ? styles.next_btn : styles.next_btn_dsb}
          onClick={page < 10 ? handleNextOnClick : undefined}
        >
          <IoIosArrowForward />
        </span>
      </div>
      <div className={styles.list}>
        {discoverList.map((el, i) => (
          <MovieCard cardData={el} key={i} />
        ))}
      </div>
    </div>
  );
}
