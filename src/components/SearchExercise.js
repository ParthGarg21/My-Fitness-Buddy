import { useState } from "react";
import HorizontalBar from "./HorizontalBar";

const SearchExcercise = () => {
  const [value, setValue] = useState("");

  // Get all the excercises when the user searches, and  then filter out the ones satisfying the user's search
  // Each exercise has a bodyPart prop, target prop, name prop, equipment prop
  const handleForm = (e) => {
    e.preventDefault();
    const url = "https://exercisedb.p.rapidapi.com/exercises";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "cd073e2f94msh588cfacf632e579p1db765jsn995356271579",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    const searchValue = value.toLowerCase();
    const fetchData = async () => {
      const res = await fetch(url, options);
      const data = await res.json();

      const reqd = data.filter((exercise) => {
        return (
          exercise.bodyPart.toLowerCase().includes(searchValue) ||
          exercise.target.toLowerCase().includes(searchValue) ||
          exercise.equipment.toLowerCase().includes(searchValue) ||
          exercise.name.toLowerCase().includes(searchValue)
        );
      });

      console.log(reqd);
    };

    fetchData();
  };

  const handleValue = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <section className="search-exercise-con">
        <h1 className="search-title">Search for exercises or body parts!</h1>
        <form className="search-form" onSubmit={handleForm}>
          <input
            className="search-txt"
            type="text"
            value={value}
            onChange={handleValue}
          />
          <button className="search-btn" type="submit">
            Search
          </button>
        </form>
      </section>

      <section className="search-exercise-con" >
        <h1 className="search-title">Or select a body part : </h1>
        <HorizontalBar />
      </section>
    </>
  );
};

export default SearchExcercise;
