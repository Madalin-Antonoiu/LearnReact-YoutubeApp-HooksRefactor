import { useState, useEffect } from "react";
import youtube from "../api/youtube";

const KEY = "AIzaSyCohs3GZKg8swYyucbWJV087xZTA-vO5yU";

export default (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY
      }
    });

    setVideos(response.data.items);
  };

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  return [videos, search];
};
