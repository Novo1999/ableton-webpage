import styles from "./ImageSection.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function ImageSection() {
  return (
    <div className={styles.image__section}>
      <div className={styles.studio__text}>
        <h1>Your computer is your instrument</h1>
        <a href="https://www.ableton.com/en/live/">
          Learn more about Live &gt;
        </a>
      </div>
      <img
        className={styles.studio}
        src="/images/pexels-pixabay-164938-min.jpg"
        alt="studio"
      />
      <img
        className={styles.habit}
        src="/images/pexels-lisa-fotios-1092671-min.jpg"
        alt="habit"
      />
      <img
        className={styles.music}
        src="/images/denisse-leon-OVEWbIgffDk-unsplash-min.jpg"
        alt="music"
      />
    </div>
  );
}

export default ImageSection;
