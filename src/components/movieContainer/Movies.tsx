import {useEffect} from "react";

import {useAppSelector} from "../../hooks/reduxHooks";
import {movieActions} from "../../redux/slices/moviesSlicesContainer/MovieSlice";
import {Movie} from "./Movie";
import { useAppDispatch} from "../../hooks/reduxHooks";
import css from "./Movie.module.css"
import {useSearchParams} from "react-router-dom";
import {Pagination} from "../Pagination";

const Movies = () => {

    const [query] = useSearchParams();
    const {movies, totalPages, imageMovie} =
        useAppSelector(state => state.movies);

    const dispatch = useAppDispatch();

    const currentPage = query.get('page') || '1';

    useEffect(() => {
        dispatch(movieActions.getAllMovies2(currentPage))
    }, [dispatch, currentPage]);

    return (
        <div>
            <div className={css.moviesContainer}>
                {movies.map(movie=> <Movie key={movie.id} movie={movie} />)}
            </div>
            <div className={css.paginationButton}>
                <Pagination totalPages={totalPages}/>
            </div>
        </div>

    );
};

export {Movies};