import { useState } from "react";
import Modal from "../Modal";
import styles from "./index.module.scss";

export default function MovieCard({ cardData }) {
  const { title, poster_path, id } = cardData;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleVisibility = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      <div className={styles.Main} onClick={handleVisibility}>
        <img
          className={styles.img}
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
        />
        <div className={styles.text}>
          <h3 className={styles.title}>{title}</h3>
        </div>
      </div>
      {isModalVisible && (
        <Modal
          id={id}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      )}
    </>
  );
}
