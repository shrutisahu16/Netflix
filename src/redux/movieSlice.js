import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        popularMovie:null,
        topRatedMovie:null,
        upcomingMovie:null,
    },
    reducers:{
        //actions
        getNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        getPopularMovie:(state,action)=>{
            state.popularMovie = action.payload;
        },
        getTopRatedMovie:(state,action)=>{
            state.topRatedMovie = action.payload;
        },
        getUpcomingMovie:(state,action)=>{
            state.upcomingMovie = action.payload;
        }
    }
});
export const {getNowPlayingMovies,getPopularMovie,getTopRatedMovie,getUpcomingMovie} = movieSlice.actions;
export default movieSlice.reducer;