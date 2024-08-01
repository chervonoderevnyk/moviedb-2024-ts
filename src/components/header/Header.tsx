import {useEffect} from "react";

import {Link, useLocation} from "react-router-dom";
import css from "./Header.module.css";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {genreActions} from "../../redux/slices/genresSlicesContainer/GenreSlice";

const Header = () => {
    const dispatch = useAppDispatch();
    const {me} = useAppSelector(state => state.me);
    const {genres} = useAppSelector(state => state.genres);
    const location = useLocation();

    useEffect(() => {
        dispatch(genreActions.getAllGenres2());
    }, [dispatch]);

    // Отримати поточний list_id з URL та перетворити на число
    const currentGenreId = Number(location.pathname.split('/')[2]);

    return (
        <div className={css.Header}>
            <div className={css.titleContainer}>
                <div className={css.linkContainer}>
                    <Link to={'/movies'}>SUPER-PUPER MOVIES</Link>
                </div>
                <div className={css.userContainer}>
                    {me ?
                        <span>{me.username}</span> :
                        <Link to={'/me'}>me</Link>}
                </div>
            </div>

            <div className={css.genresContainer}>
                {genres.map(genre => (

                    <Link
                        key={genre.id}
                        to={`/list/${genre.id}`}
                        className={
                        `${css.genreLink} ${currentGenreId == genre.id ? css.activeGenreLink : ''}`}
                    >
                        {genre.name}
                    </Link>
                ))}
            </div>

        </div>
    );
};

export {Header};
