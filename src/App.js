import { useState, useEffect } from "react";
import NavbarComponent from './components/NavbarComponent'
import Movies from './components/Movies'

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const moviesFromServer = await fetchMovies()
      console.log(moviesFromServer.Search);
      setMovies(moviesFromServer.Search)
    }

    getMovies()
  }, [])

  const fetchMovies = async () => {
    const res = await fetch('http://www.omdbapi.com/?apikey=9f206eb8&&s=avengers')
    const data = await res.json()
    return data
  }

  return (
    <>
    <NavbarComponent title="MP IMDB"></NavbarComponent>
    <Movies movies={movies} ></Movies>
    </>
  );
};

export default App;