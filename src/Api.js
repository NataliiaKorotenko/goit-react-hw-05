import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";


const options = {
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTA5OWIwOGQ0NzNkMmU1MzFjNjNhYmY5ZjcyNWE2MSIsIm5iZiI6MTcyNTUzMDIxNS43MjI3MTksInN1YiI6IjY2ZDk3MmJkZWQ5MTgzNjQ2MDZkMDVjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4k4qDJ_4ffy4Age60cuB_PUIK05Z-WPzrBoq7EUdAVQ",
  }
};

export const fetchTrendingMovies = async () => {
    const response = await axios.get("trending/movie/day", options);
    return response.data;
  };