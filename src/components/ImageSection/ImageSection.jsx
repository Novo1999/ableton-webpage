import styles from "./ImageSection.module.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function ImageSection() {
  return (
    <section className={styles.image__section}>
      <div className={styles.studio}>
        <div className={styles.studio_link}>
          <h1>Your computer is your instrument</h1>
          <Link to="Live">Learn more about Live &gt;</Link>
        </div>
        <img
          className={styles.studio__img}
          src="/images/pexels-pixabay-164938-min.jpg"
          alt="studio"
        />
      </div>
      <div className={styles.habit}>
        <div className={styles.habit_link}>
          <h1>Your computer is your instrument</h1>
          <Link to="Live">Learn more about Live &gt;</Link>
        </div>
        <img
          className={styles.habit__img}
          src="/images/pexels-lisa-fotios-1092671-min.jpg"
          alt="habit"
        />
      </div>
      <div className={styles.music}>
        <div className={styles.music_link}>
          <h1>Your computer is your instrument</h1>
          <Link to="Live">Learn more about Live &gt;</Link>
        </div>
        <img
          className={styles.music__img}
          src="/images/denisse-leon-OVEWbIgffDk-unsplash-min.jpg"
          alt="music"
        />
      </div>
    </section>
  );
}

export default ImageSection;
