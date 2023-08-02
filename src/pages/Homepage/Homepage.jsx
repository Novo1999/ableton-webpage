import Navigation from "../../components/Navigation/Navigation";
import ImageSection from "../../components/ImageSection/ImageSection";
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <div className={styles.home}>
      <Navigation />
      <ImageSection />
    </div>
  );
}

export default Homepage;
