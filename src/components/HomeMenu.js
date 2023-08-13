/**
 * Home visible content component
 */

import banner from "../assets/images/banner.jpg";

const HomeMenu = () => {
  return (
    <div className="home-menu">
      <div className="home-container">
        <span className="home-title">Welcome to My Fitness Buddy</span>
        <br />
        <p className="home-content">
          Your one stop destination to learn all different kinds of
          exercises.
        </p>
        <p className="home-content">Sweat, Smile and Repeat!!</p>
        <button className="home-btn">Explore Exercises</button>
      </div>
      <div className="home-image-container">
        <img className="home-image" src={banner} alt="" />
      </div>
    </div>
  );
};

export default HomeMenu;
