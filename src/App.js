import {useState, useEffect} from "react"

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  console.log(movies)

  useEffect(() => {
    getMovies();
    // fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
    //   .then(response => response.json())
    //   .then(json => {
    //     setMovies(json.data.movies);
    //     setLoading(false);
    //   })
  }, [])


  return <div>
    {loading ? <h1>Loading...</h1> : null}
  </div>
}

export default App;
