import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";

import {AppDispatch, RootState} from "../../redux/store";
import {genreListActions} from "../../redux/slices/genresSlicesContainer/GenreListSlice";
import css from "./Genre.module.css"
import {Movie} from "../movieContainer/Movie";

const GenreList = () => {

    const {list_id} = useParams<{ list_id: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const {moviesList, loading, error} = useSelector((state: RootState) => state.genreList);

    useEffect(() => {
        if (list_id) {
            dispatch(genreListActions.getMoviesByGenre(list_id));
        }
    }, [dispatch, list_id]);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}

            <div className={css.genresContainer}>

                {(Array.isArray(moviesList) ? moviesList : []).map(movie => (

                    <Movie key={movie.id} movie={movie}/>
                ))}
            </div>
        </div>
    );
};

export {GenreList};