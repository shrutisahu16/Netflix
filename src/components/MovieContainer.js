import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const MovieContainer=()=>{
  
    const movie = useSelector(store=>store.movie);
    // console.log(movie);
    return(

    <div className='bg-black'>
      <div className='-mt-52 relative z-10'>

        <MovieList title={"Popular Movie"} movies={movie.popularMovie} />
        <MovieList title={"Now Playing Movie"} movies={movie.nowPlayingMovies} />
        <MovieList title={"Top Rated Movie"} movies={movie.topRatedMovie} />
        <MovieList title={"Upcoming Movie"} movies={movie.upcomingMovie} />
      </div>
    </div>
    )
  
}
export default  MovieContainer
// 4:34