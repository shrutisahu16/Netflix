import axios from 'axios';
import {  options, Popular_Movie } from '../utils/constant';
import { getPopularMovie } from '../redux/movieSlice';
import { useDispatch } from 'react-redux';
 
const usePopularMovies = async () => {
    const dispatch = useDispatch();
 try {
    const res = await axios.get(Popular_Movie,options);
    dispatch(getPopularMovie(res.data.result));
   //  console.log(res);
 } catch (error) {
    console.log(error);
 }
}
export default usePopularMovies;
