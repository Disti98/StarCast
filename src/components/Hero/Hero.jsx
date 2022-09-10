import { useState, useEffect } from "react";
import { GET } from "../../utils/api.js";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import styles from "./index.module.scss";

export default function Hero() {
  const [heroList, setHeroList] = useState([
    { title: "", vote_average: 0, backdrop_path: "", id: 0 },
  ]);
  const [displayIndex, setDisplayIndex] = useState(0);
  let { title, vote_average, backdrop_path, id } = heroList[displayIndex];

  useEffect(() => {
    GET("movie", "top_rated", "&language=en-US&page=1").then((data) =>
      setHeroList(() => data.results)
    );
  }, []);

  const handlePrevOnClick = () => {
    displayIndex === 0
      ? setDisplayIndex(heroList.length - 1)
      : setDisplayIndex(displayIndex - 1);
  };

  const handleNextOnClick = () => {
    displayIndex === heroList.length - 1
      ? setDisplayIndex(0)
      : setDisplayIndex(displayIndex + 1);
  };

  return (
    <div className={styles.Main}>
      <span className={styles.prev_btn} onClick={handlePrevOnClick}>
        <IoIosArrowBack />
      </span>
      <div className={styles.card}>
        <img
          className={styles.img}
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          alt={id}
        />

        <h3>{title}</h3>
        <p>
          {vote_average}/10
          <AiFillStar />
        </p>
      </div>
      <span className={styles.next_btn} onClick={handleNextOnClick}>
        <IoIosArrowForward />
      </span>
    </div>
  );
}
