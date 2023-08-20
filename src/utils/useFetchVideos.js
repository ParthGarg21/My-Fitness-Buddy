/**
 * React custom hook to fetch and store the related youtube videos for a given exercise name from the API on the first render
 */

import { useEffect } from "react";

/**
 * Related videos returns an object, which has an array property contents.
 * This content array contains info about around 20 object
 * Each object has a single property "video" which has the following details about a video:
 * channelName
 * description
 * lengthText
 * publishedTimeText
 * thumbnails (an array where each element is an object containing info about a thumbnail cotaining the "url" of the thumbnail)
 * title
 * viewCountText
 * videoId
 */

const useFetchVideos = (exerciseName, setVideos) => {
  const url = `https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseName}&type=v&sort=v`;

  const options = {
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    },
  };

  const fetchVideos = async () => {
    try {
      const res = await fetch(url, options);
      const videos = await res.json();
      setVideos(videos.contents);
    } catch (err) {
      console.log(err);
      setVideos({ err });
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);
};

export default useFetchVideos;
