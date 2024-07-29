import {useEffect} from "react";

import {Link} from "react-router-dom";
import css from "./Header.module.css";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {genreActions} from "../../redux/slices/GenreSlice";

const Header = () => {
    const dispatch = useAppDispatch();
    const {me} = useAppSelector(state => state.me);
    const {genres} = useAppSelector(state => state.genres);

    useEffect(() => {
        dispatch(genreActions.getAllGenres2());
    }, [dispatch]);

    return (
        <div className={css.Header}>
            <div className={css.titleContainer}>
                <div className={css.linkContainer}>
                    <Link to={'/movies'}>SUPER-PUPER MOVIES</Link>
                    {/*<Link to={'/genres'}>genres</Link>*/}
                </div>
                <div className={css.userContainer}>
                    {me ? <span>{me.username}</span> : <Link to={'/me'}>me</Link>}
                </div>
            </div>

            <div className={css.genresContainer}>
                {genres.map(genre => (
                    <Link key={genre.id} to={`/genres/${genre.id}`} className={css.genreLink}>
                        {genre.name}
                    </Link>
                ))}
            </div>

        </div>
    );
};

export {Header};
