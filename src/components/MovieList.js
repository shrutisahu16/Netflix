import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies })=> {
  
  return (
    <div className='px-8'>
        <h1 className='text-3xl text-white'>{title}</h1>
        <div >
            <div className='flex items-center '>
              console.log(movies);
                {
                  movies.map((movie)=>{
                    return(
                      <MovieCard key={movie.id} movie={movie}/>
                    )
                  })
                  
                    
                  
                }
            </div>
        </div>
    </div>
  )
}

export default MovieList

//4:38