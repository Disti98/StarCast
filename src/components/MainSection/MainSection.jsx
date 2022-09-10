import styles from "./index.module.scss";

export default function MainSection({ children }) {
  return <section className={styles.Main}>{children}</section>;
}
