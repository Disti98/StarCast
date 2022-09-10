import styles from "./index.module.scss";

export default function MovieCard({ cardData }) {
  const { title, poster_path } = cardData;

  return (
    <div className={styles.Main}>
      <img
        className={styles.img}
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt={title}
      />
      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </div>
  );
}
