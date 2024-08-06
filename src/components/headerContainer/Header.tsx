import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import css from "./Header.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { genreActions } from "../../redux/slices/genresSlicesContainer/GenreSlice";
import { toggleDarkMode } from "../../redux/slices/ModeSlice";

const Header = () => {

    const dispatch = useAppDispatch();
    const { me } = useAppSelector(state => state.me);
    const { genres } = useAppSelector(state => state.genres);
    const isDarkMode = useAppSelector(state => state.darkMode.isDarkMode);
    const location = useLocation();

    useEffect(() => {
        dispatch(genreActions.getAllGenres2());
    }, [dispatch]);

    const currentGenreId = Number(location.pathname.split('/')[2]);

    useEffect(() => {
        document.body.className = isDarkMode ? css.darkMode : css.lightMode;
    }, [isDarkMode]);

    return (
        <div className={`${css.Header} ${isDarkMode ? css.darkModeHeader : ''}`}>
            <div className={css.titleContainer}>
                <div className={css.linkContainer}>
                    <Link to={'/movies'} className={`${css.superPuperMovies} ${isDarkMode ? css.darkModeLink : ''}`}>
                        SUPER-PUPER MOVIES
                    </Link>
                </div>
                <div className={css.userContainer}>
                    <button
                        className={css.darkLightModeButton}
                        onClick={() => dispatch(toggleDarkMode())}
                    >
                        {isDarkMode ? 'light' : 'dark'}
                    </button>

                    {me ? (
                        <span className={`${css.userNameContainer} 
                        ${isDarkMode ? css.darkModeUserNameContainer : ''}`}>
                            {me.username}
                        </span>
                    ) : (
                        <Link to={'/me'}>me</Link>
                    )}
                </div>
            </div>

            <div className={css.genresContainer}>
                {genres.map(genre => (
                    <Link
                        key={genre.id}
                        to={`/list/${genre.id}`}
                        className={`${css.genreLink} ${isDarkMode ? css.darkModeGenreLink : ''}
                         ${currentGenreId === genre.id ? css.activeGenreLink : ''}`}
                    >
                        {genre.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export { Header };
