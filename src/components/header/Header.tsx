import {Link} from "react-router-dom";
import css from "./Header.module.css";
import {useAppSelector} from "../../hooks/reduxHooks";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {genreActions} from "../../redux/slices/GenreSlice";

const Header = () => {
    const dispatch = useDispatch();
    const {me} = useAppSelector(state => state.me);
    const {genres} = useAppSelector(state => state.genres);

    useEffect(() => {
        dispatch(genreActions.getAllGenres2());
    }, [dispatch]);

    return (
        <div className={css.Header}>
            <div className={css.titleContainer}>
                <div className={css.linkContainer}>
                    <Link to={'/movies'}>movies</Link>
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
