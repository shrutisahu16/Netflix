import React, { useEffect } from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import MainContainer from './MainContainer';
import MovieContainer from './MovieContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovie from '../hooks/useTopRatedMovies';
import useUpcomingMovie from '../hooks/useUpcomingMovie';

export default function Browse() {
  const user = useSelector(store => store.app.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // my custom hooks
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovie();
  useUpcomingMovie();

  useEffect(()=>{

    if (!user) {
      navigate("/");
    }
    
  },[])
  return (

    <div>
      <Header />
      <div>
        <MainContainer/>
        <MovieContainer/>
      </div>
    </div>

  )
}
