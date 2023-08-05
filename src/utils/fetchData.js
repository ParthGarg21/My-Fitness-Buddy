const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_EXCERCISEDB_API,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

const fetchData = async (url) => {
  // try {
    const res = await fetch(url, options);
    const data = await res.json();
    // Returns a promise which always results in the "data"
    return data;
  // } catch {
  //   // Returns a promise which always results in an empty array
  //   return [];
  // }
};

export default fetchData;
