import {useAppSelector} from "../../hooks/reduxHooks";
import {useEffect} from "react";
import {movieActions} from "../../redux/slices/MovieSlice";
import {Movie} from "./Movie";
import { useAppDispatch} from "../../hooks/reduxHooks";

const Movies = () => {

    const {movies} = useAppSelector(state => state.movies);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getAllMovies2())
    }, [dispatch]);

    return (
        <div>
            {movies.map(movie=> <Movie key={movie.id} movie={movie} />)}
        </div>
    );
};

export {Movies};