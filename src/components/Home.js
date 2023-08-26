/**
 * Home Component
 */

import HomeVideo from "./HomeVideo";
import HomeMenu from "./HomeMenu";
import SearchExcercise from "./SearchExercise";
import styles from "../styles/home.module.css";

const Home = () => {

  return (
    <>
      <section className={styles.home}>
        <HomeVideo />
        <HomeMenu />
      </section>
      <SearchExcercise />
    </>
  );
};

export default Home;
