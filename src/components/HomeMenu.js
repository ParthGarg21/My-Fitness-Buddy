/**
 * Home visible content component
 */

import banner from "../assets/images/banner.jpg";
import styles from "../styles/home.module.css";

const HomeMenu = () => {
  return (
    <div className={styles.homeMenu}>
      <div className={styles.homeContainer}>
        <span className={styles.homeTitle}>Welcome to My Fitness Buddy</span>
        <br />
        <p className={styles.homeContent}>
          Your one stop destination to learn all different kinds of exercises.
        </p>
        <p className={styles.homeContent}>Sweat, Smile and Repeat!!</p>
        <a className={styles.homeBtn} href="#search-exercises">
          Explore Exercises
        </a>
      </div>
      <div className={styles.homeImageContainer}>
        <img className={styles.homeImage} src={banner} alt="" />
      </div>
    </div>
  );
};

export default HomeMenu;
