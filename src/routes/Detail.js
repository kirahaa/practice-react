import {useParams} from "react-router-dom"
import {useEffect, useState, useCallback} from "react";

function Detail() {
  const {id} = useParams()
  const [movie, setMovie] = useState({})

  const getMovie = useCallback(async () => {
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    const json = await response.json()
    setMovie(json.data.movie)
  }, [id])

  useEffect(() => {
    getMovie()
  }, [getMovie])

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.background_image} alt={movie.title}/>
      <div>
        <div>Intro : {movie.description_intro}</div>
        <div>Runtime : {movie.runtime}</div>
        <div>Rating : {movie.rating}</div>
      </div>
    </div>
  )
}

export default Detail